import { Scheme } from '../types/scheme';

export const VERIFIED_SCHEMES: Scheme[] = [
  {
    id: 'pm-kisan',
    name: {
      en: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
      hi: 'प्रधानमंत्री किसान सम्मान निधि (पीएम-किसान)'
    },
    shortDescription: {
      en: 'Direct income support of ₹6,000 per year in 3 equal installments to all landholding farmer families.',
      hi: 'सभी भूमिधारक किसान परिवारों को ₹6,000 प्रति वर्ष 3 समान किस्तों में प्रत्यक्ष आय सहायता।'
    },
    fullDescription: {
      en: 'PM-KISAN is a Central Sector Scheme aimed at supplementing the financial needs of landholding farmers in procuring various inputs to ensure proper crop health and appropriate yields, commensurate with the anticipated farm income.',
      hi: 'पीएम-किसान एक केंद्रीय क्षेत्र की योजना है जिसका उद्देश्य भूमिधारक किसानों को फसल स्वास्थ्य और उचित उपज सुनिश्चित करने के लिए विभिन्न इनपुट प्राप्त करने में वित्तीय आवश्यकताओं को पूरा करना है।'
    },
    category: 'agriculture',
    ministry: {
      en: 'Ministry of Agriculture and Farmers Welfare',
      hi: 'कृषि एवं किसान कल्याण मंत्रालय'
    },
    department: {
      en: 'Department of Agriculture & Farmers Welfare',
      hi: 'कृषि एवं किसान कल्याण विभाग'
    },
    level: 'Central',
    applicableStates: ['All India'],
    benefits: {
      en: [
        'Direct cash benefit of ₹6,000 per year transferred directly into bank accounts via Aadhaar DBT.',
        'Paid in 3 equal installments of ₹2,000 every 4 months.',
        '100% funded by the Government of India with transparent digital tracking.'
      ],
      hi: [
        'आधार डीबीटी के माध्यम से सीधे बैंक खातों में ₹6,000 प्रति वर्ष का प्रत्यक्ष नकद लाभ।',
        'हर 4 महीने में ₹2,000 की 3 समान किस्तों में भुगतान।',
        'पारदर्शी डिजिटल ट्रैकिंग के साथ भारत सरकार द्वारा 100% वित्तपोषित।'
      ]
    },
    eligibilitySummary: {
      en: [
        'All landholding farmer families with cultivable landholding in their names.',
        'Must complete e-KYC and link Aadhaar with bank account.',
        'Excludes institutional landholders, high-income taxpayers, and constitutional post holders.'
      ],
      hi: [
        'अपने नाम पर कृषि योग्य भूमि रखने वाले सभी किसान परिवार।',
        'ई-केवाईसी पूरा करना और बैंक खाते को आधार से जोड़ना अनिवार्य है।',
        'संस्थागत भूमिधारकों, उच्च आय वाले करदाताओं और संवैधानिक पदधारकों को छोड़कर।'
      ]
    },
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 80,
      gender: 'all',
      occupations: ['farmer'],
      residenceType: 'all',
      states: ['All India'],
      casteCategory: ['all']
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card linked with active mobile number',
        'Landownership proof (Khatauni / Revenue Land Record)',
        'Active Bank Account Details (Passbook copy)',
        'e-KYC verification confirmation'
      ],
      hi: [
        'सक्रिय मोबाइल नंबर से लिंक आधार कार्ड',
        'भूमि स्वामित्व प्रमाण (खतौनी / राजस्व भूमि रिकॉर्ड)',
        'सक्रिय बैंक खाता विवरण (पासबुक प्रति)',
        'ई-केवाईसी सत्यापन पुष्टि'
      ]
    },
    applicationProcess: [
      {
        step: 1,
        title: { en: 'Visit Farmers Corner', hi: 'फार्मर्स कॉर्नर पर जाएं' },
        description: {
          en: 'Open the official PM-KISAN portal (pmkisan.gov.in) and click "New Farmer Registration".',
          hi: 'आधिकारिक पीएम-किसान पोर्टल (pmkisan.gov.in) खोलें और "नया किसान पंजीकरण" पर क्लिक करें।'
        }
      },
      {
        step: 2,
        title: { en: 'Enter Aadhaar & State Details', hi: 'आधार और राज्य विवरण दर्ज करें' },
        description: {
          en: 'Provide Aadhaar number, state, district, and mobile number to receive OTP.',
          hi: 'ओटीपी प्राप्त करने के लिए आधार संख्या, राज्य, जिला और मोबाइल नंबर प्रदान करें।'
        }
      },
      {
        step: 3,
        title: { en: 'Upload Land Records & Bank Info', hi: 'भूमि रिकॉर्ड और बैंक जानकारी अपलोड करें' },
        description: {
          en: 'Fill land measurement details, survey/khasra numbers, and bank account numbers.',
          hi: 'भूमि माप विवरण, सर्वेक्षण/खसरा संख्या और बैंक खाता संख्या भरें।'
        }
      },
      {
        step: 4,
        title: { en: 'Verification by State Nodal Officer', hi: 'राज्य नोडल अधिकारी द्वारा सत्यापन' },
        description: {
          en: 'Local revenue authorities verify land record authenticity.',
          hi: 'स्थानीय राजस्व प्राधिकारी भूमि रिकॉर्ड की प्रामाणिकता का सत्यापन करते हैं।'
        }
      },
      {
        step: 5,
        title: { en: 'Direct Transfer to Bank Account', hi: 'बैंक खाते में सीधा स्थानांतरण' },
        description: {
          en: 'Once verified, installment credited via Aadhaar Payment Bridge System (APBS).',
          hi: 'एक बार सत्यापित होने पर, किस्त आधार भुगतान ब्रिज सिस्टम (APBS) के माध्यम से जमा की जाती है।'
        }
      }
    ],
    applicationUrl: 'https://pmkisan.gov.in/',
    officialSource: 'myScheme / pmkisan.gov.in',
    lastUpdated: '2026-06-15',
    status: 'Active',
    popularityScore: 98,
    tags: ['Farmers', 'Direct Benefit Transfer', 'Agriculture', 'Income Support']
  },
  {
    id: 'ayushman-bharat-pmjay',
    name: {
      en: 'Ayushman Bharat - PM Jan Arogya Yojana (PM-JAY)',
      hi: 'आयुष्मान भारत - पीएम जन आरोग्य योजना (पीएम-जेएवाई)'
    },
    shortDescription: {
      en: 'Free health insurance cover up to ₹5 Lakh per family per year for secondary and tertiary care hospitalization.',
      hi: 'माध्यमिक और तृतीयक देखभाल अस्पताल में भर्ती के लिए प्रति वर्ष प्रति परिवार ₹5 लाख तक का मुफ्त स्वास्थ्य बीमा कवर।'
    },
    fullDescription: {
      en: 'PM-JAY is the world’s largest government-funded health assurance scheme providing a health cover of ₹5 lakh per family per year to vulnerable families covering over 12 crore poor families.',
      hi: 'पीएम-जेएवाई दुनिया की सबसे बड़ी सरकार द्वारा वित्तपोषित स्वास्थ्य बीमा योजना है जो 12 करोड़ से अधिक गरीब परिवारों को कवर करते हुए ₹5 लाख प्रति परिवार प्रति वर्ष का स्वास्थ्य कवर प्रदान करती है।'
    },
    category: 'healthcare',
    ministry: {
      en: 'Ministry of Health and Family Welfare',
      hi: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय'
    },
    department: {
      en: 'National Health Authority (NHA)',
      hi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण'
    },
    level: 'Central',
    applicableStates: ['All India'],
    benefits: {
      en: [
        'Cashless and paperless access to healthcare services at empaneled public & private hospitals.',
        'Cover of ₹500,000 per family per year.',
        'Covers up to 3 days of pre-hospitalization and 15 days post-hospitalization expenses including medicines and diagnostics.',
        'No restrictions on family size, age, or gender.'
      ],
      hi: [
        'सूचीबद्ध सार्वजनिक और निजी अस्पतालों में स्वास्थ्य सेवाओं तक कैशलेस और कागजरहित पहुंच।',
        'प्रति परिवार प्रति वर्ष ₹500,000 का कवर।',
        'दवाइयों और जांच सहित अस्पताल में भर्ती होने से 3 दिन पहले और 15 दिन बाद के खर्च को कवर करता है।',
        'परिवार के आकार, उम्र या लिंग पर कोई प्रतिबंध नहीं।'
      ]
    },
    eligibilitySummary: {
      en: [
        'Families categorized under deprivation criteria in SECC 2011 data or active Ration Card holders.',
        'All senior citizens aged 70 years and above (Ayushman Vaya Vandana Card) regardless of income.',
        'Covers occupational categories like rag pickers, domestic workers, street vendors, construction workers.'
      ],
      hi: [
        'एसईसीसी 2011 डेटा या सक्रिय राशन कार्ड धारकों में से वंचित श्रेणियों के परिवार।',
        'आय की परवाह किए बिना 70 वर्ष और उससे अधिक आयु के सभी वरिष्ठ नागरिक (आयुष्मान वय वंदना कार्ड)।',
        'कचरा बीनने वाले, घरेलू कामगार, स्ट्रीट वेंडर, निर्माण श्रमिकों जैसी व्यावसायिक श्रेणियों को कवर करता है।'
      ]
    },
    eligibilityCriteria: {
      minAge: 0,
      maxAge: 100,
      gender: 'all',
      maxAnnualIncome: 250000,
      occupations: ['worker', 'farmer', 'unemployed', 'senior-citizen', 'all'],
      residenceType: 'all',
      states: ['All India']
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card of family members',
        'Ration Card / PM-JAY Family ID letter',
        'Active Mobile Number for e-KYC',
        'Age Proof for Senior Citizen card (70+ years)'
      ],
      hi: [
        'परिवार के सदस्यों का आधार कार्ड',
        'राशन कार्ड / पीएम-जेएवाई फैमिली आईडी पत्र',
        'ई-केवाईसी के लिए सक्रिय मोबाइल नंबर',
        'वरिष्ठ नागरिक कार्ड के लिए आयु प्रमाण (70+ वर्ष)'
      ]
    },
    applicationProcess: [
      {
        step: 1,
        title: { en: 'Check Eligibility Online', hi: 'ऑनलाइन पात्रता जांचें' },
        description: {
          en: 'Visit beneficiary.nha.gov.in and search by Mobile Number, Ration Card, or Aadhaar.',
          hi: 'beneficiary.nha.gov.in पर जाएं और मोबाइल नंबर, राशन कार्ड या आधार से खोजें।'
        }
      },
      {
        step: 2,
        title: { en: 'Complete e-KYC', hi: 'ई-केवाईसी पूरा करें' },
        description: {
          en: 'Verify identity using Aadhaar OTP or biometric at Ayushman Mitra counter or self-portal.',
          hi: 'आयुष्मान मित्र काउंटर या स्व-पोर्टल पर आधार ओटीपी या बायोमेट्रिक का उपयोग करके पहचान सत्यापित करें।'
        }
      },
      {
        step: 3,
        title: { en: 'Ayushman Card Generation', hi: 'आयुष्मान कार्ड जनरेशन' },
        description: {
          en: 'Once e-KYC is approved, download digital Ayushman Card instantly.',
          hi: 'एक बार ई-केवाईसी स्वीकृत होने के बाद, डिजिटल आयुष्मान कार्ड तुरंत डाउनलोड करें।'
        }
      },
      {
        step: 4,
        title: { en: 'Show Card at Empaneled Hospital', hi: 'सूचीबद्ध अस्पताल में कार्ड दिखाएं' },
        description: {
          en: 'Present Ayushman Card at any empaneled hospital Ayushman Kiosk for cashless treatment.',
          hi: 'कैशलेस इलाज के लिए किसी भी सूचीबद्ध अस्पताल के आयुष्मान कियोस्क पर आयुष्मान कार्ड प्रस्तुत करें।'
        }
      }
    ],
    applicationUrl: 'https://beneficiary.nha.gov.in/',
    officialSource: 'National Health Authority / myScheme',
    lastUpdated: '2026-07-01',
    status: 'Active',
    popularityScore: 99,
    tags: ['Health Insurance', 'Hospitalization', 'Free Medical', 'Senior Citizens']
  },
  {
    id: 'pm-vidya-lakshmi',
    name: {
      en: 'PM Vidya Lakshmi Education Loan Scheme',
      hi: 'पीएम विद्या लक्ष्मी शिक्षा ऋण योजना'
    },
    shortDescription: {
      en: 'Collateral-free, guarantor-free education loans up to ₹10 Lakhs with full interest subvention for meritorious students.',
      hi: 'मेधावी छात्रों के लिए पूर्ण ब्याज सब्सिडी के साथ ₹10 लाख तक का बिना गारंटी शिक्षा ऋण।'
    },
    fullDescription: {
      en: 'PM Vidya Lakshmi is a single window electronic platform for students seeking education loans and scholarships. Under this scheme, collateral-free loans up to ₹10 lakh with 7.5% interest subvention are provided to students pursuing higher education in top quality higher education institutions (QHEIs).',
      hi: 'पीएम विद्या लक्ष्मी शिक्षा ऋण और छात्रवृत्ति चाहने वाले छात्रों के लिए एक एकल खिड़की इलेक्ट्रॉनिक प्लेटफॉर्म है। इस योजना के तहत शीर्ष गुणवत्ता वाले उच्च शिक्षण संस्थानों (QHEIs) में उच्च शिक्षा प्राप्त करने वाले छात्रों को 7.5% ब्याज सब्सिडी के साथ ₹10 लाख तक के बिना गारंटी ऋण दिए जाते हैं।'
    },
    category: 'education',
    ministry: {
      en: 'Ministry of Education',
      hi: 'शिक्षा मंत्रालय'
    },
    department: {
      en: 'Department of Higher Education',
      hi: 'उच्च शिक्षा विभाग'
    },
    level: 'Central',
    applicableStates: ['All India'],
    benefits: {
      en: [
        'Collateral-free and third-party guarantor-free loan up to ₹10 Lakhs.',
        'Full interest subvention during moratorium period for family annual income up to ₹4.5 Lakhs.',
        'Interest subvention of 3% for family annual income up to ₹8 Lakhs.',
        'Simplified common education loan application form (CELAF) across 40+ scheduled banks.'
      ],
      hi: [
        '₹10 लाख तक का बिना गारंटी और बिना तीसरे पक्ष के गारंटर वाला ऋण।',
        '₹4.5 लाख तक की पारिवारिक वार्षिक आय के लिए स्थगन अवधि के दौरान पूर्ण ब्याज सब्सिडी।',
        '₹8 लाख तक की पारिवारिक वार्षिक आय के लिए 3% की ब्याज सब्सिडी।',
        '40+ अनुसूचित बैंकों में सरलीकृत कॉमन एजुकेशन लोन एप्लीकेशन फॉर्म (CELAF)।'
      ]
    },
    eligibilitySummary: {
      en: [
        'Indian national admitted to recognized Higher Education Institutions (NIRF ranked top 100 or government colleges).',
        'Student age usually between 17 to 30 years.',
        'Family income criteria applicable for interest subvention subsidy.'
      ],
      hi: [
        'मान्यता प्राप्त उच्च शिक्षा संस्थानों (एनआईआरएफ शीर्ष 100 या सरकारी कॉलेजों) में प्रवेश पाने वाला भारतीय नागरिक।',
        'छात्र की आयु आमतौर पर 17 से 30 वर्ष के बीच।',
        'ब्याज सब्सिडी के लिए पारिवारिक आय मानदंड लागू।'
      ]
    },
    eligibilityCriteria: {
      minAge: 16,
      maxAge: 32,
      gender: 'all',
      maxAnnualIncome: 800000,
      occupations: ['student'],
      residenceType: 'all',
      states: ['All India']
    },
    requiredDocuments: {
      en: [
        'Admission letter from recognized college/university',
        'Mark sheets of 10th, 12th & Graduation (if applicable)',
        'Family Income Certificate issued by competent authority',
        'Aadhaar Card and Bank Account details of student & parent',
        'Course fee structure breakdown from college'
      ],
      hi: [
        'मान्यता प्राप्त कॉलेज/विश्वविद्यालय से प्रवेश पत्र',
        '10वीं, 12वीं और स्नातक (यदि लागू हो) की अंकतालिकाएं',
        'सक्षम प्राधिकारी द्वारा जारी पारिवारिक आय प्रमाण पत्र',
        'छात्र और अभिभावक का आधार कार्ड और बैंक खाता विवरण',
        'कॉलेज से पाठ्यक्रम शुल्क संरचना विवरण'
      ]
    },
    applicationProcess: [
      {
        step: 1,
        title: { en: 'Register on PM Vidya Lakshmi Portal', hi: 'पीएम विद्या लक्ष्मी पोर्टल पर पंजीकरण करें' },
        description: {
          en: 'Sign up on PM Vidya Lakshmi portal (pmvidyalakshmi.gov.in) with email and mobile number.',
          hi: 'ईमेल और मोबाइल नंबर के साथ पीएम विद्या लक्ष्मी पोर्टल (pmvidyalakshmi.gov.in) पर साइन अप करें।'
        }
      },
      {
        step: 2,
        title: { en: 'Fill Common Application Form (CELAF)', hi: 'सामान्य आवेदन पत्र (CELAF) भरें' },
        description: {
          en: 'Fill academic details, course fee details, and income details in CELAF.',
          hi: 'CELAF में अकादमिक विवरण, पाठ्यक्रम शुल्क विवरण और आय विवरण भरें।'
        }
      },
      {
        step: 3,
        title: { en: 'Select Preferred Banks & Schemes', hi: 'पसंदीदा बैंक और योजनाएं चुनें' },
        description: {
          en: 'Choose up to 3 preferred banks/branches offering the loan.',
          hi: 'ऋण की पेशकश करने वाले 3 पसंदीदा बैंकों/शाखाओं तक का चयन करें।'
        }
      },
      {
        step: 4,
        title: { en: 'Upload Verification Documents', hi: 'सत्यापन दस्तावेज अपलोड करें' },
        description: {
          en: 'Upload admission proof, mark sheets, and income certificate.',
          hi: 'प्रवेश प्रमाण, अंकतालिकाएं और आय प्रमाण पत्र अपलोड करें।'
        }
      },
      {
        step: 5,
        title: { en: 'Bank Sanction & Disbursal', hi: 'बैंक स्वीकृति और संवितरण' },
        description: {
          en: 'Bank verifies details digitally and disburses loan directly to institution account.',
          hi: 'बैंक डिजिटल रूप से विवरणों की पुष्टि करता है और सीधे संस्थान के खाते में ऋण वितरित करता है।'
        }
      }
    ],
    applicationUrl: 'https://pmvidyalakshmi.gov.in/',
    officialSource: 'Ministry of Education / myScheme',
    lastUpdated: '2026-05-10',
    status: 'Active',
    popularityScore: 94,
    tags: ['Students', 'Higher Education', 'Collateral Free Loan', 'Subsidized Interest']
  },
  {
    id: 'sukanya-samriddhi-yojana',
    name: {
      en: 'Sukanya Samriddhi Yojana (SSY)',
      hi: 'सुकन्या समृद्धि योजना (एसएसवाई)'
    },
    shortDescription: {
      en: 'High-interest tax-exempt small savings scheme dedicated to securing the education and marriage expenses of girl children.',
      hi: 'बालिकाओं के अध्ययन और विवाह के खर्चों को सुरक्षित करने के लिए उच्च ब्याज वाली कर-मुक्त लघु बचत योजना।'
    },
    fullDescription: {
      en: 'Sukanya Samriddhi Yojana is a Government of India backed small savings scheme launched under the Beti Bachao Beti Padhao campaign. It offers an attractive interest rate (8.2% p.a.) with Section 80C tax benefits and complete tax exemption on interest earned and maturity proceeds.',
      hi: 'सुकन्या समृद्धि योजना बेटी बचाओ बेटी पढ़ाओ अभियान के तहत शुरू की गई भारत सरकार समर्थित लघु बचत योजना है। यह धारा 80C कर लाभ और अर्जित ब्याज और परिपक्वता आय पर पूर्ण कर छूट के साथ आकर्षक ब्याज दर (8.2% प्रति वर्ष) प्रदान करती है।'
    },
    category: 'women-child',
    ministry: {
      en: 'Ministry of Finance',
      hi: 'वित्त मंत्रालय'
    },
    department: {
      en: 'Department of Economic Affairs / India Post',
      hi: 'आर्थिक कार्य विभाग / इंडिया पोस्ट'
    },
    level: 'Central',
    applicableStates: ['All India'],
    benefits: {
      en: [
        'Highest interest rate among government small savings schemes (8.2% per annum, compounded annually).',
        'Tax deduction up to ₹1.5 Lakhs under Section 80C of IT Act.',
        'Exemption-Exemption-Exemption (EEE) tax status — deposit, interest, and maturity are 100% tax-free.',
        'Account operation transferable anywhere in India.'
      ],
      hi: [
        'सरकारी लघु बचत योजनाओं में उच्चतम ब्याज दर (8.2% प्रति वर्ष, वार्षिक रूप से चक्रवृद्धित)।',
        'आयकर अधिनियम की धारा 80C के तहत ₹1.5 लाख तक की कर छूट।',
        'छूट-छूट-छूट (EEE) कर स्थिति - जमा, ब्याज और परिपक्वता 100% कर-मुक्त हैं।',
        'खाता संचालन भारत में कहीं भी स्थानांतरित किया जा सकता है।'
      ]
    },
    eligibilitySummary: {
      en: [
        'Girl child who is a resident Indian.',
        'Age of girl child must be below 10 years at the time of account opening.',
        'Maximum 2 girl children per family (3 in case of twin/triplet girls).'
      ],
      hi: [
        'बालिका जो एक निवासी भारतीय है।',
        'खाता खोलने के समय बालिका की आयु 10 वर्ष से कम होनी चाहिए।',
        'प्रति परिवार अधिकतम 2 लड़कियां (जुड़वां/तिड़वां लड़कियों के मामले में 3)।'
      ]
    },
    eligibilityCriteria: {
      minAge: 0,
      maxAge: 10,
      gender: 'female',
      occupations: ['all'],
      residenceType: 'all',
      states: ['All India']
    },
    requiredDocuments: {
      en: [
        'Birth Certificate of the girl child issued by government authority',
        'Identity & Address proof of guardian (Aadhaar / PAN Card)',
        'Passport size photograph of girl child and guardian',
        'Initial deposit amount (minimum ₹250)'
      ],
      hi: [
        'सरकारी प्राधिकारी द्वारा जारी बालिका का जन्म प्रमाण पत्र',
        'अभिभावक का पहचान और पता प्रमाण (आधार / पैन कार्ड)',
        'बालिका और अभिभावक का पासपोर्ट आकार का फोटो',
        'प्रारंभिक जमा राशि (न्यूनतम ₹250)'
      ]
    },
    applicationProcess: [
      {
        step: 1,
        title: { en: 'Visit Post Office or Authorized Bank', hi: 'डाकघर या अधिकृत बैंक जाएं' },
        description: {
          en: 'Visit any India Post Office branch or empaneled commercial bank (SBI, PNB, HDFC, etc.).',
          hi: 'किसी भी इंडिया पोस्ट ऑफिस शाखा या सूचीबद्ध वाणिज्यिक बैंक (एसबीआई, पीएनबी, एचडीएफसी, आदि) में जाएं।'
        }
      },
      {
        step: 2,
        title: { en: 'Fill SSY Opening Form', hi: 'एसएसवाई खोलने का फॉर्म भरें' },
        description: {
          en: 'Fill account opening application form mentioning details of child and parent.',
          hi: 'बच्चे और माता-पिता के विवरण का उल्लेख करते हुए खाता खोलने का आवेदन पत्र भरें।'
        }
      },
      {
        step: 3,
        title: { en: 'Submit Required Documents', hi: 'आवश्यक दस्तावेज जमा करें' },
        description: {
          en: 'Attach birth certificate and guardian Aadhaar/PAN copy.',
          hi: 'जन्म प्रमाण पत्र और अभिभावक आधार/पैन प्रति संलग्न करें।'
        }
      },
      {
        step: 4,
        title: { en: 'Pay Initial Deposit', hi: 'प्रारंभिक जमा राशि का भुगतान करें' },
        description: {
          en: 'Deposit minimum ₹250 (up to ₹1,50,000 per financial year).',
          hi: 'न्यूनतम ₹250 जमा करें (प्रति वित्तीय वर्ष ₹1,50,000 तक)।'
        }
      },
      {
        step: 5,
        title: { en: 'Receive Passbook', hi: 'पासबुक प्राप्त करें' },
        description: {
          en: 'Get Sukanya Samriddhi passbook to track annual interest and balance.',
          hi: 'वार्षिक ब्याज और शेष राशि को ट्रैक करने के लिए सुकन्या समृद्धि पासबुक प्राप्त करें।'
        }
      }
    ],
    applicationUrl: 'https://www.indiapost.gov.in/Financial/pages/content/sukanya-samriddhi-account.aspx',
    officialSource: 'India Post / Ministry of Finance / myScheme',
    lastUpdated: '2026-06-20',
    status: 'Active',
    popularityScore: 97,
    tags: ['Girl Child', 'Tax Saving 80C', 'Post Office Scheme', 'High Interest Savings']
  },
  {
    id: 'pm-mudra-yojana',
    name: {
      en: 'Pradhan Mantri MUDRA Yojana (PMMY)',
      hi: 'प्रधानमंत्री मुद्रा योजना (पीएमएमवाई)'
    },
    shortDescription: {
      en: 'Collateral-free micro-business loans up to ₹20 Lakhs categorized into Shishu, Kishor, Tarun & Tarun Plus.',
      hi: 'शिशु, किशोर, तरुण और तरुण प्लस में वर्गीकृत ₹20 लाख तक का बिना गारंटी सूक्ष्म-व्यवसाय ऋण।'
    },
    fullDescription: {
      en: 'PMMY provides loans up to ₹20 Lakhs to non-corporate, non-farm small/micro enterprises. Loans are provided by Banks, NBFCs, and MFIs to promote self-employment in manufacturing, trading, services, and allied agricultural activities.',
      hi: 'पीएमएमवाई गैर-कॉर्पोरेट, गैर-कृषि छोटे/सूक्ष्म उद्यमों को ₹20 लाख तक का ऋण प्रदान करती है। विनिर्माण, व्यापार, सेवाओं और संबद्ध कृषि गतिविधियों में स्वरोजगार को बढ़ावा देने के लिए बैंकों, एनबीएफसी और एमएफआई द्वारा ऋण प्रदान किए जाते हैं।'
    },
    category: 'business',
    ministry: {
      en: 'Ministry of Finance',
      hi: 'वित्त मंत्रालय'
    },
    department: {
      en: 'Department of Financial Services',
      hi: 'वित्तीय सेवाएं विभाग'
    },
    level: 'Central',
    applicableStates: ['All India'],
    benefits: {
      en: [
        'No collateral security or third-party guarantor required.',
        'Shishu: Loans up to ₹50,000.',
        'Kishor: Loans above ₹50,000 up to ₹5 Lakhs.',
        'Tarun: Loans above ₹5 Lakhs up to ₹10 Lakhs.',
        'Tarun Plus: Loans up to ₹20 Lakhs for entrepreneurs with previous successful repayment record.',
        'MUDRA Card issued for working capital withdrawals.'
      ],
      hi: [
        'किसी संपार्श्विक सुरक्षा या तीसरे पक्ष के गारंटर की आवश्यकता नहीं है।',
        'शिशु: ₹50,000 तक के ऋण।',
        'किशोर: ₹50,000 से अधिक और ₹5 लाख तक के ऋण।',
        'तरुण: ₹5 लाख से अधिक और ₹10 लाख तक के ऋण।',
        'तरुण प्लस: पिछले सफल पुनर्भुगतान रिकॉर्ड वाले उद्यमियों के लिए ₹20 लाख तक के ऋण।',
        'कार्यशील पूंजी निकासी के लिए जारी किया गया मुद्रा कार्ड।'
      ]
    },
    eligibilitySummary: {
      en: [
        'Any non-farm micro entrepreneur, shopkeeper, artisan, food processor, or small business owner.',
        'Age 18 years and above.',
        'Should have a viable business proposal and no defaulted past loans.'
      ],
      hi: [
        'कोई भी गैर-कृषि सूक्ष्म उद्यमी, दुकानदार, कारीगर, खाद्य प्रसंस्करणकर्ता या छोटा व्यवसाय स्वामी।',
        'आयु 18 वर्ष और उससे अधिक।',
        'एक व्यावहारिक व्यवसाय प्रस्ताव होना चाहिए और पिछले किसी भी ऋण पर डिफॉल्ट नहीं होना चाहिए।'
      ]
    },
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 70,
      gender: 'all',
      occupations: ['entrepreneur', 'worker', 'all'],
      residenceType: 'all',
      states: ['All India']
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card and PAN Card of business owner',
        'Business registration proof / Shop establishment license (if applicable)',
        'Last 6 months bank statement',
        'Business plan / Project cost quotation',
        'Passport size photos of proprietor / partners'
      ],
      hi: [
        'व्यवसाय स्वामी का आधार कार्ड और पैन कार्ड',
        'व्यवसाय पंजीकरण प्रमाण / दुकान स्थापना लाइसेंस (यदि लागू हो)',
        'पिछले 6 महीने का बैंक स्टेटमेंट',
        'व्यवसाय योजना / परियोजना लागत कोटेशन',
        'प्रोप्राइटर / पार्टनर का पासपोर्ट साइज फोटो'
      ]
    },
    applicationProcess: [
      {
        step: 1,
        title: { en: 'Prepare Business Proposal', hi: 'व्यवसाय प्रस्ताव तैयार करें' },
        description: {
          en: 'Outline your business activity, machinery required, and estimated revenue.',
          hi: 'अपनी व्यावसायिक गतिविधि, आवश्यक मशीनरी और अनुमानित राजस्व की रूपरेखा तैयार करें।'
        }
      },
      {
        step: 2,
        title: { en: 'Apply Online via JanSamarth Portal', hi: 'जनसमर्थ पोर्टल के माध्यम से ऑनलाइन आवेदन करें' },
        description: {
          en: 'Visit jansamarth.in and select "Loan for Business / Micro Enterprise".',
          hi: 'jansamarth.in पर जाएं और "व्यवसाय / सूक्ष्म उद्यम के लिए ऋण" चुनें।'
        }
      },
      {
        step: 3,
        title: { en: 'Select Bank & MUDRA Category', hi: 'बैंक और मुद्रा श्रेणी चुनें' },
        description: {
          en: 'Choose loan category (Shishu, Kishor, Tarun) and preferred bank branch.',
          hi: 'ऋण श्रेणी (शिशु, किशोर, तरुण) और पसंदीदा बैंक शाखा चुनें।'
        }
      },
      {
        step: 4,
        title: { en: 'Document Submission & Verification', hi: 'दस्तावेज़ प्रस्तुत करना और सत्यापन' },
        description: {
          en: 'Upload KYC, quotation, and business details for digital appraisal.',
          hi: 'डिजिटल मूल्यांकन के लिए केवाईसी, कोटेशन और व्यावसायिक विवरण अपलोड करें।'
        }
      },
      {
        step: 5,
        title: { en: 'Disbursal & MUDRA Card Issue', hi: 'संवितरण और मुद्रा कार्ड जारी करना' },
        description: {
          en: 'Loan credited to business account and MUDRA debit card delivered.',
          hi: 'व्यवसाय खाते में ऋण जमा किया गया और मुद्रा डेबिट कार्ड वितरित किया गया।'
        }
      }
    ],
    applicationUrl: 'https://www.mudra.org.in/',
    officialSource: 'MUDRA / JanSamarth Portal / myScheme',
    lastUpdated: '2026-06-28',
    status: 'Active',
    popularityScore: 96,
    tags: ['Micro Loan', 'Entrepreneurship', 'No Collateral', 'Small Business']
  },
  {
    id: 'pm-vishwakarma',
    name: {
      en: 'PM Vishwakarma Scheme',
      hi: 'पीएम विश्वकर्मा योजना'
    },
    shortDescription: {
      en: 'Holistic support for traditional artisans & craftspeople with ₹15,000 toolkit incentive, skill training, stipend & collateral-free credit up to ₹3 Lakhs.',
      hi: 'पारंपरिक कारीगरों के लिए ₹15,000 टूलकिट प्रोत्साहन, कौशल प्रशिक्षण, वजीफा और ₹3 लाख तक के बिना गारंटी ऋण के साथ समग्र सहायता।'
    },
    fullDescription: {
      en: 'PM Vishwakarma is designed to end-to-end support artisans and craftspeople who work with their hands and tools in 18 traditional trades (e.g. Carpenter, Blacksmith, Goldsmith, Potter, Sculptor, Cobbler, Tailor). It offers recognition through PM Vishwakarma Certificate & ID Card, skill upgrading, toolkit incentive, and collateral-free enterprise credit at 5% interest rate.',
      hi: 'पीएम विश्वकर्मा का उद्देश्य 18 पारंपरिक ट्रेडों (जैसे बढ़ई, लोहार, सुनार, कुम्हार, मूर्तिकार, मोची, दर्जी) में अपने हाथों और औजारों से काम करने वाले कारीगरों को शुरू से अंत तक सहायता प्रदान करना है। यह पीएम विश्वकर्मा प्रमाणपत्र और पहचान पत्र के माध्यम से पहचान, कौशल उन्नयन, टूलकिट प्रोत्साहन और 5% ब्याज दर पर बिना गारंटी उद्यम ऋण प्रदान करता है।'
    },
    category: 'skill-development',
    ministry: {
      en: 'Ministry of Micro, Small and Medium Enterprises (MSME)',
      hi: 'सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय (MSME)'
    },
    department: {
      en: 'Development Commissioner (MSME)',
      hi: 'विकास आयुक्त (MSME)'
    },
    level: 'Central',
    applicableStates: ['All India'],
    benefits: {
      en: [
        'PM Vishwakarma Digital Certificate and ID Card.',
        'Basic Skill Training (5-7 days) with stipend of ₹500/day.',
        'Advanced Skill Training (15 days or more) with stipend of ₹500/day.',
        'Grant of ₹15,000 e-voucher for modern Toolkits.',
        'Collateral-free enterprise credit up to ₹3 Lakhs (1st Tranche ₹1 Lakh, 2nd Tranche ₹2 Lakhs) at concessional interest rate of 5%.',
        'Incentives for digital transactions (₹1 per transaction up to 100 transactions/month).'
      ],
      hi: [
        'पीएम विश्वकर्मा डिजिटल प्रमाणपत्र और पहचान पत्र।',
        '₹500/दिन के वजीफे के साथ बुनियादी कौशल प्रशिक्षण (5-7 दिन)।',
        '₹500/दिन के वजीफे के साथ उन्नत कौशल प्रशिक्षण (15 दिन या अधिक)।',
        'आधुनिक टूलकिट के लिए ₹15,000 का ई-वाउचर अनुदान।',
        '5% की रियायती ब्याज दर पर ₹3 लाख तक बिना गारंटी उद्यम ऋण (पहली किस्त ₹1 लाख, दूसरी किस्त ₹2 लाख)।',
        'डिजिटल लेनदेन के लिए प्रोत्साहन (प्रति माह 100 लेनदेन तक ₹1 प्रति लेनदेन)।'
      ]
    },
    eligibilitySummary: {
      en: [
        'An artisan or craftsperson working with hands and tools in one of 18 family-based traditional trades.',
        'Minimum age of 18 years on date of registration.',
        'Only one member per family eligible.',
        'Should not have availed similar government credit schemes (PMEGP, PM SVANidhi, MUDRA) in last 5 years.'
      ],
      hi: [
        '18 परिवार आधारित पारंपरिक ट्रेडों में से एक में हाथों और औजारों से काम करने वाला कारीगर।',
        'पंजीकरण की तिथि को न्यूनतम 18 वर्ष की आयु।',
        'प्रति परिवार केवल एक सदस्य पात्र है।',
        'पिछले 5 वर्षों में समान सरकारी ऋण योजनाओं (PMEGP, PM SVANidhi, MUDRA) का लाभ नहीं उठाया होना चाहिए।'
      ]
    },
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 75,
      gender: 'all',
      occupations: ['artisan', 'worker', 'all'],
      residenceType: 'all',
      states: ['All India']
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card linked with active mobile number',
        'Active Bank Account passbook with IFSC code',
        'Ration Card / Family Proof document',
        'Trade details certificate verified by Gram Panchayat or Urban Local Body (ULB)'
      ],
      hi: [
        'सक्रिय मोबाइल नंबर से जुड़ा आधार कार्ड',
        'आईएफएससी कोड के साथ सक्रिय बैंक खाता पासबुक',
        'राशन कार्ड / परिवार प्रमाण दस्तावेज',
        'ग्राम पंचायत या शहरी स्थानीय निकाय (ULB) द्वारा सत्यापित व्यापार विवरण प्रमाण पत्र'
      ]
    },
    applicationProcess: [
      {
        step: 1,
        title: { en: 'Visit Common Service Centre (CSC)', hi: 'कॉमन सर्विस सेंटर (सीएससी) पर जाएं' },
        description: {
          en: 'Artisan visits nearest CSC for biometric registration on pmvishwakarma.gov.in portal.',
          hi: 'कारीगर pmvishwakarma.gov.in पोर्टल पर बायोमेट्रिक पंजीकरण के लिए निकटतम सीएससी पर जाता है।'
        }
      },
      {
        step: 2,
        title: { en: 'Gram Panchayat / ULB Verification', hi: 'ग्राम पंचायत / यूएलबी सत्यापन' },
        description: {
          en: '3-Step verification: Gram Panchayat Head / ULB Chairman verifies traditional trade practice.',
          hi: '3-स्तरीय सत्यापन: ग्राम पंचायत प्रमुख / यूएलबी अध्यक्ष पारंपरिक व्यापार अभ्यास का सत्यापन करते हैं।'
        }
      },
      {
        step: 3,
        title: { en: 'District Implementation Committee Approval', hi: 'जिला कार्यान्वयन समिति अनुमोदन' },
        description: {
          en: 'District level committee confirms artisan credential and approves registration.',
          hi: 'जिला स्तरीय समिति कारीगर साख की पुष्टि करती है और पंजीकरण को मंजूरी देती है।'
        }
      },
      {
        step: 4,
        title: { en: 'Skill Training & Toolkit E-Voucher', hi: 'कौशल प्रशिक्षण एवं टूलकिट ई-वाउचर' },
        description: {
          en: 'Complete 5-day basic skill training, collect daily ₹500 stipend, and get ₹15,000 toolkit voucher.',
          hi: '5 दिवसीय बुनियादी कौशल प्रशिक्षण पूरा करें, दैनिक ₹500 वजीफा प्राप्त करें, और ₹15,000 का टूलकिट वाउचर प्राप्त करें।'
        }
      },
      {
        step: 5,
        title: { en: 'Enterprise Credit Disbursal', hi: 'उद्यम ऋण संवितरण' },
        description: {
          en: 'Apply for ₹1 Lakh loan at 5% interest rate directly transferred to bank account.',
          hi: '5% ब्याज दर पर ₹1 लाख के ऋण के लिए आवेदन करें जो सीधे बैंक खाते में स्थानांतरित हो जाता है।'
        }
      }
    ],
    applicationUrl: 'https://pmvishwakarma.gov.in/',
    officialSource: 'Ministry of MSME / myScheme',
    lastUpdated: '2026-07-12',
    status: 'Active',
    popularityScore: 99,
    tags: ['Artisans', 'Skill Training', 'Toolkit Incentive', 'Low Interest Loan', 'Traditional Crafts']
  },
  {
    id: 'pmay-urban',
    name: {
      en: 'Pradhan Mantri Awas Yojana - Urban (PMAY-U 2.0)',
      hi: 'प्रधानमंत्री आवास योजना - शहरी (पीएमएवाई-यू 2.0)'
    },
    shortDescription: {
      en: 'Housing for All mission providing financial subsidy up to ₹2.5 Lakhs for construction, enhancement, or purchase of pucca house in urban areas.',
      hi: 'शहरी क्षेत्रों में पक्के मकान के निर्माण, संवर्धन या खरीद के लिए ₹2.5 लाख तक की वित्तीय सब्सिडी प्रदान करने वाला आवास मिशन।'
    },
    fullDescription: {
      en: 'PMAY-U 2.0 aims to address the housing requirement of urban poor including slum dwellers, EWS, and LIG categories by providing interest subvention and direct financial assistance for constructing all-weather pucca houses with basic civic amenities.',
      hi: 'पीएमएवाई-यू 2.0 का उद्देश्य सभी मौसम के अनुकूल पक्के मकानों के निर्माण के लिए ब्याज सब्सिडी और प्रत्यक्ष वित्तीय सहायता प्रदान करके झुग्गी-झोपड़ी में रहने वालों, ईडब्ल्यूएस और एलआईजी श्रेणियों सहित शहरी गरीबों की आवास आवश्यकता को पूरा करना है।'
    },
    category: 'housing',
    ministry: {
      en: 'Ministry of Housing and Urban Affairs',
      hi: 'आवास और शहरी मामले मंत्रालय'
    },
    department: {
      en: 'Housing for All Mission Directorate',
      hi: 'सबके लिए आवास मिशन निदेशालय'
    },
    level: 'Central',
    applicableStates: ['All India'],
    benefits: {
      en: [
        'Financial assistance of ₹1.5 Lakhs for Beneficiary-led Construction (BLC).',
        'Interest subvention up to ₹1.8 Lakhs on housing loans for EWS/LIG families under ISS Vertical.',
        'Houses provided with attached toilet, electricity connection, LPG connection, and tap water.',
        'Title of house mandatory in name of female head or joint ownership.'
      ],
      hi: [
        'लाभार्थी आधारित निर्माण (बीएलसी) के लिए ₹1.5 लाख की वित्तीय सहायता।',
        'आईएसएस वर्टिकल के तहत ईडब्ल्यूएस/एलआईजी परिवारों के लिए गृह ऋण पर ₹1.8 लाख तक की ब्याज सब्सिडी।',
        'संलग्न शौचालय, बिजली कनेक्शन, एलपीजी कनेक्शन और नल के पानी के साथ घर उपलब्ध कराए गए।',
        'घर का स्वामित्व महिला प्रमुख या संयुक्त स्वामित्व के नाम पर होना अनिवार्य है।'
      ]
    },
    eligibilitySummary: {
      en: [
        'Family must not own a pucca house anywhere in India.',
        'Categorized under EWS (Annual income up to ₹3 Lakhs) or LIG (Annual income up to ₹6 Lakhs).',
        'Resident of statutory town / urban local body area.'
      ],
      hi: [
        'परिवार के पास भारत में कहीं भी पक्का मकान नहीं होना चाहिए।',
        'ईडब्ल्यूएस (वार्षिक आय ₹3 लाख तक) या एलआईजी (वार्षिक आय ₹6 लाख तक) के तहत वर्गीकृत।',
        'वैधानिक शहर / शहरी स्थानीय निकाय क्षेत्र का निवासी।'
      ]
    },
    eligibilityCriteria: {
      minAge: 21,
      maxAge: 70,
      gender: 'all',
      maxAnnualIncome: 600000,
      occupations: ['all'],
      residenceType: 'urban',
      states: ['All India']
    },
    requiredDocuments: {
      en: [
        'Aadhaar Cards of all family members',
        'Income Certificate issued by Revenue Authority',
        'Proof of land ownership / plot document in urban area',
        'Affidavit stating family does not own any pucca house in India',
        'Active Bank Account passbook copy'
      ],
      hi: [
        'परिवार के सभी सदस्यों का आधार कार्ड',
        'राजस्व प्राधिकारी द्वारा जारी आय प्रमाण पत्र',
        'शहरी क्षेत्र में भूमि स्वामित्व/प्लॉट दस्तावेज का प्रमाण',
        'शपथ पत्र कि परिवार के पास भारत में कोई पक्का मकान नहीं है',
        'सक्रिय बैंक खाता पासबुक की प्रति'
      ]
    },
    applicationProcess: [
      {
        step: 1,
        title: { en: 'Visit PMAY-U Portal', hi: 'पीएमएवाई-यू पोर्टल पर जाएं' },
        description: {
          en: 'Open pmaymis.gov.in and click "Citizen Assessment".',
          hi: 'pmaymis.gov.in खोलें और "नागरिक मूल्यांकन" पर क्लिक करें।'
        }
      },
      {
        step: 2,
        title: { en: 'Verify Aadhaar & Urban Area', hi: 'आधार और शहरी क्षेत्र सत्यापित करें' },
        description: {
          en: 'Enter Aadhaar number and select state, municipality, and ward.',
          hi: 'आधार संख्या दर्ज करें और राज्य, नगरपालिका और वार्ड चुनें।'
        }
      },
      {
        step: 3,
        title: { en: 'Fill Personal & Land Details', hi: 'व्यक्तिगत और भूमि विवरण भरें' },
        description: {
          en: 'Enter income category, family member names, and plot location.',
          hi: 'आय श्रेणी, परिवार के सदस्यों के नाम और भूखंड का स्थान दर्ज करें।'
        }
      },
      {
        step: 4,
        title: { en: 'Municipal Verification', hi: 'नगर पालिका सत्यापन' },
        description: {
          en: 'Urban Local Body (ULB) officer conducts physical land geotagging inspection.',
          hi: 'शहरी स्थानीय निकाय (यूएलबी) अधिकारी भौतिक भूमि जियोटैगिंग निरीक्षण करते हैं।'
        }
      },
      {
        step: 5,
        title: { en: 'DBT Subsidy Disbursal', hi: 'डीबीटी सब्सिडी संवितरण' },
        description: {
          en: 'Subsidy released in 3 geo-tagged construction stages directly into bank account.',
          hi: 'सब्सिडी सीधे बैंक खाते में 3 जियो-टैग निर्माण चरणों में जारी की गई।'
        }
      }
    ],
    applicationUrl: 'https://pmaymis.gov.in/',
    officialSource: 'Ministry of Housing & Urban Affairs / myScheme',
    lastUpdated: '2026-06-01',
    status: 'Active',
    popularityScore: 95,
    tags: ['Pucca House', 'Urban Poor', 'Home Subsidy', 'EWS Housing']
  },
  {
    id: 'atal-pension-yojana',
    name: {
      en: 'Atal Pension Yojana (APY)',
      hi: 'अटल पेंशन योजना (एपीवाई)'
    },
    shortDescription: {
      en: 'Guaranteed monthly pension of ₹1,000 to ₹5,000 for unorganized sector workers with auto-debit contribution.',
      hi: 'असंगठित क्षेत्र के श्रमिकों के लिए ऑटो-डेबिट योगदान के साथ ₹1,000 से ₹5,000 की गारंटीकृत मासिक पेंशन।'
    },
    fullDescription: {
      en: 'APY is a government-backed pension scheme focused on unorganized sector workers. It provides a guaranteed minimum monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000 or ₹5,000 at the age of 60 years depending on the monthly contribution made.',
      hi: 'एपीवाई एक सरकार समर्थित पेंशन योजना है जो असंगठित क्षेत्र के श्रमिकों पर केंद्रित है। यह किए गए मासिक योगदान के आधार पर 60 वर्ष की आयु में ₹1,000, ₹2,000, ₹3,000, ₹4,000 या ₹5,000 की गारंटीकृत न्यूनतम मासिक पेंशन प्रदान करती है।'
    },
    category: 'pension',
    ministry: {
      en: 'Ministry of Finance',
      hi: 'वित्त मंत्रालय'
    },
    department: {
      en: 'Pension Fund Regulatory and Development Authority (PFRDA)',
      hi: 'पेंशन फंड नियामक एवं विकास प्राधिकरण'
    },
    level: 'Central',
    applicableStates: ['All India'],
    benefits: {
      en: [
        'Guaranteed monthly pension choice of ₹1,000 to ₹5,000 starting from age 60.',
        'Spouse pension guaranteed upon subscriber death.',
        'Return of full accumulated pension wealth to nominee after spouse death.',
        'Low monthly contributions starting as low as ₹42 per month for 18-year entry age.'
      ],
      hi: [
        '60 वर्ष की आयु से ₹1,000 से ₹5,000 तक की गारंटीकृत मासिक पेंशन का विकल्प।',
        'अंशदाता की मृत्यु पर जीवनसाथी की पेंशन की गारंटी।',
        'जीवनसाथी की मृत्यु के बाद नामांकित व्यक्ति को पूर्ण संचित पेंशन धन की वापसी।',
        '18 वर्ष की प्रवेश आयु के लिए प्रति माह केवल ₹42 से शुरू होने वाला कम मासिक योगदान।'
      ]
    },
    eligibilitySummary: {
      en: [
        'Indian citizen aged between 18 to 40 years.',
        'Must have savings bank account with auto-debit facility enabled.',
        'Must not be an income taxpayer (effective from Oct 2022 onwards).'
      ],
      hi: [
        '18 से 40 वर्ष की आयु का भारतीय नागरिक।',
        'ऑटो-डेबिट सुविधा सक्षम के साथ बचत बैंक खाता होना चाहिए।',
        'आयकरदाता नहीं होना चाहिए (अक्टूबर 2022 से प्रभावी)।'
      ]
    },
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 40,
      gender: 'all',
      maxAnnualIncome: 250000,
      occupations: ['worker', 'farmer', 'unemployed', 'all'],
      residenceType: 'all',
      states: ['All India']
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card of subscriber',
        'Active Savings Bank Account passbook',
        'Nominee Aadhaar and relationship proof'
      ],
      hi: [
        'अंशदाता का आधार कार्ड',
        'सक्रिय बचत बैंक खाता पासबुक',
        'नामांकित व्यक्ति का आधार और संबंध प्रमाण'
      ]
    },
    applicationProcess: [
      {
        step: 1,
        title: { en: 'Visit Savings Bank Branch or NetBanking', hi: 'बचत बैंक शाखा या नेटबैंकिंग पर जाएं' },
        description: {
          en: 'Approach your savings bank or log in to mobile/netbanking app.',
          hi: 'अपने बचत बैंक से संपर्क करें या मोबाइल/नेटबैंकिंग ऐप में लॉग इन करें।'
        }
      },
      {
        step: 2,
        title: { en: 'Fill APY Subscriber Registration Form', hi: 'एपीवाई सब्सक्राइबर रजिस्ट्रेशन फॉर्म भरें' },
        description: {
          en: 'Provide target pension amount (₹1k-5k), nominee info, and auto-debit frequency (monthly/quarterly).',
          hi: 'लक्ष्य पेंशन राशि (₹1k-5k), नामांकित व्यक्ति की जानकारी, और ऑटो-डेबिट आवृत्ति (मासिक/त्रैमासिक) प्रदान करें।'
        }
      },
      {
        step: 3,
        title: { en: 'Enable Auto-Debit Mandate', hi: 'ऑटो-डेबिट जनादेश सक्षम करें' },
        description: {
          en: 'Authorize automatic monthly contribution debit on specified date.',
          hi: 'निर्दिष्ट तिथि पर स्वचालित मासिक योगदान डेबिट को अधिकृत करें।'
        }
      },
      {
        step: 4,
        title: { en: 'PRAN Generation', hi: 'प्राण (PRAN) जनरेशन' },
        description: {
          en: 'Permanent Retirement Account Number (PRAN) issued by NSDL/PFRDA.',
          hi: 'NSDL/PFRDA द्वारा जारी स्थायी सेवानिवृत्ति खाता संख्या (PRAN)।'
        }
      }
    ],
    applicationUrl: 'https://www.npscra.nsdl.co.in/scheme-details.php',
    officialSource: 'PFRDA / myScheme',
    lastUpdated: '2026-05-18',
    status: 'Active',
    popularityScore: 92,
    tags: ['Pension', 'Unorganized Sector', 'Retirement Safety', 'PFRDA']
  },
  {
    id: 'pm-svanidhi',
    name: {
      en: 'PM SVANidhi Scheme (Street Vendors)',
      hi: 'पीएम स्वनिधि योजना (स्ट्रीट वेंडर्स)'
    },
    shortDescription: {
      en: 'Collateral-free working capital micro-loans up to ₹50,000 with 7% interest subsidy & cashback for street vendors.',
      hi: 'स्ट्रीट वेंडर्स के लिए 7% ब्याज सब्सिडी और कैशबैक के साथ ₹50,000 तक का बिना गारंटी कार्यशील पूंजी माइक्रो-लोन।'
    },
    fullDescription: {
      en: 'PM SVANidhi (PM Street Vendor’s AtmaNirbhar Nidhi) is a special micro-credit facility for street vendors. Vendors can avail 1st tranche loan of ₹10,000, 2nd tranche loan of ₹20,000, and 3rd tranche loan of ₹50,000 upon timely repayment with 7% annual interest subsidy.',
      hi: 'पीएम स्वनिधि (पीएम स्ट्रीट वेंडर्स आत्मनिर्भर निधि) स्ट्रीट वेंडर्स के लिए एक विशेष माइक्रो-क्रेडिट सुविधा है। विक्रेता 7% वार्षिक ब्याज सब्सिडी के साथ समय पर पुनर्भुगतान पर ₹10,000 का पहला चरण ऋण, ₹20,000 का दूसरा चरण ऋण और ₹50,000 का तीसरा चरण ऋण प्राप्त कर सकते हैं।'
    },
    category: 'employment',
    ministry: {
      en: 'Ministry of Housing and Urban Affairs',
      hi: 'आवास और शहरी मामले मंत्रालय'
    },
    department: {
      en: 'Urban Poverty Alleviation Division',
      hi: 'शहरी गरीबी उन्मूलन प्रभाग'
    },
    level: 'Central',
    applicableStates: ['All India'],
    benefits: {
      en: [
        'Collateral-free working capital loan up to ₹10,000 (1st tranche), ₹20,000 (2nd tranche), and ₹50,000 (3rd tranche).',
        'Interest subsidy of 7% per annum credited directly into bank account.',
        'Cashback incentive up to ₹1,200 per year for conducting digital transactions.',
        'No penalty on early repayment.'
      ],
      hi: [
        '₹10,000 (पहली किस्त), ₹20,000 (दूसरी किस्त), और ₹50,000 (तीसरी किस्त) तक बिना गारंटी कार्यशील पूंजी ऋण।',
        '7% प्रति वर्ष की ब्याज सब्सिडी सीधे बैंक खाते में जमा।',
        'डिजिटल लेनदेन करने के लिए प्रति वर्ष ₹1,200 तक कैशबैक प्रोत्साहन।',
        'समय से पहले पुनर्भुगतान पर कोई जुर्माना नहीं।'
      ]
    },
    eligibilitySummary: {
      en: [
        'Street vendors vending in urban areas.',
        'Possessing Certificate of Vending / Identity Card issued by Urban Local Bodies (ULB).',
        'Vended on or before March 24, 2020 or recommended by Town Vending Committee (TVC).'
      ],
      hi: [
        'शहरी क्षेत्रों में वेंडिंग करने वाले स्ट्रीट वेंडर्स।',
        'शहरी स्थानीय निकायों (यूएलबी) द्वारा जारी वेंडिंग प्रमाणपत्र / पहचान पत्र धारण करना।',
        '24 मार्च, 2020 या उससे पहले वेंडिंग की या टाउन वेंडिंग कमेटी (टीवीसी) द्वारा अनुशंसित।'
      ]
    },
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 70,
      gender: 'all',
      occupations: ['worker', 'entrepreneur', 'all'],
      residenceType: 'urban',
      states: ['All India']
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card linked with active mobile number',
        'Certificate of Vending (CoV) / TVC recommendation letter',
        'Bank account passbook copy',
        'QR code / UPI ID for digital transactions'
      ],
      hi: [
        'सक्रिय मोबाइल नंबर से जुड़ा आधार कार्ड',
        'वेंडिंग का प्रमाण पत्र (CoV) / टीवीसी सिफारिश पत्र',
        'बैंक खाता पासbook की प्रति',
        'डिजिटल लेनदेन के लिए क्यूआर कोड / यूपीआई आईडी'
      ]
    },
    applicationProcess: [
      {
        step: 1,
        title: { en: 'Visit PM SVANidhi Portal', hi: 'पीएम स्वनिधि पोर्टल पर जाएं' },
        description: {
          en: 'Open pmsvanidhi.mohua.gov.in and click "Apply for Loan".',
          hi: 'pmsvanidhi.mohua.gov.in खोलें और "ऋण के लिए आवेदन करें" पर क्लिक करें।'
        }
      },
      {
        step: 2,
        title: { en: 'Enter Vending Certificate Number', hi: 'वेंडिंग प्रमाणपत्र संख्या दर्ज करें' },
        description: {
          en: 'Enter CoV number or TVC letter details to fetch vendor profile.',
          hi: 'विक्रेता प्रोफ़ाइल प्राप्त करने के लिए CoV संख्या या TVC पत्र विवरण दर्ज करें।'
        }
      },
      {
        step: 3,
        title: { en: 'Choose Preferred Lender', hi: 'पसंदीदा ऋणदाता चुनें' },
        description: {
          en: 'Select nearby commercial bank, Gramin bank, or microfinance institution.',
          hi: 'निकटतम वाणिज्यिक बैंक, ग्रामीण बैंक या सूक्ष्म वित्त संस्थान चुनें।'
        }
      },
      {
        step: 4,
        title: { en: 'Instant Digital Sanction', hi: 'त्वरित डिजिटल स्वीकृति' },
        description: {
          en: 'Lender verifies details digitally and approves credit without collateral.',
          hi: 'ऋणदाता डिजिटल रूप से विवरणों का सत्यापन करता है और बिना किसी संपार्श्विक के ऋण स्वीकृत करता है।'
        }
      }
    ],
    applicationUrl: 'https://pmsvanidhi.mohua.gov.in/',
    officialSource: 'MoHUA / myScheme',
    lastUpdated: '2026-07-05',
    status: 'Active',
    popularityScore: 93,
    tags: ['Street Vendors', 'Working Capital', 'Interest Subsidy', 'Micro Loan']
  },
  {
    id: 'national-apprenticeship-scheme',
    name: {
      en: 'National Apprenticeship Promotion Scheme (NAPS-2)',
      hi: 'राष्ट्रीय शिक्षुता प्रोत्साहन योजना (एनएपीएस-2)'
    },
    shortDescription: {
      en: 'Government stipend support up to ₹1,500/month for youth undergoing industry apprenticeship training.',
      hi: 'उद्योग शिक्षुता प्रशिक्षण प्राप्त करने वाले युवाओं के लिए ₹1,500/माह तक सरकार वजीफा सहायता।'
    },
    fullDescription: {
      en: 'NAPS-2 aims to promote apprenticeship training in the country by providing financial support to establishments undertaking apprenticeship. Under NAPS, 25% of prescribed stipend up to ₹1,500 per month per apprentice is directly transferred via DBT to apprentices.',
      hi: 'एनएपीएस-2 का उद्देश्य शिक्षुता प्रदान करने वाले प्रतिष्ठानों को वित्तीय सहायता प्रदान करके देश में शिक्षुता प्रशिक्षण को बढ़ावा देना है। एनएपीएस के तहत, निर्धारित वजीफे का 25% ₹1,500 प्रति माह प्रति शिक्षु सीधे डीबीटी के माध्यम से शिक्षुओं को स्थानांतरित किया जाता है।'
    },
    category: 'skill-development',
    ministry: {
      en: 'Ministry of Skill Development and Entrepreneurship',
      hi: 'कौशल विकास एवं उद्यमिता मंत्रालय'
    },
    department: {
      en: 'National Skill Development Corporation (NSDC)',
      hi: 'राष्ट्रीय कौशल विकास निगम'
    },
    level: 'Central',
    applicableStates: ['All India'],
    benefits: {
      en: [
        'Direct monthly stipend subsidy of 25% (up to ₹1,500/month) credited directly via Aadhaar DBT.',
        'Hands-on practical industry exposure in top public & private sector companies.',
        'Nationally recognized National Apprenticeship Certificate (NAC) upon completion.'
      ],
      hi: [
        'आधार डीबीटी के माध्यम से सीधे 25% (₹1,500/माह तक) की प्रत्यक्ष मासिक वजीफा सब्सिडी।',
        'शीर्ष सार्वजनिक और निजी क्षेत्र की कंपनियों में व्यावहारिक उद्योग का अनुभव।',
        'पूरा होने पर राष्ट्रीय स्तर पर मान्यता प्राप्त राष्ट्रीय शिक्षुता प्रमाणपत्र (NAC)।'
      ]
    },
    eligibilitySummary: {
      en: [
        'Indian youth aged between 14 to 35 years.',
        'Minimum education qualification 5th pass (varies by trade from 8th, 10th, 12th, ITI, Diploma, Degree).',
        'Aadhaar seeded active bank account required for receiving stipend.'
      ],
      hi: [
        '14 से 35 वर्ष की आयु के भारतीय युवा।',
        'न्यूनतम शैक्षणिक योग्यता 5वीं पास (ट्रेड के अनुसार 8वीं, 10वीं, 12वीं, आईटीआई, डिप्लोमा, डिग्री से भिन्न होती है)।',
        'वजीफा प्राप्त करने के लिए आधार से जुड़ा सक्रिय बैंक खाता आवश्यक है।'
      ]
    },
    eligibilityCriteria: {
      minAge: 14,
      maxAge: 35,
      gender: 'all',
      occupations: ['student', 'unemployed', 'worker', 'all'],
      residenceType: 'all',
      states: ['All India']
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card linked with active mobile number',
        'Educational Marksheet (ITI / 10th / 12th / Degree)',
        'Bank Passbook showing IFSC code and account number',
        'Recent passport size photograph'
      ],
      hi: [
        'सक्रिय मोबाइल नंबर से जुड़ा आधार कार्ड',
        'शैक्षणिक अंकतालिका (आईटीआई / 10वीं / 12वीं / डिग्री)',
        'आईएफएससी कोड और खाता संख्या दिखाने वाली बैंक पासबुक',
        'हालिया पासपोर्ट साइज फोटो'
      ]
    },
    applicationProcess: [
      {
        step: 1,
        title: { en: 'Register on Apprenticeship Portal', hi: 'शिक्षुता पोर्टल पर पंजीकरण करें' },
        description: {
          en: 'Visit apprenticeshipindia.gov.in and click "Candidate Register".',
          hi: 'apprenticeshipindia.gov.in पर जाएं और "उम्मीदवार पंजीकरण" पर क्लिक करें।'
        }
      },
      {
        step: 2,
        title: { en: 'Complete E-KYC Profile', hi: 'ई-केवाईसी प्रोफ़ाइल पूरा करें' },
        description: {
          en: 'Perform Aadhaar E-KYC and enter education qualifications.',
          hi: 'आधार ई-केवाईसी करें और शैक्षणिक योग्यता दर्ज करें।'
        }
      },
      {
        step: 3,
        title: { en: 'Search Apprenticeship Opportunities', hi: 'शिक्षुता के अवसरों की खोज करें' },
        description: {
          en: 'Filter opportunities by trade, location, and company.',
          hi: 'ट्रेड, स्थान और कंपनी के अनुसार अवसरों को फ़िल्टर करें।'
        }
      },
      {
        step: 4,
        title: { en: 'Sign Contract with Establishment', hi: 'प्रतिष्ठान के साथ अनुबंध पर हस्ताक्षर करें' },
        description: {
          en: 'Accept apprenticeship offer online and generate NAPS contract.',
          hi: 'शिक्षुता प्रस्ताव को ऑनलाइन स्वीकार करें और एनएपीएस अनुबंध जनरेट करें।'
        }
      }
    ],
    applicationUrl: 'https://www.apprenticeshipindia.gov.in/',
    officialSource: 'MSDE / NSDC / myScheme',
    lastUpdated: '2026-06-11',
    status: 'Active',
    popularityScore: 91,
    tags: ['Youth Apprenticeship', 'Industry Training', 'Stipend', 'NSDC Certificate']
  },
  {
    id: 'pm-jan-dhan-yojana',
    name: {
      en: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
      hi: 'प्रधानमंत्री जन धन योजना (पीएमजेडीवाई)'
    },
    shortDescription: {
      en: 'Zero-balance bank account with RuPay Debit Card, ₹2 Lakh accidental insurance cover & ₹10,000 overdraft facility.',
      hi: 'रुपये डेबिट कार्ड, ₹2 लाख दुर्घटना बीमा कवर और ₹10,000 ओवरड्राफ्ट सुविधा के साथ जीरो-बैलेंस बैंक खाता।'
    },
    fullDescription: {
      en: 'PMJDY is National Mission for Financial Inclusion to ensure access to financial services, namely, Basic Savings Bank Deposit (BSBD) Accounts, remittance, credit, insurance, pension in an affordable manner.',
      hi: 'पीएमजेडीवाई वित्तीय सेवाओं, यानी बुनियादी बचत बैंक जमा (बीएसबीडी) खातों, प्रेषण, क्रेडिट, बीमा, पेंशन तक किफायती तरीके से पहुंच सुनिश्चित करने के लिए वित्तीय समावेशन का राष्ट्रीय मिशन है।'
    },
    category: 'financial-assistance',
    ministry: {
      en: 'Ministry of Finance',
      hi: 'वित्त मंत्रालय'
    },
    department: {
      en: 'Department of Financial Services',
      hi: 'वित्तीय सेवाएं विभाग'
    },
    level: 'Central',
    applicableStates: ['All India'],
    benefits: {
      en: [
        'Zero balance account opening without minimum deposit requirement.',
        'Free RuPay Debit card with inbuilt ₹2 Lakh Accidental Death Insurance cover.',
        'Overdraft facility up to ₹10,000 to eligible account holders after 6 months of satisfactory operation.',
        'Direct credit of all government subsidies (DBT) directly into PMJDY accounts.'
      ],
      hi: [
        'न्यूनतम जमा आवश्यकता के बिना जीरो बैलेंस खाता खोलना।',
        'इनबिल्ट ₹2 लाख दुर्घटना मृत्यु बीमा कवर के साथ मुफ्त रुपे डेबिट कार्ड।',
        '6 महीने के संतोषजनक संचालन के बाद पात्र खाताधारकों को ₹10,000 तक की ओवरड्राफ्ट सुविधा।',
        'सभी सरकारी सब्सिडी (डीबीटी) का सीधा क्रेडिट सीधे पीएमजेडीवाई खातों में।'
      ]
    },
    eligibilitySummary: {
      en: [
        'Any Indian citizen aged 10 years and above.',
        'Does not hold any other savings account in the same bank.'
      ],
      hi: [
        '10 वर्ष और उससे अधिक आयु का कोई भी भारतीय नागरिक।',
        'उसी बैंक में कोई अन्य बचत खाता नहीं रखता है।'
      ]
    },
    eligibilityCriteria: {
      minAge: 10,
      maxAge: 100,
      gender: 'all',
      occupations: ['all'],
      residenceType: 'all',
      states: ['All India']
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card OR Voter ID / Driving License / MNREGA Job Card',
        'Two recent passport size photographs'
      ],
      hi: [
        'आधार कार्ड या मतदाता पहचान पत्र / ड्राइविंग लाइसेंस / मनरेगा जॉब कार्ड',
        'दो हालिया पासपोर्ट आकार की तस्वीरें'
      ]
    },
    applicationProcess: [
      {
        step: 1,
        title: { en: 'Visit Bank Branch or Bank Mitra', hi: 'बैंक शाखा या बैंक मित्र पर जाएं' },
        description: {
          en: 'Visit any public sector bank, regional rural bank, or Bank Mitra kiosk.',
          hi: 'किसी भी सार्वजनिक क्षेत्र के बैंक, क्षेत्रीय ग्रामीण बैंक या बैंक मित्र कियोस्क पर जाएं।'
        }
      },
      {
        step: 2,
        title: { en: 'Fill Account Opening Form', hi: 'खाता खोलने का फॉर्म भरें' },
        description: {
          en: 'Provide Aadhaar and personal details in PMJDY form.',
          hi: 'पीएमजेडीवाई फॉर्म में आधार और व्यक्तिगत विवरण प्रदान करें।'
        }
      },
      {
        step: 3,
        title: { en: 'Receive Passbook & RuPay Card', hi: 'पासबुक और रुपे कार्ड प्राप्त करें' },
        description: {
          en: 'Get zero-balance bank passbook and RuPay card instantly.',
          hi: 'जीरो-बैलेंस बैंक पासबुक और रुपे कार्ड तुरंत प्राप्त करें।'
        }
      }
    ],
    applicationUrl: 'https://pmjdy.gov.in/',
    officialSource: 'Ministry of Finance / myScheme',
    lastUpdated: '2026-06-30',
    status: 'Active',
    popularityScore: 98,
    tags: ['Zero Balance Account', 'Financial Inclusion', 'RuPay Card', 'Accident Insurance']
  }
];
