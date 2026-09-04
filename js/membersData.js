// পারিবারিক সদস্যবৃন্দের মূল ডেটা (UID অনুযায়ী ক্রমানুসারে সাজানো)
export const rawMembersData = [
    // FT-001 to FT-010
    { uid: "FT-001", bnName: "অবিনাশ চন্দ্র রায়", enName: "Abinash Chandra Roy", nick: "অবিনাশ", gender: "Male", color: 0x0055ff, spouse: "FT-002", father: "FT-143", mother: "FT-144", children: ["FT-003", "FT-004"], description: "" },
    { uid: "FT-002", bnName: "ফেন্সি রানি রায়", enName: "Fency Rani Roy", nick: "কনিকা", gender: "Female", color: 0xff1493, spouse: "FT-001", father: "FT-021", mother: "FT-079", children: ["FT-003", "FT-004"], description: "" },
    { uid: "FT-003", bnName: "বাঁধন চন্দ্র রায়", enName: "Badhon Chandra Roy", nick: "বাঁধন", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-001", mother: "FT-002", children: [], description: "" },
    { uid: "FT-004", bnName: "লাবণ্য চন্দ্র রায়", enName: "Labonno Chandra Roy", nick: "লাবণ্য", gender: "Male", color: 0x3366ff, spouse: null, father: "FT-001", mother: "FT-002", children: [], description: "" },
    { uid: "FT-006", bnName: "গোলাপ চন্দ্র রায়", enName: "Golap Chandra Roy", nick: "গোলাপ", gender: "Male", color: 0x0055ff, spouse: "FT-007", father: null, mother: null, children: ["FT-008", "FT-009"], description: "" },
    { uid: "FT-007", bnName: "মনিকা রানী রায়", enName: "Monika Rani Roy", nick: "মনিকা", gender: "Female", color: 0xff1493, spouse: "FT-006", father: "FT-021", mother: "FT-079", children: ["FT-008", "FT-009"], description: "" },
    { uid: "FT-008", bnName: "ওম চন্দ্র রায়", enName: "Om Chandra Roy", nick: "ওম", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-006", mother: "FT-007", children: [], description: "" },
    { uid: "FT-009", bnName: "বেদ চন্দ্র রায়", enName: "Veda Chandra Roy", nick: "বেদ", gender: "Male", color: 0x3366ff, spouse: null, father: "FT-006", mother: "FT-007", children: [], description: "" },

    // FT-011 to FT-020
    { uid: "FT-011", bnName: "জুয়েল চন্দ্র রায়", enName: "Juel Chandra Roy", nick: "জুয়েল", gender: "Male", color: 0x0055ff, spouse: "FT-012", father: "FT-021", mother: "FT-079", children: ["FT-013"], description: "" },
    { uid: "FT-012", bnName: "জয়া রানী রায়", enName: "Joya Rani Roy", nick: "জয়া", gender: "Female", color: 0xff1493, spouse: "FT-011", father: "FT-100", mother: "FT-101", children: ["FT-013"], description: "" },
    { uid: "FT-013", bnName: "তীর্থ চন্দ্র রায়", enName: "Tirtho Chandra Roy", nick: "তীর্থ", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-011", mother: "FT-012", children: [], description: "" },
    { uid: "FT-016", bnName: "দিনোনাথ রায়", enName: "Dinonath Roy", nick: "খোকা সরকার", gender: "Male", color: 0x0055ff, spouse: "FT-017", father: "FT-261", mother: "FT-263", children: ["FT-018", "FT-019", "FT-020", "FT-021", "FT-022", "FT-023", "FT-024", "FT-025"], description: "" },
    { uid: "FT-017", bnName: "দুলালী রাণী রায়", enName: "Dulali Rani Roy", nick: "নলিনী", gender: "Female", color: 0xff1493, spouse: "FT-016", father: null, mother: null, children: ["FT-018", "FT-019", "FT-020", "FT-021", "FT-022", "FT-023", "FT-024", "FT-025"], description: "" },
    { uid: "FT-018", bnName: "জয়ন্তী রাণী রায়", enName: "Joyonti Rani Roy", nick: "জয়ন্তী", gender: "Female", color: 0xff1493, spouse: "FT-028", father: "FT-016", mother: "FT-017", children: ["FT-029", "FT-030", "FT-031", "FT-032", "FT-033"], description: "" },
    { uid: "FT-019", bnName: "বাসন্তী রাণী রায়", enName: "Basonti Rani Roy", nick: "বাসন্তী", gender: "Female", color: 0xff1493, spouse: "FT-036", father: "FT-016", mother: "FT-017", children: ["FT-037", "FT-040"], description: "" },
    { uid: "FT-020", bnName: "দিনেশ চন্দ্র রায়", enName: "Dinash Chandra Roy", nick: "দিনেশ", gender: "Male", color: 0x0055ff, spouse: "FT-047", father: "FT-016", mother: "FT-017", children: ["FT-048", "FT-049", "FT-050"], description: "" },

    // FT-021 to FT-040
    { uid: "FT-021", bnName: "ধনেশ চন্দ্র রায়", enName: "Dhonesh Chandra Roy", nick: "ধনেশ", gender: "Male", color: 0x0055ff, spouse: "FT-079", father: "FT-016", mother: "FT-017", children: ["FT-002", "FT-011", "FT-007"], description: "" },
    { uid: "FT-022", bnName: "গণেশ চন্দ্র রায়", enName: "Gonesh Chandra Roy", nick: "গণেশ", gender: "Male", color: 0x0055ff, spouse: null, father: "FT-016", mother: "FT-017", children: [], description: "তিনি অল্প বয়সে মারা যায়।" },
    { uid: "FT-023", bnName: "কর্তিক চন্দ্র রায়", enName: "Karttik Chandra Roy", nick: "কর্তিক", gender: "Male", color: 0x0055ff, spouse: "FT-055", father: "FT-016", mother: "FT-017", children: ["FT-056", "FT-059"], description: "" },
    { uid: "FT-024", bnName: "নিয়তী রানি রায়", enName: "Nioti Rani Roy", nick: "নিয়তী", gender: "Female", color: 0xff1493, spouse: "FT-062", father: "FT-016", mother: "FT-017", children: [], description: "তারা নিসন্তান ছিলেন।" },
    { uid: "FT-025", bnName: "কাঞ্চন চন্দ্র রায়", enName: "Kanchon Chandra Roy", nick: "কাঞ্চন", gender: "Male", color: 0x0055ff, spouse: "FT-066", father: "FT-016", mother: "FT-017", children: ["FT-067", "FT-068"], description: "" },
    { uid: "FT-028", bnName: "রমেশ চন্দ্র রায়", enName: "Romesh Chandra Roy", nick: "রমেশ", gender: "Male", color: 0x0055ff, spouse: "FT-018", father: null, mother: null, children: ["FT-029", "FT-030", "FT-031", "FT-032", "FT-033"], description: "১৯৭১ থেকে ভারতে." },
    { uid: "FT-029", bnName: "অনজু রাণী রায়", enName: "Anju Rani Roy", nick: "অনজু", gender: "Female", color: 0xff1493, spouse: null, father: "FT-028", mother: "FT-018", children: [], description: "" },
    { uid: "FT-030", bnName: "দিলীপ চন্দ্র রায়", enName: "Dilip Chandra Roy", nick: "দিলীপ", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-028", mother: "FT-018", children: [], description: "" },
    { uid: "FT-031", bnName: "নিত্যা রানী রায়", enName: "Nitta Chandra Roy", nick: "নিত্যা", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-028", mother: "FT-018", children: [], description: "" },
    { uid: "FT-032", bnName: "মানিক চন্দ্র রায়", enName: "Manik Chandra Roy", nick: "মানিক", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-028", mother: "FT-018", children: [], description: "" },
    { uid: "FT-033", bnName: "সঞ্জু রানী রায়", enName: "Sanju Rani Roy", nick: "টুকটুকি", gender: "Female", color: 0xff69b4, spouse: null, father: "FT-028", mother: "FT-018", children: [], description: "" },
    { uid: "FT-036", bnName: "ভোলা কাজ্জি", enName: "Vola Kagozi", nick: "ভোলা", gender: "Male", color: 0x0055ff, spouse: "FT-019", father: null, mother: null, children: ["FT-037", "FT-040"], description: "" },
    { uid: "FT-037", bnName: "বিপুল রায়", enName: "Bepul Roy", nick: "বিপুল", gender: "Male", color: 0x00ccff, spouse: "FT-038", father: "FT-019", mother: null, children: ["FT-039"], description: "" },
    { uid: "FT-038", bnName: "কল্পনা (নয়নি)", enName: "Kalpona (Nayoni)", nick: "কল্পনা", gender: "Female", color: 0xff1493, spouse: "FT-037", father: null, mother: null, children: ["FT-039"], description: "" },
    { uid: "FT-039", bnName: "তোতা রায় ", enName: "Tota Roy", nick: "তোতা", gender: "Male", color: 0x3366ff, spouse: null, father: "FT-037", mother: "FT-038", children: [], description: "" },
    { uid: "FT-040", bnName: "বিউটি রানী", enName: "Beauty Rani", nick: "বিউটি", gender: "Female", color: 0xff1493, spouse: "FT-041", father: "FT-036", mother: "FT-019", children: ["FT-042", "FT-045"], description: "" },

    // FT-041 to FT-070
    { uid: "FT-041", bnName: "অমূল্য চন্দ্র রায়", enName: "Amullo Chandra Roy", nick: "অমূল্য", gender: "Male", color: 0x0055ff, spouse: "FT-040", father: null, mother: null, children: ["FT-042", "FT-045"], description: "" },
    { uid: "FT-042", bnName: "দিপা রানী", enName: "Depa Rani", nick: "দিপা", gender: "Female", color: 0xff1493, spouse: "FT-043", father: "FT-041", mother: "FT-040", children: [], description: "" },
    { uid: "FT-043", bnName: "মোহন রায়", enName: "Mohon Roy", nick: "মোহন", gender: "Male", color: 0x0055ff, spouse: "FT-042", father: null, mother: null, children: [], description: "" },
    { uid: "FT-045", bnName: "অর্জুন চন্দ্র রায়", enName: "Arjun Chandra Roy", nick: "অর্জুন", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-041", mother: "FT-040", children: [], description: "" },
    { uid: "FT-047", bnName: "ভদ্রা রাণী রায়", enName: "Bhadra Rani Roy", nick: "ভদ্রা", gender: "Female", color: 0xff1493, spouse: "FT-020", father: null, mother: null, children: ["FT-048", "FT-049", "FT-050"], description: "" },
    { uid: "FT-048", bnName: "দিপিকা রানী রায়", enName: "Depika Rani Roy", nick: "দিপিকা", gender: "Female", color: 0xff1493, spouse: "FT-051", father: "FT-020", mother: "FT-047", children: [], description: "" },
    { uid: "FT-049", bnName: "দিতী রানী রায়", enName: "Diti Rani Roy", nick: "দিতী", gender: "Female", color: 0xff1493, spouse: null, father: "FT-020", mother: "FT-047", children: [], description: "" },
    { uid: "FT-050", bnName: "অনিক রায় প্রান্ত", enName: "Anik Roy Pranto", nick: "প্রান্ত", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-020", mother: "FT-047", children: [], description: "" },
    { uid: "FT-051", bnName: "সুধাংশু রায়", enName: "Sudhangsu Roy", nick: "সুধাংশু", gender: "Male", color: 0x0055ff, spouse: "FT-048", father: null, mother: null, children: [], description: "" },
    { uid: "FT-055", bnName: "লক্ষ্মী রাণী রায়", enName: "Lakkhi Rani Roy", nick: "লক্ষ্মী", gender: "Female", color: 0xff1493, spouse: "FT-023", father: null, mother: null, children: ["FT-056", "FT-059"], description: "" },
    { uid: "FT-056", bnName: "কেয়া রায় ঘোষ", enName: "Keya Roy Ghosh", nick: "কেয়া", gender: "Female", color: 0xff1493, spouse: "FT-057", father: "FT-023", mother: "FT-055", children: ["FT-058"], description: "" },
    { uid: "FT-057", bnName: "তন্ময় ঘোষ", enName: "Tonmoy Ghosh", nick: "তন্ময়", gender: "Male", color: 0x0055ff, spouse: "FT-056", father: null, mother: null, children: ["FT-058"], description: "" },
    { uid: "FT-058", bnName: "কৃত্তিকা ঘোষ তনয়া", enName: "Krittika Ghosh Tanoya", nick: "কৃত্তিকা", gender: "Female", color: 0xff69b4, spouse: null, father: "FT-057", mother: "FT-056", children: [], description: "" },
    { uid: "FT-059", bnName: "অপু রায়", enName: "Apu Roy", nick: "অপু", gender: "Male", color: 0x00ccff, spouse: "FT-060", father: "FT-023", mother: "FT-055", children: [], description: "" },
    { uid: "FT-060", bnName: "শ্রাবন্তী রায়", enName: "Srabonti Ray", nick: "শ্রাবন্তী", gender: "Female", color: 0xff1493, spouse: "FT-059", father: null, mother: null, children: [], description: "" },
    { uid: "FT-062", bnName: "সুধীর চন্দ্র রায়", enName: "Sudir Roy", nick: "সুধীর", gender: "Male", color: 0x0055ff, spouse: "FT-024", father: null, mother: null, children: [], description: "তারা নিসন্তান ছিলেন।" },
    { uid: "FT-066", bnName: "রত্না রাণী রায়", enName: "Ratna Rani Roy", nick: "রত্না", gender: "Female", color: 0xff1493, spouse: "FT-025", father: null, mother: null, children: ["FT-067", "FT-068"], description: "" },
    { uid: "FT-067", bnName: "রয়েল চন্দ্র রায়", enName: "Royel Chandra Roy", nick: "রয়েল", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-025", mother: "FT-066", children: [], description: "" },
    { uid: "FT-068", bnName: "দেব চন্দ্র রায়", enName: "Dev Chandra Roy", nick: "দেব", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-025", mother: "FT-066", children: [], description: "" },
    { uid: "FT-070", bnName: "সুরেশ দেউ দেব সিংহ", enName: "Suresh Deu Dev Singh", nick: "সুরেশ", gender: "Male", color: 0x0055ff, spouse: "FT-071", father: null, mother: null, children: ["FT-073", "FT-079", "FT-081", "FT-085"], description: "" },

    // FT-071 to FT-110
    { uid: "FT-071", bnName: "সিতোময়ী রায় দেব সিংহ", enName: "Sitomoyi Roy Dev Singh", nick: "সিতোময়ী", gender: "Female", color: 0xff1493, spouse: "FT-070", father: null, mother: null, children: ["FT-073", "FT-079", "FT-081", "FT-085"], description: "" },
    { uid: "FT-073", bnName: "রবীন্দ্রনাথ দেব সিংহ", enName: "Rabindranath Dev Singh", nick: "রবীন্দ্রনাথ", gender: "Male", color: 0x0055ff, spouse: "FT-074", father: "FT-070", mother: "FT-071", children: ["FT-075"], description: "" },
    { uid: "FT-074", bnName: "সুনতি রানী", enName: "Sunoti Rani", nick: "সুনতি", gender: "Female", color: 0xff1493, spouse: "FT-073", father: null, mother: null, children: ["FT-075"], description: "" },
    { uid: "FT-075", bnName: "শিমুল সিংহ দেবব্রত", enName: "Shimul Singh Debabrata", nick: "শিমুল", gender: "Male", color: 0x00ccff, spouse: "FT-076", father: "FT-073", mother: "FT-074", children: ["FT-077"], description: "" },
    { uid: "FT-076", bnName: "ছায়া রানী রায়", enName: "Chaya Rani Roy", nick: "ছায়া", gender: "Female", color: 0xff1493, spouse: "FT-075", father: null, mother: null, children: ["FT-077"], description: "" },
    { uid: "FT-077", bnName: "দিতিপ্রিয়া রায় (শুদ্ধি)", enName: "Ditipriya Roy", nick: "দিতিপ্রিয়া", gender: "Female", color: 0xff69b4, spouse: null, father: "FT-075", mother: "FT-076", children: [], description: "" },
    { uid: "FT-079", bnName: "ছবিতা রানী রায়", enName: "Sabita Rani Roy", nick: "ছবিতা", gender: "Female", color: 0xff1493, spouse: "FT-021", father: "FT-070", mother: "FT-071", children: ["FT-002", "FT-011", "FT-007"], description: "" },
    { uid: "FT-081", bnName: "কবিচন্দ্র দেব সিংহ", enName: "Kavichandra Dev Singha", nick: "কবিচন্দ্র", gender: "Male", color: 0x0055ff, spouse: "FT-082", father: "FT-070", mother: "FT-071", children: ["FT-083"], description: "" },
    { uid: "FT-082", bnName: "পুষ্পদেব সিংহ", enName: "Pushpadev Singh", nick: "পুষ্পদেব", gender: "Female", color: 0xff1493, spouse: "FT-081", father: null, mother: null, children: ["FT-083"], description: "" },
    { uid: "FT-083", bnName: "নবকুমার রায় দেবসিংহ", enName: "Nabakumar Roy Debsingh", nick: "নবকুমার", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-081", mother: "FT-082", children: [], description: "" },
    { uid: "FT-085", bnName: "নমিতা রানী দেবসিংহ", enName: "Namita Rani Debsingh", nick: "নমিতা", gender: "Female", color: 0xff1493, spouse: "FT-086", father: "FT-070", mother: "FT-071", children: ["FT-087", "FT-088"], description: "" },
    { uid: "FT-086", bnName: "মোহন কাজ্জি", enName: "Mohon Kajji", nick: "মোহন", gender: "Male", color: 0x0055ff, spouse: "FT-085", father: null, mother: null, children: ["FT-087", "FT-088"], description: "" },
    { uid: "FT-087", bnName: "মধু রায়", enName: "Madhu Roy", nick: "মধু", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-086", mother: "FT-085", children: [], description: "তরুণ বয়সে আত্মহত্যা করেছে।" },
    { uid: "FT-088", bnName: "মোহনা রায় মিষ্টি", enName: "Mohona Roy Misty", nick: "মিষ্টি", gender: "Female", color: 0xff1493, spouse: "FT-089", father: "FT-086", mother: "FT-085", children: ["FT-090"], description: "" },
    { uid: "FT-089", bnName: "চৈতন্য দেব বিচিত্র", enName: "Chaitanya Dev Bichittro", nick: "চৈতন্য", gender: "Male", color: 0x0055ff, spouse: "FT-088", father: null, mother: null, children: ["FT-090"], description: "" },
    { uid: "FT-090", bnName: "অভিমুন্য রায় অভি", enName: "Abhimanyu Roy Avi", nick: "অভিমুন্য", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-089", mother: "FT-088", children: [], description: "" },
    { uid: "FT-100", bnName: "যামিনী চন্দ্র রায়", enName: "Jamini Chandra Roy", nick: "যামিনী", gender: "Male", color: 0x0055ff, spouse: "FT-101", father: null, mother: null, children: ["FT-102", "FT-012", "FT-106"], description: "" },
    { uid: "FT-101", bnName: "মায়া রানী রায়", enName: "Maya Rani Roy", nick: "মায়া", gender: "Female", color: 0xff1493, spouse: "FT-100", father: null, mother: null, children: ["FT-102", "FT-012", "FT-106"], description: "" },
    { uid: "FT-102", bnName: "মৃণাল চন্দ্র রায়", enName: "Mrinal Chandra Roy", nick: "মৃণাল", gender: "Male", color: 0x0055ff, spouse: "FT-103", father: "FT-100", mother: "FT-101", children: ["FT-104", "FT-105"], description: "" },
    { uid: "FT-103", bnName: "মুক্তি রানী রায়", enName: "Mukti Rani Roy", nick: "মুক্তি", gender: "Female", color: 0xff1493, spouse: "FT-102", father: null, mother: null, children: ["FT-104", "FT-105"], description: "" },
    { uid: "FT-104", bnName: "অভ্র চন্দ্র রায়", enName: "Avro Chandra Roy", nick: "অভ্র", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-102", mother: "FT-103", children: [], description: "" },
    { uid: "FT-105", bnName: "সৃজা মনি রায়", enName: "Srija Moni Roy", nick: "সৃজা", gender: "Female", color: 0xff69b4, spouse: null, father: "FT-102", mother: "FT-103", children: [], description: "" },
    { uid: "FT-106", bnName: "মানিক চন্দ্র রায়", enName: "Manik Chandra Roy", nick: "মানিক", gender: "Male", color: 0x0055ff, spouse: "FT-107", father: "FT-100", mother: "FT-101", children: [], description: "" },
    { uid: "FT-107", bnName: "সঞ্জিতা রানী রায়", enName: "Sanjita Rani Roy", nick: "সঞ্জিতা", gender: "Female", color: 0xff1493, spouse: "FT-106", father: null, mother: null, children: [], description: "" },

    // FT-121 to FT-170
    { uid: "FT-120", bnName: "রাজমোহন", enName: "Rajmohon", nick: "রাজমোহন", gender: "Male", color: 0x0055ff, spouse: null, father: null, mother: null, children: ["FT-122", "FT-124", "FT-126", "FT-128", "FT-130", "FT-132"], description: "" },
    { uid: "FT-122", bnName: "দক্ষিণামোহন", enName: "Dakshinamohan", nick: "দক্ষিণামোহন", gender: "Male", color: 0x0055ff, spouse: null, father: "FT-120", mother: null, children: ["FT-134", "FT-136"], description: "" },
    { uid: "FT-124", bnName: "নবগোপাল", enName: "Nabo Gopal", nick: "নবগোপাল", gender: "Male", color: 0x0055ff, spouse: null, father: "FT-120", mother: null, children: ["FT-138", "FT-143"], description: "" },
    { uid: "FT-126", bnName: "অন্নদামোহন", enName: "Annadamohan", nick: "অন্নদামোহন", gender: "Male", color: 0x0055ff, spouse: null, father: "FT-120", mother: null, children: [], description: "" },
    { uid: "FT-128", bnName: "অম্বিকা", enName: "Ambika", nick: "অম্বিকা", gender: "Male", color: 0x0055ff, spouse: null, father: "FT-120", mother: null, children: ["FT-159"], description: "" },
    { uid: "FT-130", bnName: "মেয়ে ১", enName: "UnKnown Girl 1", nick: "মেয়ে ১", gender: "Female", color: 0xff1493, spouse: null, father: "FT-120", mother: null, children: [], description: "" },
    { uid: "FT-132", bnName: "মেয়ে ২", enName: "UnKnown Girl 2", nick: "মেয়ে ২", gender: "Female", color: 0xff1493, spouse: null, father: "FT-120", mother: null, children: [], description: "" },
    { uid: "FT-134", bnName: "কালিপদ", enName: "Kalipada", nick: "কালিপদ", gender: "Male", color: 0x0055ff, spouse: null, father: "FT-122", mother: null, children: [], description: "" },
    { uid: "FT-136", bnName: "খুকি", enName: "Khuki", nick: "খুকি", gender: "Female", color: 0xff1493, spouse: null, father: "FT-122", mother: null, children: [], description: "তার সম্পূর্ণ পরিবার ভারতে অবস্থান করছে।" },
    { uid: "FT-138", bnName: "বিজয় চন্দ্র রায়", enName: "Bijoy Chandra Roy", nick: "বিজয়", gender: "Male", color: 0x0055ff, spouse: ["FT-139", "FT-140"], father: "FT-124", mother: null, children: ["FT-141"], description: "" },
    { uid: "FT-139", bnName: "সিন্দু রানী রায়", enName: "Shindu Rani Roy", nick: "সিন্দু", gender: "Female", color: 0xff1493, spouse: "FT-138", father: null, mother: null, children: [], description: "১ম স্ত্রী" },
    { uid: "FT-140", bnName: "মালতী রানী রায়", enName: "Malati Rani Roy", nick: "মালতী", gender: "Female", color: 0xff1493, spouse: "FT-138", father: null, mother: null, children: ["FT-141"], description: "২য় স্ত্রী" },
    { uid: "FT-141", bnName: "একান্ত চন্দ্র রায়", enName: "Akanto Chandra Roy", nick: "একান্ত", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-138", mother: "FT-140", children: [], description: "" },
    { uid: "FT-143", bnName: "ননীগোপাল", enName: "Noni Gopal", nick: "ননীগোপাল", gender: "Male", color: 0x0055ff, spouse: "FT-144", father: "FT-124", mother: null, children: ["FT-145", "FT-001"], description: "" },
    { uid: "FT-144", bnName: "মাধবী রানী রায়", enName: "Madhobi Rani Roy", nick: "মাধবী", gender: "Female", color: 0xff1493, spouse: "FT-143", father: null, mother: null, children: ["FT-145", "FT-001"], description: "" },
    { uid: "FT-145", bnName: "মানিক চন্দ্র রায়", enName: "Manik Chandra Roy", nick: "মানিক", gender: "Male", color: 0x0055ff, spouse: "FT-146", father: "FT-143", mother: "FT-144", children: ["FT-147", "FT-148", "FT-149"], description: "" },
    { uid: "FT-146", bnName: "দিনেশ্বরী রানী", enName: "Dineshwari Rani", nick: "দিনেশ্বরী", gender: "Female", color: 0xff1493, spouse: "FT-145", father: null, mother: null, children: ["FT-147", "FT-148", "FT-149"], description: "" },
    { uid: "FT-147", bnName: "রত্না রাণী রায়", enName: "Ratna Rani Roy", nick: "রত্না", gender: "Female", color: 0xff1493, spouse: "FT-150", father: "FT-145", mother: "FT-146", children: ["FT-151", "FT-152"], description: "" },
    { uid: "FT-148", bnName: "স্বপ্না রাণী রায়", enName: "Sopna Rani Roy", nick: "স্বপ্না", gender: "Female", color: 0xff1493, spouse: "FT-153", father: "FT-145", mother: "FT-146", children: ["FT-154", "FT-155"], description: "" },
    { uid: "FT-149", bnName: "মৈত্রী রাণী রায়", enName: "Maitri Rani Roy", nick: "মৈত্রী", gender: "Female", color: 0xff1493, spouse: "FT-156", father: "FT-145", mother: "FT-146", children: ["FT-157"], description: "" },
    { uid: "FT-150", bnName: "রতন চন্দ্র রায়", enName: "Raton Chandra Roy", nick: "রতন", gender: "Male", color: 0x0055ff, spouse: "FT-147", father: null, mother: null, children: ["FT-151", "FT-152"], description: "" },
    { uid: "FT-151", bnName: "পৃথিবী রায়", enName: "Prithibi Roy", nick: "পৃথিবী", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-150", mother: "FT-147", children: [], description: "" },
    { uid: "FT-152", bnName: "রৌদ্র রায়", enName: "Ruddra Roy", nick: "রৌদ্র", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-150", mother: "FT-147", children: [], description: "" },
    { uid: "FT-153", bnName: "সুরেশ চন্দ্র রায়", enName: "Suresh Chandra Roy", nick: "সুরেশ", gender: "Male", color: 0x0055ff, spouse: "FT-148", father: null, mother: null, children: ["FT-154", "FT-155"], description: "" },
    { uid: "FT-154", bnName: "শুরঞ্জনা রানী রায়", enName: "Suranjana Rani Roy", nick: "শুরঞ্জনা", gender: "Female", color: 0xff1493, spouse: null, father: "FT-153", mother: "FT-148", children: [], description: "" },
    { uid: "FT-155", bnName: "স্বপ্নার ছেলে", enName: "Son of Sapna", nick: "স্বপ্নার ছেলে", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-153", mother: "FT-148", children: [], description: "" },
    { uid: "FT-156", bnName: "দেবার্শীষ চন্দ্র রায়", enName: "Debashish Chandra Roy", nick: "দেবার্শীষ", gender: "Male", color: 0x00ccff, spouse: "FT-149", father: null, mother: null, children: ["FT-157"], description: "" },
    { uid: "FT-157", bnName: "অর্ঘ চন্দ্র রায়", enName: "Argho Roy", nick: "অর্ঘ", gender: "Male", color: 0x00ccff, spouse: null, father: null, mother: "FT-149", children: [], description: "" },
    { uid: "FT-159", bnName: "হেমেন চন্দ্র রায়", enName: "Heman Chandra Roy", nick: "হেমেন", gender: "Male", color: 0x0055ff, spouse: null, father: "FT-128", mother: null, children: ["FT-161", "FT-163", "FT-165", "FT-166"], description: "" },
    { uid: "FT-161", bnName: "উত্তম চন্দ্র রায়", enName: "Uttom Chandra Roy", nick: "উত্তম", gender: "Male", color: 0x0055ff, spouse: "FT-162", father: "FT-159", mother: null, children: ["FT-169", "FT-170", "FT-171"], description: "" },
    { uid: "FT-162", bnName: "সুচিত্রা রায়", enName: "Suchitra Roy", nick: "সুচিত্রা", gender: "Female", color: 0xff1493, spouse: "FT-161", father: null, mother: null, children: ["FT-169", "FT-170", "FT-171"], description: "স্বামীর বোন ও তার একই নাম।" },
    { uid: "FT-163", bnName: "সৈত্যান চন্দ্র রায়", enName: "Soityan Chandra Roy", nick: "সৈত্যান", gender: "Male", color: 0x0055ff, spouse: null, father: "FT-159", mother: null, children: [], description: "" },
    { uid: "FT-165", bnName: "সুচিত্রা রানী রায়", enName: "Suchittra Rani Roy", nick: "সুচিত্রা", gender: "Female", color: 0xff1493, spouse: null, father: "FT-159", mother: null, children: ["FT-172"], description: "" },
    { uid: "FT-167", bnName: "সুফলা রানী রায়", enName: "Suphala Rani Roy", nick: "সুফলা", gender: "Female", color: 0xff1493, spouse: null, father: "FT-159", mother: null, children: [], description: "" },
    { uid: "FT-169", bnName: "টুম্পা রানী রায়", enName: "Tumpa Rani Roy", nick: "টুম্পা", gender: "Female", color: 0xff69b4, spouse: null, father: "FT-161", mother: null, children: [], description: "" },
    { uid: "FT-170", bnName: "নুপুর রানী রায়", enName: "Nupur Rani Royy", nick: "নুপুর", gender: "Female", color: 0xff69b4, spouse: null, father: "FT-161", mother: null, children: [], description: "" },
    { uid: "FT-171", bnName: "পায়েল রানী রায়", enName: "Payel Rani Roy", nick: "পায়েল", gender: "Female", color: 0xff69b4, spouse: null, father: "FT-161", mother: null, children: [], description: "" },
    { uid: "FT-172", bnName: "মৌ রানী রায়", enName: "Mou Rani Roy", nick: "মৌ", gender: "Female", color: 0xff69b4, spouse: null, father: null, mother: "FT-165", children: [], description: "" },

    // FT-259 to FT-310
    { uid: "FT-259", bnName: "কানাই চন্দ্র রায়", enName: "Kanai Chandra Roy", nick: "কানাই", gender: "Male", color: 0x0055ff, spouse: "FT-260", father: null, mother: null, children: ["FT-261", "FT-262"], description: "" },
    { uid: "FT-260", bnName: "ঋতুমাযী রানী রায়", enName: "Ritumayee Rani Roy", nick: "ঋতুমাযী", gender: "Female", color: 0xff1493, spouse: "FT-259", father: null, mother: null, children: ["FT-261", "FT-262"], description: "" },
    { uid: "FT-261", bnName: "মনাই চন্দ্র রায়", enName: "Monai Chandra Roy", nick: "মনাই", gender: "Male", color: 0x0055ff, spouse: "FT-263", father: "FT-259", mother: "FT-260", children: ["FT-264", "FT-265", "FT-016"], description: "" },
    { uid: "FT-262", bnName: "বিষ্ণুর দাদু", enName: "Vishnu's grandfather", nick: "বিষ্ণুর দাদু", gender: "Male", color: 0x0055ff, spouse: null, father: "FT-259", mother: "FT-260", children: [], description: "" },
    { uid: "FT-263", bnName: "সুকুময়ী বর্মনী", enName: "Sukumayee Burmani", nick: "সুকুময়ী", gender: "Female", color: 0xff1493, spouse: "FT-261", father: null, mother: null, children: ["FT-264", "FT-265", "FT-016"], description: "" },
    { uid: "FT-264", bnName: "মহিম চন্দ্র রায়", enName: "Mahim Chandra Roy", nick: "মহিম", gender: "Male", color: 0x0055ff, spouse: null, father: "FT-261", mother: "FT-263", children: ["FT-268", "FT-269"], description: "" },
    { uid: "FT-265", bnName: "অক্ষয় চন্দ্র রায়", enName: "Akshay Chandra Roy", nick: "অক্ষয়", gender: "Male", color: 0x0055ff, spouse: "FT-290", father: "FT-261", mother: "FT-263", children: ["FT-291", "FT-292", "FT-293"], description: "" },
    { uid: "FT-268", bnName: "বিনয় চন্দ্র রায়", enName: "Vinoy Chandra Roy", nick: "বিনয়", gender: "Male", color: 0x0055ff, spouse: "FT-271", father: "FT-264", mother: null, children: ["FT-272", "FT-273", "FT-274"], description: "" },
    { uid: "FT-269", bnName: "টুল্লি বালা", enName: "Tulli Bala", nick: "টুল্লি", gender: "Female", color: 0xff1493, spouse: null, father: "FT-264", mother: null, children: [], description: "" },
    { uid: "FT-271", bnName: "স্বরবালা", enName: "Swarbala", nick: "স্বরবালা", gender: "Female", color: 0xff1493, spouse: "FT-268", father: null, mother: null, children: ["FT-272", "FT-273", "FT-274"], description: "" },
    { uid: "FT-272", bnName: "বাদল চন্দ্র রায়", enName: "Badal Chandra Roy", nick: "বাদল", gender: "Male", color: 0x00ccff, spouse: "FT-275", father: "FT-268", mother: "FT-271", children: ["FT-276", "FT-277"], description: "" },
    { uid: "FT-273", bnName: "ভোদল চন্দ্র রায়", enName: "Bhodal Chandra Roy", nick: "ভোদল", gender: "Male", color: 0x00ccff, spouse: "FT-283", father: "FT-268", mother: "FT-271", children: ["FT-284", "FT-285"], description: "" },
    { uid: "FT-274", bnName: "নিমু চন্দ্র রায়", enName: "Nimu Chandra Roy", nick: "নিমু", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-268", mother: "FT-271", children: [], description: "পরিবারসহ ভারতে।" },
    { uid: "FT-275", bnName: "গীতা রানী রায়", enName: "Gita Rani Roy", nick: "গীতা", gender: "Female", color: 0xff1493, spouse: "FT-272", father: null, mother: null, children: ["FT-276", "FT-277"], description: "" },
    { uid: "FT-276", bnName: "ইরান চন্দ্র রায়", enName: "Iran Chandra Roy", nick: "ইরান", gender: "Male", color: 0x3366ff, spouse: null, father: "FT-272", mother: "FT-275", children: [], description: "" },
    { uid: "FT-277", bnName: "আকাশ চন্দ্র রায়", enName: "Akash Chandra Roy", nick: "আকাশ", gender: "Male", color: 0x3366ff, spouse: null, father: "FT-272", mother: "FT-275", children: [], description: "" },
    { uid: "FT-283", bnName: "কল্পনা রানী রায়", enName: "Kalpana Rani Roy", nick: "কল্পনা", gender: "Female", color: 0xff1493, spouse: "FT-273", father: null, mother: null, children: ["FT-284", "FT-285"], description: "" },
    { uid: "FT-284", bnName: "বিদান চন্দ্র রায়", enName: "Bidan Chandra Roy", nick: "বিদান", gender: "Male", color: 0x3366ff, spouse: null, father: "FT-273", mother: "FT-283", children: [], description: "" },
    { uid: "FT-285", bnName: "বিদ্যুৎ চন্দ্র রায়", enName: "Bidyut Chandra Roy", nick: "বিদ্যুৎ", gender: "Male", color: 0x3366ff, spouse: null, father: "FT-273", mother: "FT-283", children: [], description: "" },
    { uid: "FT-290", bnName: "ব্রজবালা", enName: "Vrajbala", nick: "ব্রজবালা", gender: "Female", color: 0xff1493, spouse: "FT-265", father: null, mother: null, children: ["FT-291", "FT-292", "FT-293"], description: "" },
    { uid: "FT-291", bnName: "শ্যামলী রানী", enName: "Shyamli Rani", nick: "শ্যামলী", gender: "Female", color: 0xff1493, spouse: "FT-295", father: "FT-265", mother: "FT-290", children: ["FT-296", "FT-297", "FT-298"], description: "" },
    { uid: "FT-292", bnName: "অমল চন্দ্র রায়", enName: "Amal Chandra Roy", nick: "অমল", gender: "Female", color: 0xff1493, spouse: null, father: "FT-265", mother: "FT-290", children: [], description: "" },
    { uid: "FT-293", bnName: "অপূর্ব চন্দ্র রায়", enName: "Apurba Chandra Roy", nick: "অপূর্ব", gender: "Male", color: 0x0055ff, spouse: "FT-294", father: "FT-265", mother: "FT-290", children: ["FT-304", "FT-308"], description: "" },
    { uid: "FT-294", bnName: "শান্তি রানী", enName: "Shanti Rani", nick: "শান্তি", gender: "Female", color: 0xff1493, spouse: "FT-293", father: null, mother: null, children: ["FT-304", "FT-308"], description: "" },
    { uid: "FT-295", bnName: "মনভোলা", enName: "Manabhola", nick: "মনভোলা", gender: "Male", color: 0x0055ff, spouse: "FT-291", father: null, mother: null, children: ["FT-296", "FT-297", "FT-298"], description: "" },
    { uid: "FT-296", bnName: "হিমু", enName: "Himu", nick: "হিমু", gender: "Male", color: 0x00ccff, spouse: null, father: "FT-295", mother: "FT-291", children: [], description: "" },
    { uid: "FT-297", bnName: "নিলী রানী রায়", enName: "Nili Rani Roy", nick: "নিলী", gender: "Female", color: 0xff69b4, spouse: null, father: "FT-295", mother: "FT-291", children: [], description: "" },
    { uid: "FT-298", bnName: "গিতু রানী রায়", enName: "Gitu Rani Roy", nick: "গিতু", gender: "Female", color: 0xff69b4, spouse: null, father: "FT-295", mother: "FT-291", children: [], description: "" },
    { uid: "FT-304", bnName: "জাপান চন্দ্র রায়", enName: "Japan Chandra Roy", nick: "জাপান", gender: "Male", color: 0x00ccff, spouse: "FT-305", father: "FT-293", mother: "FT-294", children: ["FT-306"], description: "" },
    { uid: "FT-305", bnName: "রাধিকা রানী রায়", enName: "Radhika Rani Roy", nick: "রাধিকা", gender: "Female", color: 0xff1493, spouse: "FT-304", father: null, mother: null, children: ["FT-306"], description: "" },
    { uid: "FT-306", bnName: "সেজুতি রানী রায়", enName: "Sejuti Rani Roy", nick: "সেজুতি", gender: "Female", color: 0xff69b4, spouse: null, father: "FT-304", mother: "FT-305", children: [], description: "" },
    { uid: "FT-308", bnName: "জার্মান চন্দ্র রায়", enName: "German Chandra Roy", nick: "জার্মান", gender: "Male", color: 0x00ccff, spouse: "FT-309", father: "FT-293", mother: "FT-294", children: ["FT-310"], description: "" },
    { uid: "FT-309", bnName: "কলি রানী রায়", enName: "Koli Rani Roy", nick: "কলি", gender: "Female", color: 0xff1493, spouse: "FT-308", father: null, mother: null, children: ["FT-310"], description: "" },
    { uid: "FT-310", bnName: "মাধুর্য চন্দ্র রায়", enName: "Madhurya Chandra Roy", nick: "মাধুর্য", gender: "Male", color: 0x3366ff, spouse: null, father: "FT-308", mother: "FT-309", children: [], description: "" }
];

// জেনারেশন স্বয়ংক্রিয়ভাবে হিসাব করার হেল্পার ফাংশন
function processMembersData(data) {
    const memberDict = {};
    data.forEach(m => { memberDict[m.uid] = m; });

    function getPaternalGen(uid, visited = new Set()) {
        if (visited.has(uid)) return 1;
        visited.add(uid);
        const m = memberDict[uid];
        if (!m) return 1;

        if (m.father) return getPaternalGen(m.father, new Set(visited)) + 1;
        if (m.spouse) {
            const spouseUid = Array.isArray(m.spouse) ? m.spouse[0] : m.spouse;
            if (memberDict[spouseUid] && memberDict[spouseUid].father) return getPaternalGen(spouseUid, new Set(visited));
        }
        return 1;
    }

    function getMaternalGen(uid, visited = new Set()) {
        if (visited.has(uid)) return 1;
        visited.add(uid);
        const m = memberDict[uid];
        if (!m) return 1;

        if (m.mother) return getMaternalGen(m.mother, new Set(visited)) + 1;
        if (m.spouse) {
            const spouseUid = Array.isArray(m.spouse) ? m.spouse[0] : m.spouse;
            if (memberDict[spouseUid] && memberDict[spouseUid].mother) return getMaternalGen(spouseUid, new Set(visited));
        }
        return 1;
    }

    data.forEach(m => {
        m.patrilinealGen = getPaternalGen(m.uid);
        m.matrilinealGen = getMaternalGen(m.uid);
        m.generation = Math.max(m.patrilinealGen, m.matrilinealGen);
    });

    return data;
}

// প্রসেস করা membersData এক্সপোর্ট করা হলো
export const membersData = processMembersData(rawMembersData);
