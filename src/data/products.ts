export interface Product {
  id: string;
  name: string;
  category: 'extinguisher' | 'gear' | 'sensor' | 'panel' | 'combo';
  categoryName: string;
  tag?: string;
  image: string;
  regularPrice: number;
  salePrice: number;
  specs: string[];
  description: string;
  popular?: boolean;
}

export const products: Product[] = [
  // Combos
  {
    id: 'combo-home',
    name: 'হোম ও কিচেন সেফটি কম্বো (Home Safety Pack)',
    category: 'combo',
    categoryName: 'স্পেশাল কম্বো',
    tag: 'বেস্ট সেলার অফার',
    image: '/images/products/extinguisher-abc.jpg',
    regularPrice: 4200,
    salePrice: 3350,
    specs: [
      '১টি ৩ কেজি ABC Dry Chemical ফায়ার এক্সটিংগুইশার',
      '১টি স্ট্যান্ড-অ্যালন অপটিক্যাল স্মোক ডিটেক্টর (ব্যাটারি সহ)',
      '১টি জরুরি ফায়ার ব্ল্যাঙ্কেট (Fire Blanket 1.2m x 1.2m)',
      'বাসাবাড়ি, ফ্ল্যাট ও কিচেনের জন্য আদর্শ সুরক্ষা'
    ],
    description: 'বাসাবাড়ির কিচেন এবং গ্যাস সিলিন্ডার অগ্নিকাণ্ডের বিরুদ্ধে সবচেয়ে কার্যকর ও সাশ্রয়ী অল-ইন-ওয়ান সুরক্ষা কম্বো।',
    popular: true
  },
  {
    id: 'combo-worker',
    name: 'ইন্ডাস্ট্রিয়াল ওয়ার্কার পিপিই কম্বো (Industrial Worker PPE Set)',
    category: 'combo',
    categoryName: 'স্পেশাল কম্বো',
    tag: 'ফ্যাক্টরি স্পেশাল',
    image: '/images/products/safety-helmet.jpg',
    regularPrice: 4800,
    salePrice: 3850,
    specs: [
      '১টি হেভি-ডিউটি ইন্ডাস্ট্রিয়াল সেফটি হেলমেট (Adjustable Strap)',
      '১টি হাই-ভিজিবিলিটি রিফ্লেক্টিভ সেফটি জ্যাকেট (Day/Night)',
      '১ জোড়া প্রিমিয়াম স্টিল-টো সেফটি শুজ (Anti-Puncture)',
      '১ জোড়া হিট ও ফায়ার রেজিস্ট্যান্ট সেফটি গ্লাভস'
    ],
    description: 'ফ্যাক্টরি, ওয়্যারহাউজ এবং কনস্ট্রাকশন সাইটের কর্মীদের আন্তর্জাতিক মানের কমপ্লায়েন্স সুরক্ষা সেট।',
    popular: true
  },
  {
    id: 'combo-office',
    name: 'শপ ও অফিস কমার্শিয়াল ফায়ার প্যাক',
    category: 'combo',
    categoryName: 'স্পেশাল কম্বো',
    tag: 'হট ডিল',
    image: '/images/products/call-point.jpg',
    regularPrice: 5800,
    salePrice: 4650,
    specs: [
      '১টি ৫ কেজি ABC Dry Chemical এক্সটিংগুইশার (Wall Bracket সহ)',
      '১টি ম্যানুয়াল কল পয়েন্ট (Break Glass Unit)',
      '১টি উচ্চ আওয়াজযুক্ত ফায়ার অ্যালার্ম মোটর বেল',
      'দোকান, শোরুম, রেস্টুরেন্ট ও ছোট অফিসের জন্য প্রযোজ্য'
    ],
    description: 'দোকান ও ব্যবসা প্রতিষ্ঠানের ফায়ার লাইসেন্স কমপ্লায়েন্স এবং জরুরি অ্যালার্মের জন্য সম্পূর্ণ রেডি প্যাকেজ।',
    popular: false
  },

  // Fire Extinguishers (Standard 3kg & 5kg in Bangladesh)
  {
    id: 'ext-abc-3kg',
    name: 'ABC Dry Powder ফায়ার এক্সটিংগুইশার (৩ কেজি)',
    category: 'extinguisher',
    categoryName: 'ফায়ার এক্সটিংগুইশার',
    tag: 'স্ট্যান্ডার্ড সাইজ',
    image: '/images/products/extinguisher-abc.jpg',
    regularPrice: 1850,
    salePrice: 1450,
    specs: [
      'Class A, Class B, Class C ও ইলেকট্রিক্যাল আগুনে ১০০% কার্যকর',
      'মেয়াদকাল: ৩ বছর পর্যন্ত ভ্যালিড (প্রেশার গেজ ইন্ডিকেটর সহ)',
      'ওয়াল মাউন্টিং ব্র্যাকেট সহ সম্পূর্ণ নতুন ইনট্যাক্ট সিলিন্ডার',
      'বাসাবাড়ি, ফ্ল্যাট, ছোট শপ ও কমার্শিয়াল রুমের জন্য উপযোগী'
    ],
    description: 'বাংলাদেশে সবচেয়ে জনপ্রিয় ৩ কেজি ড্রাই পাউডার সিলিন্ডার। প্রাথমিক আগুন নেভাতে অত্যন্ত কার্যকর।',
    popular: true
  },
  {
    id: 'ext-abc-5kg',
    name: 'ABC Dry Powder ফায়ার এক্সটিংগুইশার (৫ কেজি)',
    category: 'extinguisher',
    categoryName: 'ফায়ার এক্সটিংগুইশার',
    tag: 'ফ্যাক্টরি ও অফিস স্ট্যান্ডার্ড',
    image: '/images/products/extinguisher-abc.jpg',
    regularPrice: 2400,
    salePrice: 1850,
    specs: [
      'উচ্চ সক্ষমতার ড্রাই কেমিক্যাল পাউডার (Discharge Time: 15-18s)',
      'ফায়ার সার্ভিস ও সিভিল ডিফেন্স কমপ্লায়েন্স মানসম্মত',
      'গার্মেন্টস, গোডাউন, রেস্টুরেন্ট ও বহুতল ভবনের জন্য আবশ্যিক',
      'সহজে রিফিলযোগ্য ও হেভি-ডিউটি স্টিল বডি'
    ],
    description: 'বড় পরিসরের আগুন দ্রুত নিয়ন্ত্রণে আনার জন্য সবচেয়ে বেশি ব্যবহৃত ৫ কেজি সক্ষমতার এক্সটিংগুইশার।',
    popular: true
  },
  {
    id: 'ext-co2-3kg',
    name: 'CO2 কার্বন ডাই-অক্সাইড এক্সটিংগুইশার (৩ কেজি)',
    category: 'extinguisher',
    categoryName: 'ফায়ার এক্সটিংগুইশার',
    tag: 'সার্ভার ও প্যানেল সেফ',
    image: '/images/products/extinguisher-co2.jpg',
    regularPrice: 3800,
    salePrice: 3100,
    specs: [
      'কম্পিউটার, ডেটা সেন্টার, সার্ভার র‍্যাক ও ইলেকট্রিক প্যানেলের জন্য নিরাপদ',
      'কোনো পাউডার বা অবশিষ্টাংশ ফেলে না (Clean Extinguishing Agent)',
      'নন-কন্ডাক্টিভ ডিসচার্জ হর্ন নজল ও সেফটি রিলিজ পিন',
      'Class B ও Class C ফায়ার স্পেশালিস্ট'
    ],
    description: 'দামী বৈদ্যুতিক যন্ত্রপাতির ক্ষতি না করে অক্সিজেন অপসারণের মাধ্যমে দ্রুত আগুন নেভায়।',
    popular: false
  },
  {
    id: 'ext-co2-5kg',
    name: 'CO2 কার্বন ডাই-অক্সাইড এক্সটিংগুইশার (৫ কেজি)',
    category: 'extinguisher',
    categoryName: 'ফায়ার এক্সটিংগুইশার',
    tag: 'ইন্ডাস্ট্রিয়াল CO2',
    image: '/images/products/extinguisher-co2.jpg',
    regularPrice: 5200,
    salePrice: 4350,
    specs: [
      'উচ্চ ঘনত্বের ৫ কেজি লিকুইড CO2 গ্যাস সিলিন্ডার',
      'হেভি সাব-স্টেশন, জেনারেটর রুম ও ইন্ডাস্ট্রিয়াল প্যানেল বোর্ডের জন্য আদর্শ',
      'ইউরোপিয়ান স্ট্যান্ডার্ড সেফটি ডিসচার্জ পাইপ',
      'দীর্ঘমেয়াদী সিলিন্ডার বডি ও টেস্টেড প্রেশার সিল'
    ],
    description: 'ফ্যাক্টরি ও সাব-স্টেশনের বড় বৈদ্যুতিক অগ্নিকাণ্ড নিয়ন্ত্রণে সর্বোচ্চ সক্ষমতার CO2 সিলিন্ডার।',
    popular: false
  },

  // Workplace Safety Gear
  {
    id: 'gear-helmet',
    name: 'ইন্ডাস্ট্রিয়াল সেফটি হেলমেট (Adjustable Chin Strap)',
    category: 'gear',
    categoryName: 'সেফটি গিয়ার ও পিপিই',
    tag: 'হাই ইমপ্যাক্ট',
    image: '/images/products/safety-helmet.jpg',
    regularPrice: 650,
    salePrice: 480,
    specs: [
      'হাই-ডেনসিটি পলিথিন (HDPE) ইমপ্যাক্ট-রেজিস্ট্যান্ট শেল',
      '৬-পয়েন্ট অ্যাডজাস্টেবল সাসপেনশন ও নরম চিন-স্ট্র্যাপ',
      'রোদ ও বৃষ্টি প্রতিরোধী দীর্ঘস্থায়ী ডিজাইন',
      'কনস্ট্রাকশন ও ইঞ্জিনিয়ারিং সাইটে বাধ্যতামূলক'
    ],
    description: 'মাথায় ভারী জিনিস পড়ার ঝুঁকি থেকে সর্বোচ্চ সুরক্ষা দেয়। সহজে সাইজ অ্যাডজাস্ট করা যায়।',
    popular: true
  },
  {
    id: 'gear-vest',
    name: 'হাই-ভিজিবিলিটি রিফ্লেক্টিভ সেফটি জ্যাকেট / ভেস্ট',
    category: 'gear',
    categoryName: 'সেফটি গিয়ার ও পিপিই',
    tag: 'নাইট ভিশন',
    image: '/images/products/safety-vest.jpg',
    regularPrice: 350,
    salePrice: 250,
    specs: [
      '৩৬০ ডিগ্রি হাই-গ্লস রিফ্লেক্টিভ স্ট্রাইপস',
      'দিন ও রাতের অন্ধকারে দূর থেকে দৃশ্যমান',
      'ব্রিদেবল ও লাইটওয়েট পলিয়েস্টার ফ্যাব্রিক',
      'ফ্রন্ট জিপার বা ভেলক্রো লক সিস্টেম'
    ],
    description: 'রাতের শিফটে কাজ করা বা কম আলোতে শ্রমিকদের দুর্ঘটনা এড়াতে অত্যন্ত কার্যকর সেফটি ভেস্ট।',
    popular: false
  },
  {
    id: 'gear-shoes',
    name: 'স্টিল-টো প্রটেক্টিভ সেফটি শুজ (Heavy Duty)',
    category: 'gear',
    categoryName: 'সেফটি গিয়ার ও পিপিই',
    tag: 'অ্যান্টি-পাংচার',
    image: '/images/products/safety-shoes.jpg',
    regularPrice: 2800,
    salePrice: 2150,
    specs: [
      '২০০ জুল শক রেজিস্ট্যান্ট ইউরোপিয়ান স্ট্যান্ডার্ড স্টিল টো ক্যাপ',
      'লোহা, পেরেক বা সূঁচালো বস্তু প্রতিরোধী অ্যান্টি-পাংচার সোল',
      'অয়েল, এসিড ও স্লিপ-রেজিস্ট্যান্ট রাবার আউটসোল',
      'দীর্ঘক্ষণ পরে কাজ করার উপযোগী আরামদায়ক কুশন ইনসোল'
    ],
    description: 'ভারী যন্ত্রপাতি ও ধারালো পিন-পেরেক থেকে পায়ের শতভাগ নিরাপত্তা প্রদানকারী প্রিমিয়াম সেফটি বুট।',
    popular: true
  },
  {
    id: 'gear-gloves',
    name: 'হিট ও ফায়ার রেজিস্ট্যান্ট সেফটি গ্লাভস',
    category: 'gear',
    categoryName: 'সেফটি গিয়ার ও পিপিই',
    tag: 'হিট প্রটেক্ট',
    image: '/images/products/fire-gloves.jpg',
    regularPrice: 750,
    salePrice: 550,
    specs: [
      'উচ্চ তাপমাত্রা ও শিখা সহনশীল প্রিমিয়াম লেদার কোটিং',
      'স্পার্ক, গরম লোহা ও কাটিং কাজের জন্য উপযোগী',
      'আরামদায়ক অভ্যন্তরীণ কটন লাইনিং',
      'ফ্যাক্টরি ও ওয়েল্ডিং কাজে আদর্শ'
    ],
    description: 'আগুন ও অতিরিক্ত তাপমাত্রায় হাত নিরাপদে রাখতে উচ্চমানের প্রোটেক্টিভ গ্লাভস।',
    popular: false
  },

  // Smoke & Gas Detectors
  {
    id: 'sensor-smoke',
    name: 'স্ট্যান্ড-অ্যালন অপটিক্যাল স্মোক ডিটেক্টর (ওয়্যারলেস)',
    category: 'sensor',
    categoryName: 'স্মোক ও গ্যাস ডিটেক্টর',
    tag: 'স্মার্ট সেফটি',
    image: '/images/products/smoke-detector.jpg',
    regularPrice: 1200,
    salePrice: 850,
    specs: [
      'কোনো তার বা পাওয়ার সাপ্লাই ছাড়াই ৯V ব্যাটারিতে চলে (১ বছর ব্যাকআপ)',
      'ধোঁয়া শনাক্ত হওয়ার সাথে সাথে ৮৫ ডেসিবেল উচ্চ শব্দের অ্যালার্ম বাজায়',
      'রেড এলইডি স্ট্যাটাস ইন্ডিকেটর ও টেস্ট বাটন',
      'বেডরুম, ড্রয়িংরুম ও স্টোররুমে সিলিংয়ে সহজে স্ক্রু বা আঠা দিয়ে লাগানো যায়'
    ],
    description: 'ঘুমের মধ্যেও ধোঁয়ার উপস্থিতি পেয়ে উচ্চ শব্দে সতর্ক করে জীবন ও সম্পদ রক্ষা করে।',
    popular: true
  },
  {
    id: 'sensor-gas',
    name: 'স্মার্ট এলপিজি ও প্রাকৃতিক গ্যাস লিক ডিটেক্টর',
    category: 'sensor',
    categoryName: 'স্মোক ও গ্যাস ডিটেক্টর',
    tag: 'কিচেন সেভার',
    image: '/images/products/gas-detector.jpg',
    regularPrice: 1800,
    salePrice: 1350,
    specs: [
      'সিলিন্ডার বা পাইপলাইনের গ্যাস লিক হওয়া মাত্র দ্রুত সেন্স করে',
      'উচ্চ শব্দে সাইরেন অ্যালার্ম ও লাইট ফ্ল্যাশিং',
      '২২০V কারেন্টে প্লাগ-ইন করে সরাসরি ব্যবহারযোগ্য',
      'রান্নাঘরের সম্ভাব্য গ্যাস বিস্ফোরণ শতভাগ রোধ করে'
    ],
    description: 'সিলিন্ডারের অদৃশ্য গ্যাস লিকেজ সময়মতো শনাক্ত করে ভয়াবহ রান্নাঘর দুর্ঘটনা থেকে পরিবারকে রক্ষা করুন।',
    popular: false
  },
  {
    id: 'sensor-blanket',
    name: 'জরুরি ফায়ার ব্ল্যাঙ্কেট (Fire Blanket 1.2m x 1.2m)',
    category: 'sensor',
    categoryName: 'স্মোক ও গ্যাস ডিটেক্টর',
    tag: 'কুইক অ্যাকশন',
    image: '/images/products/fire-blanket.jpg',
    regularPrice: 950,
    salePrice: 720,
    specs: [
      '১০০% ফায়ারপ্রুফ ফাইবারগ্লাস ফেব্রিক (৫৫০°C পর্যন্ত তাপসহনশীল)',
      'রান্নাঘরের কড়াইয়ের তেল বা মানুষের গায়ে লাগা আগুন ঢাকতে জাদুকরী সমাধান',
      'কোনো কেমিক্যাল নেই, ব্যবহার করা অত্যন্ত সহজ ও দ্রুত',
      'সহজে দেয়ালে ঝুলিয়ে রাখার ওয়াটারপ্রুফ পাউচ সহ'
    ],
    description: 'রান্নাঘরে তেলের আগুনে পানি দিলে আগুন ছড়িয়ে পড়ে—ফায়ার ব্ল্যাঙ্কেট চাপ দিয়ে এক সেকেন্ডে আগুন নেভানো যায়।',
    popular: false
  },

  // Fire Alarm Panel & Accessories
  {
    id: 'panel-master',
    name: 'সেন্ট্রাল ফায়ার অ্যালার্ম কন্ট্রোল প্যানেল (৪-জোন)',
    category: 'panel',
    categoryName: 'কন্ট্রোল প্যানেল ও এক্সেসরিজ',
    tag: 'কমার্শিয়াল গ্রেড',
    image: '/images/products/alarm-panel.jpg',
    regularPrice: 9500,
    salePrice: 7900,
    specs: [
      '৪টি স্বতন্ত্র জোন মনিটরিং ও কন্ট্রোল সুবিধা',
      'বিল্ট-ইন ব্যাকআপ ব্যাটারি চার্জার ও পাওয়ার সার্কিট',
      'এলইডি স্ট্যাটাস, সাইলেন্স, রিসেট ও টেস্ট কি-প্যাড',
      'অফিস ভবন, হাসপাতাল ও কারখানার পূর্ণাঙ্গ অ্যালার্ম ব্যবস্থার প্রাণকেন্দ্র'
    ],
    description: 'সম্পূর্ণ ভবনের স্মোক ডিটেক্টর, হিট সেন্সর ও কল পয়েন্টগুলোকে এক জায়গা থেকে মনিটর করার সেন্ট্রাল প্যানেল।',
    popular: false
  },
  {
    id: 'panel-callpoint',
    name: 'ম্যানুয়াল কল পয়েন্ট ফায়ার সুইচ (Break Glass)',
    category: 'panel',
    categoryName: 'কন্ট্রোল প্যানেল ও এক্সেসরিজ',
    tag: 'জরুরি সুইচ',
    image: '/images/products/call-point.jpg',
    regularPrice: 750,
    salePrice: 520,
    specs: [
      'জরুরি মুহূর্তে কাঁচ বা প্লাস্টিক প্লেট পুশ করলেই পুরো বিল্ডিংয়ে অ্যালার্ম বেজে উঠবে',
      'রিসেটেবল কি সহ সরবরাহ করা হয় (পুনর্ব্যবহারযোগ্য)',
      'উজ্জ্বল লাল রঙের টেকসই এবিএস প্লাস্টিক বডি',
      'বিল্ডিংয়ের সিঁড়ি ও এক্সিট পয়েন্টে স্থাপনের উপযোগী'
    ],
    description: 'আগুন দেখতে পেয়ে যে কেউ এক ক্লিকে পুরো বিল্ডিংয়ের সবাইকে সতর্ক করতে পারে।',
    popular: false
  },
  {
    id: 'panel-bell',
    name: 'ইন্ডাস্ট্রিয়াল মোটর ফায়ার অ্যালার্ম বেল (৬ ইঞ্চি - ২৪V)',
    category: 'panel',
    categoryName: 'কন্ট্রোল প্যানেল ও এক্সেসরিজ',
    tag: 'লাউড সাইরেন',
    image: '/images/products/alarm-bell.jpg',
    regularPrice: 1100,
    salePrice: 850,
    specs: [
      '৯৫ ডেসিবেল অতি তীব্র ঘণ্টার শব্দ—দূরের কোলাহলেও পরিষ্কার শোনা যায়',
      'হেভি অ্যালুমিনিয়াম ডোম ও মেটালিক স্ট্রাইকার',
      '২৪V ডিসি পাওয়ারে অপারেট করে',
      'ফায়ার কমপ্লায়েন্সের জন্য আবশ্যক নোটিফিকেশন অ্যাপ্লায়েন্স'
    ],
    description: 'জরুরি ফায়ার এলার্ম বাজানোর নির্ভরযোগ্য মেটাল মোটর বেল।',
    popular: false
  }
];

export const comboOffers = products.filter(p => p.category === 'combo');
