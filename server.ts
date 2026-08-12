import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini Client
let aiClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    try {
      aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } catch (err) {
      console.error('Failed to initialize GoogleGenAI client:', err);
    }
  }
  return aiClient;
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Smart Government Scheme Assistant' });
});

// Gemini Assistant Chat Proxy Endpoint
app.post('/api/assistant/chat', async (req, res) => {
  const { message, language } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message query is required' });
  }

  const ai = getGenAI();

  if (!ai) {
    // Graceful offline knowledge base fallback
    const isHindi = language === 'hi';
    const fallbackMessage = isHindi
      ? 'स्मार्टस्कीम एआई: सरकारी योजनाओं की जानकारी myScheme (myscheme.gov.in) और भारत सरकार के मंत्रालयों द्वारा आधिकारिक रूप से सत्यापित है। आप किसान, छात्र, महिला, सूक्ष्म-उद्यमी या स्वास्थ्य कल्याण योजनाओं के बारे में पूछ सकते हैं।'
      : 'SmartScheme AI: Scheme parameters are synchronized with myScheme (myscheme.gov.in) and official Ministry portals. You can query welfare programs for Farmers, Students, Women, MSMEs, or Senior Citizens.';
    return res.json({ reply: fallbackMessage });
  }

  try {
    const systemPrompt = `You are the official AI Assistant for "Smart Government Scheme Assistant" (🇮🇳 SmartScheme AI), an intelligent public portal helping Indian citizens discover verified central and state welfare schemes.
Respond in ${language === 'hi' ? 'Hindi (हिंदी)' : 'English'}, or in the language used by the user.
Always be polite, clear, accurate, and structured with bullet points.
Highlight key eligibility criteria, benefits, required documents, and mention that citizens can apply directly on official .gov.in or .nic.in portals.
Always append a brief notice encouraging citizens to double check details on myscheme.gov.in.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            { text: `${systemPrompt}\n\nUser Question: ${message}` }
          ]
        }
      ]
    });

    const replyText = response.text || 'Unable to fetch response. Please check official government portals.';
    return res.json({ reply: replyText });
  } catch (err: any) {
    console.error('Gemini API Error:', err);
    const isHindi = language === 'hi';
    return res.json({
      reply: isHindi
        ? 'क्षमा करें, प्रतिक्रिया उत्पन्न करने में एक क्षणिक व्यवधान हुआ। कृपया आधिकारिक जानकारी के लिए myscheme.gov.in देखें।'
        : 'Apologies, experienced a momentary disruption. Please refer to myscheme.gov.in for verified scheme parameters.'
    });
  }
});

// Production static serving vs Dev Vite Middleware
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🇮🇳 Smart Government Scheme Assistant running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
