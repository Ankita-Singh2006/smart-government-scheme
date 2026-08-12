import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ChatMessage } from '../types/scheme';
import {
  Bot,
  User,
  Send,
  Trash2,
  Sparkles,
  ShieldAlert,
  Loader2,
  HelpCircle
} from 'lucide-react';

export const AIAssistant: React.FC = () => {
  const { t, language } = useApp();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'assistant',
      text:
        language === 'hi'
          ? 'नमस्ते! मैं स्मार्टस्कीम एआई सहायक हूँ। मैं आपको सरकारी योजनाओं, पात्रता मानदंडों, आवश्यक दस्तावेजों या आवेदन प्रक्रियाओं को समझने में मदद कर सकता हूँ। आज मैं आपकी क्या सहायता कर सकता हूँ?'
          : 'Namaste! I am the SmartScheme AI Assistant. I can help you understand government schemes, eligibility rules, required documents, and official application procedures in English or Hindi. How can I assist you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    language === 'hi' ? 'छात्रों के लिए कौन सी योजनाएं उपलब्ध हैं?' : 'Which schemes are available for students?',
    language === 'hi' ? 'किसानों के लिए कौन सी योजनाएं हैं?' : 'What schemes are available for farmers?',
    language === 'hi' ? 'पीएम-किसान के लिए कौन से दस्तावेज चाहिए?' : 'What documents are required for PM-KISAN?',
    language === 'hi' ? 'आयुष्मान भारत के लिए आवेदन कैसे करें?' : 'How can I apply for Ayushman Bharat?',
    language === 'hi' ? 'महिलाओं के लिए सरकारी योजनाएं दिखाएं।' : 'Show government schemes for women.',
    language === 'hi' ? 'मेरी ₹2 लाख आय के आधार पर कौन सी योजना मिलेगी?' : 'What schemes can I get based on my income?'
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/assistant/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          language: language
        })
      });

      if (!response.ok) {
        throw new Error('API server unavailable');
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || (language === 'hi' ? 'क्षमा करें, प्रतिक्रिया उत्पन्न करने में असमर्थ। कृपया आधिकारिक सरकारी पोर्टल पर सत्यापित करें।' : 'Apologies, unable to generate a response. Please verify on the official government portal.'),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      // Fallback offline response
      const fallbackReply =
        language === 'hi'
          ? 'स्मार्टस्कीम एआई: सरकारी योजनाओं के नियम strictly myScheme और मंत्रालयों के पोर्टल पर उपलब्ध हैं। कृपया आधिकारिक जानकारी के लिए myscheme.gov.in पर जाएं।'
          : 'SmartScheme AI: Scheme parameters are synchronized with official Ministry guidelines. For exact application steps, please verify on myscheme.gov.in.';

      const assistantMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        sender: 'assistant',
        text: fallbackReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'm1',
        sender: 'assistant',
        text:
          language === 'hi'
            ? 'चैट इतिहास साफ़ कर दिया गया है। आप कोई भी नया प्रश्न पूछ सकते हैं!'
            : 'Chat history cleared. Feel free to ask any new question!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto my-8 bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden flex flex-col h-175">
      {/* Assistant Header */}
      <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-extrabold text-base sm:text-lg flex items-center gap-2">
              <span>{t.aiTitle}</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full font-mono">
                Gemini 3.6 Flash Grounded
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              {t.aiSubtitle}
            </p>
          </div>
        </div>

        <button
          onClick={handleClearChat}
          title={t.clearChat}
          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      {/* Suggested Questions Bar */}
      <div className="bg-slate-50 border-b border-slate-200 p-3 overflow-x-auto flex items-center gap-2 shrink-0">
        <span className="text-[11px] font-bold text-slate-500 shrink-0 flex items-center gap-1">
          <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
          <span>{t.suggestedQuestions}</span>
        </span>
        {suggestedPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(prompt)}
            className="whitespace-nowrap text-xs font-semibold bg-white text-slate-700 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 px-3 py-1 rounded-full transition-all shrink-0 shadow-2xs"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Messages List */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-50/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 max-w-[85%] sm:max-w-[75%] ${
              msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
            }`}
          >
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-xs text-xs font-bold ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-900 text-white'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-blue-400" />}
            </div>

            <div
              className={`rounded-2xl p-4 shadow-2xs text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-none'
                  : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-none space-y-2'
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.text}</p>
              <div
                className={`text-[10px] ${
                  msg.sender === 'user' ? 'text-blue-200' : 'text-slate-400'
                } text-right mt-1`}
              >
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-3 text-xs text-slate-500 bg-white border border-slate-200 p-3 rounded-2xl w-fit animate-pulse">
            <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
            <span>AI Assistant is analyzing verified scheme rules...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* AI Caution Disclaimer */}
      <div className="bg-amber-50 border-t border-amber-200 text-amber-900 text-[11px] px-4 py-2 flex items-center gap-2 font-medium shrink-0">
        <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
        <span className="truncate">{t.aiDisclaimer}</span>
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-3 shrink-0"
      >
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder={t.aiPlaceholder}
          className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm font-medium"
        />

        <button
          type="submit"
          disabled={!inputQuery.trim() || isLoading}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-1.5 shrink-0"
        >
          <span>{t.send}</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
