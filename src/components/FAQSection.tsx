import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { t, language } = useApp();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: {
        en: 'How does the SmartScheme AI match score work?',
        hi: 'स्मार्टस्कीम एआई मैच स्कोर कैसे काम करता है?'
      },
      a: {
        en: 'Our transparent rule engine compares your age, annual income, occupation, location, and family attributes directly against official government scheme criteria. Points are assigned across 6 parameters to generate an objective match percentage from 0% to 100%.',
        hi: 'हमारा पारदर्शी नियम इंजन आपकी आयु, वार्षिक आय, व्यवसाय, स्थान और पारिवारिक मापदंडों की तुलना सीधे आधिकारिक सरकारी योजना के मानदंडों से करता है। 0% से 100% तक का वस्तुनिष्ठ मैच प्रतिशत उत्पन्न करने के लिए 6 मापदंडों पर अंक दिए जाते हैं।'
      }
    },
    {
      q: {
        en: 'Are these scheme details updated directly from official government portals?',
        hi: 'क्या ये योजना विवरण सीधे आधिकारिक सरकारी पोर्टलों से अपडेट किए जाते हैं?'
      },
      a: {
        en: 'Yes. All scheme names, eligibility rules, required documents, and benefit descriptions are synchronized with official sources including myScheme, India.gov.in, and concerned Ministry portals.',
        hi: 'हां। सभी योजना के नाम, पात्रता नियम, आवश्यक दस्तावेज और लाभ विवरण myScheme, India.gov.in और संबंधित मंत्रालय के पोर्टलों सहित आधिकारिक स्रोतों के साथ समन्वयित हैं।'
      }
    },
    {
      q: {
        en: 'Do I need to pay any fee to check eligibility or apply?',
        hi: 'क्या मुझे पात्रता जांचने या आवेदन करने के लिए कोई शुल्क देना होगा?'
      },
      a: {
        en: 'No! SmartScheme AI is a 100% free public benefit service. Government schemes do not charge fees unless specified officially by the concerned ministry.',
        hi: 'नहीं! स्मार्टस्कीम एआई 100% निःशुल्क सार्वजनिक सेवा है। जब तक संबंधित मंत्रालय द्वारा आधिकारिक रूप से निर्दिष्ट न किया गया हो, सरकारी योजनाएं कोई शुल्क नहीं लेती हैं।'
      }
    },
    {
      q: {
        en: 'How do I submit an application for a scheme?',
        hi: 'मैं किसी योजना के लिए आवेदन कैसे जमा करूं?'
      },
      a: {
        en: 'Each scheme card contains a direct "Apply on Official Portal" button. Clicking this redirects you securely to the official government domain website (.gov.in or .nic.in) where you can log in using Aadhaar / Jan Parichay and submit your form.',
        hi: 'प्रत्येक योजना कार्ड में एक सीधा "आधिकारिक पोर्टल पर आवेदन करें" बटन होता है। इस पर क्लिक करने से आप सुरक्षित रूप से आधिकारिक सरकारी डोमेन वेबसाइट (.gov.in या .nic.in) पर निर्देशित हो जाते हैं जहां आप आधार / जन परिचय का उपयोग करके लॉग इन कर सकते हैं और अपना फॉर्म जमा कर सकते हैं।'
      }
    },
    {
      q: {
        en: 'What if I need help or my application is delayed?',
        hi: 'यदि मुझे मदद की आवश्यकता है या मेरे आवेदन में देरी हो रही है तो क्या होगा?'
      },
      a: {
        en: 'You can contact the official national helpline numbers listed in the footer of this applet (e.g. myScheme Helpline 1800-11-2001 or Kisan Call Centre 1800-180-1551) or visit your nearest Common Service Centre (CSC).',
        hi: 'आप इस एप्लेट के फ़ुटर में सूचीबद्ध आधिकारिक राष्ट्रीय हेल्पलाइन नंबरों से संपर्क कर सकते हैं (जैसे myScheme हेल्पलाइन 1800-11-2001 या किसान कॉल सेंटर 1800-180-1551) या अपने निकटतम कॉमन सर्विस सेंटर (CSC) पर जा सकते हैं।'
      }
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'hi' ? 'नागरिकों के सामान्य प्रश्न' : 'Citizen Assistance FAQ'}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 text-sm flex items-center justify-between gap-4 hover:bg-slate-100/60 transition-colors"
                >
                  <span>{faq.q[language]}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.a[language]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
