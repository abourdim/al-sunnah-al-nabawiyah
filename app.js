/* السنة النبوية بين أهل الفقه وأهل الحديث — app.js */
/* Based on the book by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'السنة النبوية',
    splashSub: 'بين أهل الفقه وأهل الحديث',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الحشر ٥٩: ٧',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabReflections: 'تأملات',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات الحديث والفقه',
    cardsDesc: '٢٠ بطاقة تجمع بين فهم الحديث وتطبيقه الفقهي — بلغة بسيطة للجميع',
    reflectionsTitle: 'تأملات في فهم السنة',
    reflectionsDesc: 'كيف نفهم السنة النبوية في سياقها الصحيح',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات مستوحاة من السنة — تتبّع تقدمك يومياً',
    quizTitle: 'اختبر فهمك',
    quizDesc: 'هل تفهم السنة كما ينبغي؟ أجب بصدق',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية من السنة',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ فكرة اليوم',
    quizAgain: 'أعد الاختبار',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    problem: '⚠️ الفهم الخاطئ',
    solution: '✅ الفهم الصحيح',
    fiqh: 'الفقه',
    hadith: 'الحديث',
    splashFeatures: [
      '٢٠ بطاقة عن فهم السنة النبوية',
      'تأملات في العلاقة بين الحديث والفقه',
      'عادات يومية من السنة',
      'اختبار ذاتي + أدعية نبوية'
    ],
  },
  en: {
    appTitle: 'Prophetic Sunnah',
    splashSub: 'Between Jurists and Hadith Scholars',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Hashr 59:7',
    tabHome: 'Home', tabCards: 'Cards', tabReflections: 'Reflections',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Hadith & Fiqh Cards',
    cardsDesc: '20 cards combining hadith understanding with jurisprudential application — in simple language for everyone',
    reflectionsTitle: 'Reflections on Understanding Sunnah',
    reflectionsDesc: 'How to understand the Prophetic Sunnah in its proper context',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits inspired by the Sunnah — track your daily progress',
    quizTitle: 'Test Your Understanding',
    quizDesc: 'Do you understand the Sunnah properly? Answer honestly',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas from the Sunnah',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Insight',
    quizAgain: 'Retake Quiz',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    problem: '⚠️ Common Misunderstanding',
    solution: '✅ Correct Understanding',
    fiqh: 'Fiqh',
    hadith: 'Hadith',
    splashFeatures: [
      '20 cards on understanding the Prophetic Sunnah',
      'Reflections on the relationship between hadith and fiqh',
      'Daily Sunnah-based habits with tracking',
      'Self-quiz + Prophetic duas'
    ],
  },
  fr: {
    appTitle: 'La Sunna Prophétique',
    splashSub: 'Entre juristes et spécialistes du Hadith',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Hashr 59:7',
    tabHome: 'Accueil', tabCards: 'Cartes', tabReflections: 'Réflexions',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Cartes Hadith et Fiqh',
    cardsDesc: '20 cartes combinant compréhension du hadith et application juridique — en langage simple pour tous',
    reflectionsTitle: 'Réflexions sur la Compréhension de la Sunna',
    reflectionsDesc: 'Comment comprendre la Sunna prophétique dans son contexte approprié',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes inspirées de la Sunna — suivez vos progrès',
    quizTitle: 'Testez Votre Compréhension',
    quizDesc: 'Comprenez-vous la Sunna correctement ? Répondez honnêtement',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas de la Sunna',
    resetBtn: 'Réinitialiser',
    submitQuiz: 'Voir les Résultats',
    dailyLabel: '✨ Pensée du Jour',
    quizAgain: 'Refaire le Quiz',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    streakMsg: 'jours consécutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    problem: '⚠️ Malentendu Courant',
    solution: '✅ Compréhension Correcte',
    fiqh: 'Fiqh',
    hadith: 'Hadith',
    splashFeatures: [
      '20 cartes sur la compréhension de la Sunna',
      'Réflexions sur la relation hadith-fiqh',
      'Habitudes quotidiennes avec suivi',
      'Quiz + duas prophétiques'
    ],
  }
};

// ═══════════════ CARDS DATA (20 cards) ═══════════════
const CARDS = [
  {
    id:1, emoji:'📖',
    ar:{title:'السنة والقرآن متكاملان',desc:'السنة شارحة للقرآن ومبيّنة لأحكامه. لا يمكن فهم القرآن بمعزل عن السنة، ولا السنة بمعزل عن القرآن.',hadith:'قال ﷺ: "ألا إني أوتيتُ الكتاب ومثله معه"',fiqh:'الفقهاء يربطون كل حكم بالقرآن والسنة معاً لفهم شامل',action:'اقرأ آية اليوم وابحث عن الأحاديث التي تشرحها'},
    en:{title:'Sunnah and Quran Are Complementary',desc:'The Sunnah explains and clarifies Quranic rulings. Neither can be properly understood in isolation from the other.',hadith:'The Prophet said: "I was given the Book and its equivalent with it"',fiqh:'Jurists link every ruling to both Quran and Sunnah for comprehensive understanding',action:'Read a verse today and search for hadiths that explain it'},
    fr:{title:'Sunna et Coran Sont Complémentaires',desc:'La Sunna explique et clarifie les jugements coraniques. Ni l\'un ni l\'autre ne peut être compris isolément.',hadith:'Le Prophète a dit : « On m\'a donné le Livre et son équivalent avec lui »',fiqh:'Les juristes lient chaque règle au Coran et à la Sunna pour une compréhension globale',action:'Lisez un verset aujourd\'hui et cherchez les hadiths qui l\'expliquent'}
  },
  {
    id:2, emoji:'🔍',
    ar:{title:'فهم الحديث في سياقه',desc:'الحديث يجب أن يُفهم في سياقه التاريخي والموضوعي. أخذ الحديث بمعزل عن سياقه يؤدي إلى فهم خاطئ.',hadith:'كثير من الأحاديث قيلت في مناسبات معينة ولأسباب محددة',fiqh:'الفقيه الحقيقي ينظر في أسباب ورود الحديث كما ينظر في أسباب نزول الآيات',action:'عندما تقرأ حديثاً، اسأل: متى قيل؟ لمن؟ وفي أي ظرف؟'},
    en:{title:'Understanding Hadith in Context',desc:'A hadith must be understood in its historical and thematic context. Taking hadiths out of context leads to misunderstanding.',hadith:'Many hadiths were spoken on specific occasions for specific reasons',fiqh:'A true jurist examines the circumstances of a hadith just as they examine the reasons for Quranic revelation',action:'When you read a hadith, ask: when was it said? To whom? Under what circumstances?'},
    fr:{title:'Comprendre le Hadith dans son Contexte',desc:'Un hadith doit être compris dans son contexte historique et thématique. Le sortir de son contexte mène à des malentendus.',hadith:'Beaucoup de hadiths ont été prononcés à des occasions spécifiques pour des raisons précises',fiqh:'Un vrai juriste examine les circonstances du hadith comme il examine les raisons de la révélation coranique',action:'Quand vous lisez un hadith, demandez : quand a-t-il été dit ? À qui ? Dans quelles circonstances ?'}
  },
  {
    id:3, emoji:'⚖️',
    ar:{title:'ليس كل صحيح يُعمل به على ظاهره',desc:'صحة السند لا تعني بالضرورة أن الحديث يُطبق حرفياً. قد يكون الحديث صحيحاً لكنه خاص بزمان أو مكان معين.',hadith:'بعض الأحاديث الصحيحة منسوخة أو مقيدة بأحاديث أخرى',fiqh:'الفقهاء يجمعون بين الأحاديث ولا يأخذون حديثاً واحداً بمعزل عن غيره',action:'تعلّم الفرق بين العام والخاص والمطلق والمقيد في الحديث'},
    en:{title:'Not Every Authentic Hadith Is Taken Literally',desc:'Authenticity of the chain does not necessarily mean the hadith is applied literally. A hadith may be authentic but specific to a time or place.',hadith:'Some authentic hadiths are abrogated or restricted by other hadiths',fiqh:'Jurists reconcile hadiths and never take a single hadith in isolation from others',action:'Learn the difference between general and specific, absolute and restricted in hadith'},
    fr:{title:'Tout Hadith Authentique N\'est Pas Pris Littéralement',desc:'L\'authenticité de la chaîne ne signifie pas nécessairement que le hadith s\'applique littéralement. Un hadith peut être authentique mais spécifique à une époque.',hadith:'Certains hadiths authentiques sont abrogés ou restreints par d\'autres hadiths',fiqh:'Les juristes conclient les hadiths et ne prennent jamais un hadith isolément',action:'Apprenez la différence entre le général et le spécifique dans le hadith'}
  },
  {
    id:4, emoji:'🧠',
    ar:{title:'العقل والنقل لا يتعارضان',desc:'الإسلام دين العقل والنقل معاً. إذا بدا تعارض بين حديث والعقل، فالمشكلة في فهمنا لا في الدين.',hadith:'النبي ﷺ كان يشجع الصحابة على التفكير والاجتهاد',fiqh:'كبار الفقهاء كأبي حنيفة استخدموا العقل والقياس إلى جانب النصوص',action:'عندما تسمع حديثاً يبدو غريباً، ابحث عن شرحه قبل أن ترفضه أو تسيء فهمه'},
    en:{title:'Reason and Revelation Do Not Contradict',desc:'Islam is a religion of both reason and revelation. If there seems to be a contradiction between a hadith and reason, the problem is in our understanding, not in the religion.',hadith:'The Prophet encouraged the Companions to think and exercise independent reasoning',fiqh:'Great jurists like Abu Hanifa used reason and analogy alongside textual evidence',action:'When you hear a hadith that seems strange, research its explanation before rejecting or misunderstanding it'},
    fr:{title:'Raison et Révélation Ne Se Contredisent Pas',desc:'L\'Islam est une religion de raison et de révélation. S\'il semble y avoir contradiction entre un hadith et la raison, le problème est dans notre compréhension.',hadith:'Le Prophète encourageait les Compagnons à réfléchir et à exercer leur jugement',fiqh:'Les grands juristes comme Abu Hanifa utilisaient la raison et l\'analogie aux côtés des textes',action:'Quand vous entendez un hadith qui semble étrange, recherchez son explication avant de le rejeter'}
  },
  {
    id:5, emoji:'📚',
    ar:{title:'تصنيف الحديث علم دقيق',desc:'علم الحديث له قواعد صارمة في التصحيح والتضعيف. ليس كل ما نُسب للنبي ﷺ صحيح، ولذلك وُضعت قواعد علمية دقيقة.',hadith:'العلماء صنّفوا الحديث إلى صحيح وحسن وضعيف وموضوع',fiqh:'الفقيه يبني أحكامه على الأحاديث الصحيحة والحسنة ويحذر من الضعيفة',action:'تعلّم أساسيات مصطلح الحديث: ما معنى صحيح وحسن وضعيف وموضوع؟'},
    en:{title:'Hadith Classification Is a Precise Science',desc:'The science of hadith has strict rules for authentication and weakening. Not everything attributed to the Prophet is authentic, which is why rigorous scholarly rules were established.',hadith:'Scholars classified hadiths into: authentic (sahih), good (hasan), weak (da\'if), and fabricated (mawdu\')',fiqh:'A jurist builds rulings on authentic and good hadiths and is cautious with weak ones',action:'Learn the basics of hadith terminology: what do sahih, hasan, da\'if, and mawdu\' mean?'},
    fr:{title:'La Classification du Hadith Est une Science Précise',desc:'La science du hadith a des règles strictes d\'authentification. Tout ce qui est attribué au Prophète n\'est pas authentique, d\'où l\'établissement de règles rigoureuses.',hadith:'Les savants ont classé les hadiths en : authentique (sahih), bon (hasan), faible (da\'if) et fabriqué (mawdu\')',fiqh:'Un juriste fonde ses jugements sur les hadiths authentiques et bons, et se méfie des faibles',action:'Apprenez les bases de la terminologie du hadith : que signifient sahih, hasan, da\'if et mawdu\' ?'}
  },
  {
    id:6, emoji:'🌍',
    ar:{title:'الحديث ومقاصد الشريعة',desc:'فهم الحديث يجب أن يكون في إطار مقاصد الشريعة الكبرى: حفظ الدين والنفس والعقل والنسل والمال.',hadith:'أحاديث كثيرة تؤكد على حماية هذه المقاصد الخمسة',fiqh:'الفقيه الحكيم يربط الحديث بالمقصد الشرعي الأعلى',action:'عندما تدرس حديثاً، فكّر: أي مقصد من مقاصد الشريعة يخدمه؟'},
    en:{title:'Hadith and the Objectives of Islamic Law',desc:'Understanding hadith must be within the framework of the higher objectives of Islamic law: preserving religion, life, intellect, lineage, and wealth.',hadith:'Many hadiths emphasize protecting these five objectives',fiqh:'A wise jurist connects each hadith to the higher legislative purpose',action:'When studying a hadith, think: which objective of Islamic law does it serve?'},
    fr:{title:'Le Hadith et les Objectifs de la Loi Islamique',desc:'La compréhension du hadith doit s\'inscrire dans le cadre des objectifs supérieurs de la loi islamique : préserver la religion, la vie, l\'intellect, la lignée et les biens.',hadith:'De nombreux hadiths soulignent la protection de ces cinq objectifs',fiqh:'Un juriste sage relie chaque hadith à l\'objectif législatif supérieur',action:'En étudiant un hadith, demandez-vous : quel objectif de la loi islamique sert-il ?'}
  },
  {
    id:7, emoji:'🤔',
    ar:{title:'الحديث الآحاد والمتواتر',desc:'الأحاديث المتواترة قطعية الثبوت، أما أحاديث الآحاد فظنية. هذا لا يعني رفض أحاديث الآحاد بل يعني ترتيب الاستدلال بها.',hadith:'المتواتر ما رواه جمع كبير يستحيل تواطؤهم على الكذب',fiqh:'الفقهاء يميّزون بين القطعي والظني في بناء الأحكام',action:'تعرّف على أمثلة للأحاديث المتواترة وأحاديث الآحاد'},
    en:{title:'Single-Chain vs. Mass-Transmitted Hadiths',desc:'Mass-transmitted (mutawatir) hadiths are certain in their attribution, while single-chain (ahad) hadiths are probabilistic. This does not mean rejecting ahad hadiths, but ranking them properly.',hadith:'Mutawatir is what was narrated by such a large number that collusion on a lie is impossible',fiqh:'Jurists distinguish between definitive and probabilistic evidence in building rulings',action:'Learn examples of mutawatir and ahad hadiths'},
    fr:{title:'Hadiths à Chaîne Unique vs. Transmis en Masse',desc:'Les hadiths transmis en masse (mutawatir) sont certains, tandis que ceux à chaîne unique (ahad) sont probabilistes. Cela ne signifie pas rejeter les ahad, mais les classer correctement.',hadith:'Le mutawatir est ce qui a été rapporté par un si grand nombre que la collusion sur un mensonge est impossible',fiqh:'Les juristes distinguent entre preuve définitive et probabiliste dans l\'élaboration des règles',action:'Apprenez des exemples de hadiths mutawatir et ahad'}
  },
  {
    id:8, emoji:'🔗',
    ar:{title:'لا تضرب السنة بالسنة',desc:'بعض الناس يأخذون حديثاً ويعارضون به حديثاً آخر. الصواب هو الجمع بين الأحاديث لا التعارض بينها.',hadith:'ما جاء عن النبي ﷺ كله متسق إذا فُهم في إطاره الصحيح',fiqh:'منهج الجمع بين الأدلة أولى من منهج الترجيح عند الإمكان',action:'عندما تجد حديثين يبدوان متعارضين، ابحث عن وجه الجمع بينهما'},
    en:{title:'Do Not Pit Sunnah Against Sunnah',desc:'Some people take one hadith and oppose it with another. The correct approach is to reconcile hadiths, not set them against each other.',hadith:'Everything from the Prophet is consistent when understood in its proper framework',fiqh:'The method of reconciliation takes priority over the method of preference when possible',action:'When you find two hadiths that seem contradictory, search for a way to reconcile them'},
    fr:{title:'Ne Pas Opposer la Sunna à la Sunna',desc:'Certains prennent un hadith pour s\'opposer à un autre. La bonne approche est de concilier les hadiths, pas de les opposer.',hadith:'Tout ce qui vient du Prophète est cohérent quand il est compris dans son cadre approprié',fiqh:'La méthode de conciliation prime sur celle de préférence quand c\'est possible',action:'Quand vous trouvez deux hadiths apparemment contradictoires, cherchez comment les concilier'}
  },
  {
    id:9, emoji:'🏛️',
    ar:{title:'المذاهب الفقهية رحمة',desc:'اختلاف المذاهب الأربعة ليس فُرقة بل رحمة وسعة. كل مذهب بنى فهمه على أدلة صحيحة ومنهج معتبر.',hadith:'قال ﷺ: "اختلاف أمتي رحمة" — وإن كان في سنده مقال، فمعناه صحيح',fiqh:'الأئمة الأربعة احترم كل منهم الآخر رغم اختلافهم في بعض المسائل',action:'اقرأ عن سيرة أحد الأئمة الأربعة اليوم وتعلّم من أدبه مع المخالفين'},
    en:{title:'The Schools of Jurisprudence Are a Mercy',desc:'The differences between the four schools are not division but mercy and breadth. Each school built its understanding on valid evidence and respected methodology.',hadith:'The Prophet said: "The disagreement of my ummah is a mercy" — even if its chain is discussed, its meaning is sound',fiqh:'The four imams respected each other despite differing on some issues',action:'Read about one of the four imams today and learn from their etiquette with those who disagreed'},
    fr:{title:'Les Écoles Juridiques Sont une Miséricorde',desc:'Les différences entre les quatre écoles ne sont pas une division mais une miséricorde et une largesse. Chaque école a fondé sa compréhension sur des preuves valides.',hadith:'Le Prophète a dit : « Le désaccord de ma communauté est une miséricorde »',fiqh:'Les quatre imams se respectaient mutuellement malgré leurs divergences sur certaines questions',action:'Lisez sur l\'un des quatre imams aujourd\'hui et apprenez de son éthique avec ceux qui divergeaient'}
  },
  {
    id:10, emoji:'⚠️',
    ar:{title:'سوء استخدام الحديث',desc:'أخطر ما يهدد السنة هو سوء استخدامها: اقتطاع الحديث من سياقه، أو تأويله لخدمة أهداف سياسية أو شخصية.',hadith:'بعض الناس يستدلون بأحاديث في غير موضعها لتبرير مواقف خاطئة',fiqh:'الفقيه الأمين لا يُسخّر الحديث لخدمة هوى بل يخضع لما يقتضيه الدليل',action:'كن حذراً عندما يستخدم أحد حديثاً لتبرير موقف متطرف — تحقق من السياق'},
    en:{title:'Misuse of Hadith',desc:'The greatest threat to the Sunnah is its misuse: taking hadiths out of context, or interpreting them to serve political or personal agendas.',hadith:'Some people cite hadiths out of place to justify wrong positions',fiqh:'An honest jurist does not manipulate hadith to serve desires but submits to what the evidence requires',action:'Be cautious when someone uses a hadith to justify an extreme position — verify the context'},
    fr:{title:'Mauvais Usage du Hadith',desc:'La plus grande menace pour la Sunna est son mauvais usage : sortir les hadiths de leur contexte, ou les interpréter pour servir des agendas politiques ou personnels.',hadith:'Certains citent des hadiths hors de leur contexte pour justifier des positions erronées',fiqh:'Un juriste honnête ne manipule pas le hadith pour servir des désirs mais se soumet à ce que la preuve exige',action:'Soyez prudent quand quelqu\'un utilise un hadith pour justifier une position extrême — vérifiez le contexte'}
  },
  {
    id:11, emoji:'🌱',
    ar:{title:'السنة الفعلية والقولية',desc:'السنة ليست فقط ما قاله النبي ﷺ بل تشمل أفعاله وتقريراته. أحياناً الفعل النبوي يوضح القول أو يقيّده.',hadith:'أفعال النبي ﷺ تبيّن كيفية تطبيق الأحكام عملياً',fiqh:'الفقهاء يميّزون بين ما فعله النبي ﷺ تعبداً وما فعله عادة بشرية',action:'ابحث عن حديث فعلي يوضح حديثاً قولياً وتأمل في العلاقة بينهما'},
    en:{title:'Verbal and Practical Sunnah',desc:'The Sunnah includes not only what the Prophet said but also his actions and approvals. Sometimes his actions explain or restrict his sayings.',hadith:'The Prophet\'s actions demonstrate how to practically apply rulings',fiqh:'Jurists distinguish between what the Prophet did as worship and what he did as human habit',action:'Search for a practical hadith that clarifies a verbal one and reflect on their relationship'},
    fr:{title:'Sunna Verbale et Pratique',desc:'La Sunna comprend non seulement ce que le Prophète a dit mais aussi ses actes et approbations. Parfois ses actes expliquent ou restreignent ses paroles.',hadith:'Les actes du Prophète montrent comment appliquer pratiquement les règles',fiqh:'Les juristes distinguent entre ce que le Prophète a fait comme adoration et comme habitude humaine',action:'Cherchez un hadith pratique qui clarifie un hadith verbal et réfléchissez à leur relation'}
  },
  {
    id:12, emoji:'🎯',
    ar:{title:'التمييز بين الثابت والمتغير',desc:'في السنة ثوابت لا تتغير وأمور تخضع للاجتهاد بحسب الزمان والمكان. الحكمة في التفريق بينهما.',hadith:'النبي ﷺ نفسه تعامل مع المواقف المختلفة بأساليب مختلفة',fiqh:'الفقيه يميّز بين المقاصد الثابتة والوسائل المتغيرة',action:'فكّر في سنة تطبيقها يختلف بحسب الزمان والمكان — ما المقصد الثابت وراءها؟'},
    en:{title:'Distinguishing the Fixed from the Variable',desc:'In the Sunnah there are constants that do not change and matters subject to scholarly reasoning according to time and place. Wisdom lies in distinguishing between them.',hadith:'The Prophet himself dealt with different situations using different approaches',fiqh:'A jurist distinguishes between fixed objectives and variable means',action:'Think of a sunnah whose application varies by time and place — what is the fixed objective behind it?'},
    fr:{title:'Distinguer le Fixe du Variable',desc:'Dans la Sunna, il y a des constantes qui ne changent pas et des questions soumises au raisonnement selon le temps et le lieu. La sagesse est de distinguer entre les deux.',hadith:'Le Prophète lui-même traitait différentes situations avec différentes approches',fiqh:'Un juriste distingue entre les objectifs fixes et les moyens variables',action:'Pensez à une sunna dont l\'application varie selon le temps et le lieu — quel est l\'objectif fixe derrière ?'}
  },
  {
    id:13, emoji:'💡',
    ar:{title:'الفهم الحرفي ليس دائماً الأصح',desc:'بعض الناس يتمسكون بظاهر النص دون فهم المعنى والمقصد. الشيخ الغزالي يحذر من الحرفية التي تقتل روح النص.',hadith:'النبي ﷺ استخدم التشبيه والمجاز والكناية في كلامه',fiqh:'كبار العلماء كالإمام الشافعي اعتمدوا على فهم المعنى لا مجرد الظاهر',action:'اقرأ حديثاً اليوم وفكّر: هل المعنى الظاهر هو المقصود أم هناك معنى أعمق؟'},
    en:{title:'The Literal Understanding Is Not Always Correct',desc:'Some people cling to the apparent text without understanding the meaning and purpose. Sheikh al-Ghazali warns against literalism that kills the spirit of the text.',hadith:'The Prophet used simile, metaphor, and figurative language in his speech',fiqh:'Great scholars like Imam al-Shafi\'i relied on understanding meaning, not just the apparent text',action:'Read a hadith today and think: is the apparent meaning the intended one or is there a deeper meaning?'},
    fr:{title:'La Compréhension Littérale N\'est Pas Toujours la Plus Correcte',desc:'Certains s\'accrochent au texte apparent sans comprendre le sens et l\'objectif. Sheikh al-Ghazali met en garde contre le littéralisme qui tue l\'esprit du texte.',hadith:'Le Prophète utilisait la comparaison, la métaphore et le langage figuré dans ses paroles',fiqh:'Les grands savants comme l\'Imam al-Shafi\'i s\'appuyaient sur la compréhension du sens, pas seulement le texte apparent',action:'Lisez un hadith aujourd\'hui et demandez-vous : le sens apparent est-il le sens voulu ou y a-t-il un sens plus profond ?'}
  },
  {
    id:14, emoji:'🤝',
    ar:{title:'أدب الاختلاف',desc:'الاختلاف في فهم الحديث أمر طبيعي وصحي. المهم هو أدب الاختلاف واحترام الرأي الآخر.',hadith:'الصحابة أنفسهم اختلفوا في فهم بعض الأحاديث والنبي ﷺ أقرّ ذلك',fiqh:'أدب الخلاف من أرقى الآداب الإسلامية — اختلف مع الرأي لا مع صاحبه',action:'عندما تختلف مع أحد في مسألة دينية، احترم رأيه وناقشه بأدب'},
    en:{title:'The Etiquette of Disagreement',desc:'Disagreeing on the understanding of hadith is natural and healthy. What matters is the etiquette of disagreement and respecting other opinions.',hadith:'The Companions themselves differed on understanding some hadiths and the Prophet approved of this',fiqh:'The etiquette of disagreement is among the highest Islamic manners — disagree with the opinion, not the person',action:'When you disagree with someone on a religious matter, respect their opinion and discuss politely'},
    fr:{title:'L\'Étiquette du Désaccord',desc:'Le désaccord sur la compréhension du hadith est naturel et sain. Ce qui compte, c\'est l\'étiquette du désaccord et le respect des autres opinions.',hadith:'Les Compagnons eux-mêmes différaient sur la compréhension de certains hadiths et le Prophète l\'approuvait',fiqh:'L\'étiquette du désaccord est parmi les plus hautes manières islamiques — désaccord avec l\'opinion, pas la personne',action:'Quand vous n\'êtes pas d\'accord avec quelqu\'un sur une question religieuse, respectez son opinion et discutez poliment'}
  },
  {
    id:15, emoji:'🛡️',
    ar:{title:'الحديث الموضوع خطر',desc:'الأحاديث المكذوبة على النبي ﷺ من أخطر ما يهدد الدين. يجب التحقق من كل حديث قبل نشره.',hadith:'قال ﷺ: "من كذب عليّ متعمداً فليتبوأ مقعده من النار"',fiqh:'العلماء وضعوا علم الجرح والتعديل لحماية السنة من الكذب',action:'قبل أن تنشر أي حديث، تحقق من صحته في المصادر الموثوقة'},
    en:{title:'Fabricated Hadiths Are Dangerous',desc:'Hadiths falsely attributed to the Prophet are among the greatest threats to the religion. Every hadith must be verified before sharing.',hadith:'The Prophet said: "Whoever deliberately lies about me, let him take his seat in Hellfire"',fiqh:'Scholars developed the science of narrator evaluation (jarh wa ta\'dil) to protect the Sunnah from lies',action:'Before sharing any hadith, verify its authenticity in reliable sources'},
    fr:{title:'Les Hadiths Fabriqués Sont Dangereux',desc:'Les hadiths faussement attribués au Prophète sont parmi les plus grandes menaces pour la religion. Chaque hadith doit être vérifié avant d\'être partagé.',hadith:'Le Prophète a dit : « Quiconque ment délibérément à mon sujet, qu\'il prenne sa place en Enfer »',fiqh:'Les savants ont développé la science d\'évaluation des narrateurs (jarh wa ta\'dil) pour protéger la Sunna',action:'Avant de partager un hadith, vérifiez son authenticité dans des sources fiables'}
  },
  {
    id:16, emoji:'🌟',
    ar:{title:'روح السنة لا حرفها فقط',desc:'المهم هو استيعاب روح السنة ومقاصدها، لا مجرد التمسك بالشكل الخارجي. السنة جاءت لتحقيق مصالح العباد.',hadith:'النبي ﷺ كان يراعي أحوال الناس ويتعامل مع كل موقف بحكمة',fiqh:'الفقيه الحق يبحث عن المقصد والحكمة من وراء كل حكم',action:'اسأل نفسك اليوم: هل أطبق السنة شكلاً فقط أم روحاً ومضموناً؟'},
    en:{title:'The Spirit of the Sunnah, Not Just Its Letter',desc:'What matters is grasping the spirit and objectives of the Sunnah, not merely clinging to its external form. The Sunnah came to serve people\'s interests.',hadith:'The Prophet considered people\'s circumstances and dealt with each situation wisely',fiqh:'A true jurist searches for the purpose and wisdom behind every ruling',action:'Ask yourself today: am I applying the Sunnah in form only, or in spirit and substance?'},
    fr:{title:'L\'Esprit de la Sunna, Pas Seulement Sa Lettre',desc:'L\'important est de saisir l\'esprit et les objectifs de la Sunna, pas de s\'accrocher uniquement à sa forme extérieure. La Sunna est venue pour servir les intérêts des gens.',hadith:'Le Prophète tenait compte des circonstances des gens et traitait chaque situation avec sagesse',fiqh:'Un vrai juriste cherche le but et la sagesse derrière chaque règle',action:'Demandez-vous aujourd\'hui : est-ce que j\'applique la Sunna dans la forme seulement, ou dans l\'esprit et le contenu ?'}
  },
  {
    id:17, emoji:'📜',
    ar:{title:'الناسخ والمنسوخ',desc:'بعض الأحكام النبوية نُسخت بأحكام لاحقة. فهم النسخ ضروري لتجنب العمل بحكم منسوخ.',hadith:'بعض الأحاديث المتقدمة نُسخت بأحاديث متأخرة أو بآيات قرآنية',fiqh:'الفقيه يعرف تاريخ الأحاديث ليميّز الناسخ من المنسوخ',action:'تعلّم أمثلة على النسخ في السنة وكيف يؤثر على الأحكام'},
    en:{title:'Abrogating and Abrogated Rulings',desc:'Some Prophetic rulings were abrogated by later ones. Understanding abrogation is essential to avoid acting on an abrogated ruling.',hadith:'Some earlier hadiths were abrogated by later hadiths or Quranic verses',fiqh:'A jurist knows the chronology of hadiths to distinguish the abrogating from the abrogated',action:'Learn examples of abrogation in the Sunnah and how it affects rulings'},
    fr:{title:'Règles Abrogeantes et Abrogées',desc:'Certaines règles prophétiques ont été abrogées par des règles ultérieures. Comprendre l\'abrogation est essentiel pour éviter d\'agir selon une règle abrogée.',hadith:'Certains hadiths antérieurs ont été abrogés par des hadiths ultérieurs ou des versets coraniques',fiqh:'Un juriste connaît la chronologie des hadiths pour distinguer l\'abrogeant de l\'abrogé',action:'Apprenez des exemples d\'abrogation dans la Sunna et comment cela affecte les règles'}
  },
  {
    id:18, emoji:'🕊️',
    ar:{title:'السنة والتسامح',desc:'السنة النبوية تدعو إلى التسامح والرحمة. من يستخدم السنة لنشر التشدد والكراهية يخالف مقصدها.',hadith:'قال ﷺ: "إنما بُعثت لأتمم مكارم الأخلاق"',fiqh:'الفقه الحقيقي يبني مجتمعاً متسامحاً لا مجتمعاً متشدداً',action:'تعامل اليوم مع الناس بسنة التسامح والرفق التي كان عليها النبي ﷺ'},
    en:{title:'The Sunnah and Tolerance',desc:'The Prophetic Sunnah calls for tolerance and mercy. Those who use the Sunnah to spread extremism and hatred contradict its purpose.',hadith:'The Prophet said: "I was only sent to perfect noble character"',fiqh:'True fiqh builds a tolerant society, not an extremist one',action:'Treat people today with the Sunnah of tolerance and gentleness that the Prophet embodied'},
    fr:{title:'La Sunna et la Tolérance',desc:'La Sunna prophétique appelle à la tolérance et à la miséricorde. Ceux qui utilisent la Sunna pour répandre l\'extrémisme contredisent son objectif.',hadith:'Le Prophète a dit : « Je n\'ai été envoyé que pour parfaire les nobles caractères »',fiqh:'Le vrai fiqh construit une société tolérante, pas extrémiste',action:'Traitez les gens aujourd\'hui avec la Sunna de tolérance et de douceur qu\'incarnait le Prophète'}
  },
  {
    id:19, emoji:'🔑',
    ar:{title:'الحديث والواقع المعاصر',desc:'السنة صالحة لكل زمان ومكان لأنها تعالج المبادئ الكلية. تطبيقها يحتاج حكمة وفهماً للواقع.',hadith:'النبي ﷺ راعى ظروف عصره وتعامل مع المستجدات بحكمة',fiqh:'الفقيه المعاصر يربط بين النص وبين الواقع المعاش',action:'فكّر في مشكلة معاصرة وابحث كيف يمكن أن تساعد مبادئ السنة في حلها'},
    en:{title:'Hadith and Contemporary Reality',desc:'The Sunnah is valid for all times and places because it addresses universal principles. Its application requires wisdom and understanding of reality.',hadith:'The Prophet considered the circumstances of his time and dealt wisely with new developments',fiqh:'A contemporary jurist connects the text with lived reality',action:'Think of a modern problem and research how Sunnah principles can help solve it'},
    fr:{title:'Le Hadith et la Réalité Contemporaine',desc:'La Sunna est valide pour tous les temps et lieux car elle traite de principes universels. Son application nécessite sagesse et compréhension de la réalité.',hadith:'Le Prophète tenait compte des circonstances de son époque et traitait sagement les nouveautés',fiqh:'Un juriste contemporain relie le texte à la réalité vécue',action:'Pensez à un problème moderne et cherchez comment les principes de la Sunna peuvent aider à le résoudre'}
  },
  {
    id:20, emoji:'💎',
    ar:{title:'العالم الرباني',desc:'العالم الحقيقي هو من يجمع بين العلم والتقوى، بين الفقه والحديث، بين الظاهر والباطن. هذا هو النموذج الذي يدعو إليه الغزالي.',hadith:'قال ﷺ: "العلماء ورثة الأنبياء"',fiqh:'العالم الرباني يفهم النص ويفهم الواقع ويجمع بينهما بحكمة',action:'ادعُ اليوم لعالم تحبه أن يوفقه الله لخدمة دينه وأمته'},
    en:{title:'The God-Conscious Scholar',desc:'The true scholar combines knowledge with piety, fiqh with hadith, the external with the internal. This is the model al-Ghazali calls for.',hadith:'The Prophet said: "Scholars are the heirs of the prophets"',fiqh:'A God-conscious scholar understands both text and reality and combines them with wisdom',action:'Pray today for a scholar you love, that God grants them success in serving the religion and community'},
    fr:{title:'Le Savant Pieux',desc:'Le vrai savant combine le savoir avec la piété, le fiqh avec le hadith, l\'extérieur avec l\'intérieur. C\'est le modèle qu\'al-Ghazali prône.',hadith:'Le Prophète a dit : « Les savants sont les héritiers des prophètes »',fiqh:'Un savant pieux comprend à la fois le texte et la réalité et les combine avec sagesse',action:'Priez aujourd\'hui pour un savant que vous aimez, que Dieu lui accorde le succès dans le service de la religion'}
  }
];

// ═══════════════ REFLECTIONS DATA ═══════════════
const REFLECTIONS = [
  {emoji:'📖',ar:{title:'الحفظ ليس كافياً',problem:'كثيرون يحفظون الأحاديث دون فهمها أو ربطها بالواقع.',solution:'الفهم والتدبر أهم من مجرد الحفظ. احفظ بفهم وطبّق بوعي.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا',verseRef:'محمد ٤٧: ٢٤'},en:{title:'Memorization Is Not Enough',problem:'Many memorize hadiths without understanding or connecting them to reality.',solution:'Understanding and reflection are more important than mere memorization. Memorize with understanding and apply with awareness.',verse:'Do they not reflect upon the Quran, or are there locks upon their hearts?',verseRef:'Muhammad 47:24'},fr:{title:'La Mémorisation Ne Suffit Pas',problem:'Beaucoup mémorisent les hadiths sans les comprendre ni les relier à la réalité.',solution:'La compréhension et la réflexion sont plus importantes que la simple mémorisation.',verse:'Ne méditent-ils pas sur le Coran, ou y a-t-il des verrous sur leurs coeurs ?',verseRef:'Muhammad 47:24'}},
  {emoji:'⚖️',ar:{title:'بين الغلو والتفريط',problem:'البعض يغالي في تطبيق الأحاديث والبعض يفرّط فيها تماماً.',solution:'الوسطية هي منهج الإسلام: لا إفراط ولا تفريط.',verse:'وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',verseRef:'البقرة ٢: ١٤٣'},en:{title:'Between Extremism and Negligence',problem:'Some people are extreme in applying hadiths while others neglect them entirely.',solution:'Moderation is the Islamic way: neither excess nor neglect.',verse:'And thus We have made you a moderate nation',verseRef:'Al-Baqarah 2:143'},fr:{title:'Entre Excès et Négligence',problem:'Certains sont extrêmes dans l\'application des hadiths, d\'autres les négligent entièrement.',solution:'La modération est la voie islamique : ni excès ni négligence.',verse:'Et ainsi Nous avons fait de vous une communauté modérée',verseRef:'Al-Baqarah 2:143'}},
  {emoji:'🌍',ar:{title:'السنة للعالم كله',problem:'البعض يعامل السنة كأنها خاصة بثقافة معينة أو زمن محدد.',solution:'السنة رسالة عالمية ومبادئها صالحة لكل البشر في كل العصور.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'الأنبياء ٢١: ١٠٧'},en:{title:'The Sunnah Is for All of Humanity',problem:'Some treat the Sunnah as if it belongs to a specific culture or time.',solution:'The Sunnah is a universal message and its principles are valid for all people in all ages.',verse:'And We have not sent you except as a mercy to the worlds',verseRef:'Al-Anbiya 21:107'},fr:{title:'La Sunna Est pour Toute l\'Humanité',problem:'Certains traitent la Sunna comme si elle appartenait à une culture ou une époque spécifique.',solution:'La Sunna est un message universel et ses principes sont valides pour tous les peuples à toutes les époques.',verse:'Et Nous ne t\'avons envoyé qu\'en miséricorde pour les mondes',verseRef:'Al-Anbiya 21:107'}},
  {emoji:'🔬',ar:{title:'العلم والسنة',problem:'البعض يرى تعارضاً بين العلم الحديث وبعض الأحاديث.',solution:'لا تعارض حقيقي بين العلم الصحيح والسنة الصحيحة. التعارض يكون في الفهم القاصر.',verse:'سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ',verseRef:'فصلت ٤١: ٥٣'},en:{title:'Science and the Sunnah',problem:'Some see a contradiction between modern science and some hadiths.',solution:'There is no real contradiction between sound science and authentic Sunnah. The contradiction is in limited understanding.',verse:'We will show them Our signs in the horizons and within themselves',verseRef:'Fussilat 41:53'},fr:{title:'La Science et la Sunna',problem:'Certains voient une contradiction entre la science moderne et certains hadiths.',solution:'Il n\'y a pas de réelle contradiction entre la science saine et la Sunna authentique.',verse:'Nous leur montrerons Nos signes dans les horizons et en eux-mêmes',verseRef:'Fussilat 41:53'}},
  {emoji:'👥',ar:{title:'المرأة في السنة',problem:'البعض يسيء فهم أحاديث المرأة ويقتطعها من سياقها لتبرير التمييز.',solution:'السنة كرّمت المرأة وأعطتها حقوقها كاملة. الفهم الصحيح يحتاج نظرة شاملة لكل الأحاديث.',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'البقرة ٢: ٢٢٨'},en:{title:'Women in the Sunnah',problem:'Some misunderstand hadiths about women and take them out of context to justify discrimination.',solution:'The Sunnah honored women and gave them their full rights. Correct understanding requires looking at all hadiths together.',verse:'And women have rights similar to those over them in fairness',verseRef:'Al-Baqarah 2:228'},fr:{title:'La Femme dans la Sunna',problem:'Certains comprennent mal les hadiths sur les femmes et les sortent de leur contexte pour justifier la discrimination.',solution:'La Sunna a honoré la femme et lui a donné ses pleins droits. La bonne compréhension nécessite une vision globale.',verse:'Et elles ont des droits semblables à ceux qu\'elles doivent, selon le convenable',verseRef:'Al-Baqarah 2:228'}},
  {emoji:'📢',ar:{title:'نشر الحديث بمسؤولية',problem:'وسائل التواصل أصبحت تنشر أحاديث ضعيفة وموضوعة بكثرة.',solution:'تحقق من صحة الحديث قبل نشره واسأل أهل العلم عما تشك فيه.',verse:'فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ',verseRef:'النحل ١٦: ٤٣'},en:{title:'Sharing Hadiths Responsibly',problem:'Social media has become a platform for spreading weak and fabricated hadiths.',solution:'Verify the authenticity of a hadith before sharing it and consult scholars about what you doubt.',verse:'So ask the people of knowledge if you do not know',verseRef:'An-Nahl 16:43'},fr:{title:'Partager les Hadiths avec Responsabilité',problem:'Les réseaux sociaux sont devenus une plateforme pour répandre des hadiths faibles et fabriqués.',solution:'Vérifiez l\'authenticité d\'un hadith avant de le partager et consultez les savants sur ce dont vous doutez.',verse:'Demandez aux gens du savoir si vous ne savez pas',verseRef:'An-Nahl 16:43'}},
  {emoji:'🏫',ar:{title:'تعليم السنة للأطفال',problem:'كثير من الأطفال ينشأون دون معرفة حقيقية بالسنة أو مع فهم سطحي.',solution:'علّم الأطفال السنة بأسلوب محبب يربط بين الحديث وحياتهم اليومية.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا',verseRef:'التحريم ٦٦: ٦'},en:{title:'Teaching the Sunnah to Children',problem:'Many children grow up without real knowledge of the Sunnah or with a superficial understanding.',solution:'Teach children the Sunnah in an engaging way that connects hadiths to their daily lives.',verse:'O you who believe, protect yourselves and your families from a Fire',verseRef:'At-Tahrim 66:6'},fr:{title:'Enseigner la Sunna aux Enfants',problem:'Beaucoup d\'enfants grandissent sans connaissance réelle de la Sunna ou avec une compréhension superficielle.',solution:'Enseignez la Sunna aux enfants de manière engageante en reliant les hadiths à leur vie quotidienne.',verse:'O vous qui croyez, préservez vos personnes et vos familles d\'un Feu',verseRef:'At-Tahrim 66:6'}},
  {emoji:'🕌',ar:{title:'السنة حياة لا نظرية',problem:'البعض يدرس السنة كنظرية أكاديمية دون تطبيق عملي.',solution:'السنة منهج حياة يُعاش لا مجرد معلومات تُحفظ. طبّقها في يومك.',verse:'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ',verseRef:'الأحزاب ٣٣: ٢١'},en:{title:'The Sunnah Is Life, Not Theory',problem:'Some study the Sunnah as an academic theory without practical application.',solution:'The Sunnah is a way of life to be lived, not just information to be memorized. Apply it in your daily life.',verse:'There has certainly been for you in the Messenger of God an excellent example',verseRef:'Al-Ahzab 33:21'},fr:{title:'La Sunna Est une Vie, Pas une Théorie',problem:'Certains étudient la Sunna comme une théorie académique sans application pratique.',solution:'La Sunna est un mode de vie à vivre, pas seulement des informations à mémoriser. Appliquez-la au quotidien.',verse:'Vous avez certes dans le Messager de Dieu un excellent exemple',verseRef:'Al-Ahzab 33:21'}}
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'📖',ar:{label:'قراءة حديث بتدبر',source:'التدبر خير من كثرة القراءة'},en:{label:'Read a hadith with reflection',source:'Reflection is better than much reading'},fr:{label:'Lire un hadith avec réflexion',source:'La réflexion vaut mieux que beaucoup de lecture'}},
  {emoji:'🔍',ar:{label:'التحقق من حديث قبل نشره',source:'من كذب عليّ متعمداً...'},en:{label:'Verify a hadith before sharing',source:'Whoever deliberately lies about me...'},fr:{label:'Vérifier un hadith avant de le partager',source:'Quiconque ment délibérément à mon sujet...'}},
  {emoji:'🤲',ar:{label:'الدعاء بدعاء نبوي',source:'من أذكار الصباح والمساء'},en:{label:'Make a Prophetic dua',source:'From morning and evening remembrances'},fr:{label:'Faire une dua prophétique',source:'Des invocations du matin et du soir'}},
  {emoji:'😊',ar:{label:'الابتسامة في وجه الآخرين',source:'تبسمك في وجه أخيك صدقة'},en:{label:'Smile at others',source:'Your smile at your brother is charity'},fr:{label:'Sourire aux autres',source:'Votre sourire à votre frère est une aumône'}},
  {emoji:'🤝',ar:{label:'إفشاء السلام',source:'أفشوا السلام بينكم'},en:{label:'Spread greetings of peace',source:'Spread peace among yourselves'},fr:{label:'Répandre les salutations de paix',source:'Répandez la paix entre vous'}},
  {emoji:'💧',ar:{label:'الوضوء والصلاة في وقتها',source:'أحب الأعمال إلى الله الصلاة على وقتها'},en:{label:'Wudu and prayer on time',source:'The most beloved deeds to God: prayer on time'},fr:{label:'Ablutions et prière à l\'heure',source:'Les actes les plus aimés de Dieu : la prière à l\'heure'}},
  {emoji:'📚',ar:{label:'تعلّم شيء جديد عن السنة',source:'من سلك طريقاً يلتمس فيه علماً...'},en:{label:'Learn something new about the Sunnah',source:'Whoever follows a path seeking knowledge...'},fr:{label:'Apprendre quelque chose de nouveau sur la Sunna',source:'Quiconque emprunte un chemin cherchant le savoir...'}},
  {emoji:'🍽️',ar:{label:'أكل بسنة النبي ﷺ',source:'ما ملأ ابن آدم وعاءً شراً من بطنه'},en:{label:'Eat following Prophetic manner',source:'No person fills a vessel worse than their stomach'},fr:{label:'Manger selon la manière prophétique',source:'Nul ne remplit un récipient pire que son estomac'}}
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل تتحقق من صحة الحديث قبل نشره؟',en:'Do you verify the authenticity of a hadith before sharing it?',fr:'Vérifiez-vous l\'authenticité d\'un hadith avant de le partager ?'},
  {ar:'هل تأخذ الأحاديث بحرفيتها دون فهم السياق؟',en:'Do you take hadiths literally without understanding context?',fr:'Prenez-vous les hadiths littéralement sans comprendre le contexte ?'},
  {ar:'هل تقرأ شروح الحديث لفهمه بشكل صحيح؟',en:'Do you read hadith commentaries for proper understanding?',fr:'Lisez-vous les commentaires du hadith pour une bonne compréhension ?'},
  {ar:'هل تستخدم الحديث لتبرير موقفك الشخصي فقط؟',en:'Do you use hadith only to justify your personal stance?',fr:'Utilisez-vous le hadith uniquement pour justifier votre position personnelle ?'},
  {ar:'هل تعرف الفرق بين الحديث الصحيح والضعيف؟',en:'Do you know the difference between authentic and weak hadiths?',fr:'Connaissez-vous la différence entre un hadith authentique et faible ?'},
  {ar:'هل تحترم اختلاف المذاهب الفقهية في فهم السنة؟',en:'Do you respect the differences between jurisprudential schools?',fr:'Respectez-vous les différences entre les écoles juridiques ?'},
  {ar:'هل تربط بين الحديث والقرآن في فهمك للدين؟',en:'Do you connect hadith with Quran in understanding religion?',fr:'Reliez-vous le hadith au Coran dans votre compréhension de la religion ?'},
  {ar:'هل تطبق ما تعلمته من السنة في حياتك اليومية؟',en:'Do you apply what you learn from the Sunnah in daily life?',fr:'Appliquez-vous ce que vous apprenez de la Sunna dans votre vie quotidienne ?'}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء طلب العلم',text:'اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً',tr:'O God, I ask You for beneficial knowledge, good provision, and accepted deeds'},en:{label:'Dua for Knowledge',text:'اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً',tr:'O God, I ask You for beneficial knowledge, good provision, and accepted deeds'},fr:{label:'Dua pour le Savoir',text:'اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً',tr:'O Dieu, je Te demande un savoir bénéfique, une bonne subsistance et des actes acceptés'}},
  {ar:{label:'دعاء الفهم',text:'رب اشرح لي صدري ويسر لي أمري واحلل عقدة من لساني يفقهوا قولي',tr:'My Lord, expand my chest, ease my task, and remove the impediment from my speech'},en:{label:'Dua for Understanding',text:'رب اشرح لي صدري ويسر لي أمري واحلل عقدة من لساني يفقهوا قولي',tr:'My Lord, expand my chest, ease my task, and remove the impediment from my speech'},fr:{label:'Dua pour la Compréhension',text:'رب اشرح لي صدري ويسر لي أمري واحلل عقدة من لساني يفقهوا قولي',tr:'Mon Seigneur, ouvre-moi la poitrine, facilite ma tâche, et dénoue le noeud de ma langue'}},
  {ar:{label:'دعاء الهداية',text:'اللهم أرنا الحق حقاً وارزقنا اتباعه وأرنا الباطل باطلاً وارزقنا اجتنابه',tr:'O God, show us truth as truth and grant us to follow it, show us falsehood as falsehood and grant us to avoid it'},en:{label:'Dua for Guidance',text:'اللهم أرنا الحق حقاً وارزقنا اتباعه وأرنا الباطل باطلاً وارزقنا اجتنابه',tr:'O God, show us truth as truth and grant us to follow it, show us falsehood as falsehood and grant us to avoid it'},fr:{label:'Dua pour la Guidance',text:'اللهم أرنا الحق حقاً وارزقنا اتباعه وأرنا الباطل باطلاً وارزقنا اجتنابه',tr:'O Dieu, montre-nous la vérité comme vérité et accorde-nous de la suivre'}},
  {ar:{label:'دعاء الحكمة',text:'اللهم آتنا حكمة وعلماً وفهماً',tr:'O God, grant us wisdom, knowledge, and understanding'},en:{label:'Dua for Wisdom',text:'اللهم آتنا حكمة وعلماً وفهماً',tr:'O God, grant us wisdom, knowledge, and understanding'},fr:{label:'Dua pour la Sagesse',text:'اللهم آتنا حكمة وعلماً وفهماً',tr:'O Dieu, accorde-nous sagesse, savoir et compréhension'}},
  {ar:{label:'دعاء التوفيق',text:'اللهم وفقنا لما تحبه وترضاه',tr:'O God, guide us to what You love and are pleased with'},en:{label:'Dua for Success',text:'اللهم وفقنا لما تحبه وترضاه',tr:'O God, guide us to what You love and are pleased with'},fr:{label:'Dua pour le Succès',text:'اللهم وفقنا لما تحبه وترضاه',tr:'O Dieu, guide-nous vers ce que Tu aimes et ce qui Te plaît'}},
  {ar:{label:'دعاء الصبر',text:'ربنا أفرغ علينا صبراً وتوفنا مسلمين',tr:'Our Lord, pour upon us patience and let us die as Muslims'},en:{label:'Dua for Patience',text:'ربنا أفرغ علينا صبراً وتوفنا مسلمين',tr:'Our Lord, pour upon us patience and let us die as Muslims'},fr:{label:'Dua pour la Patience',text:'ربنا أفرغ علينا صبراً وتوفنا مسلمين',tr:'Notre Seigneur, déverse sur nous la patience et fais-nous mourir en musulmans'}}
];

// ═══════════════ APP STATE ═══════════════
let lang = localStorage.getItem('sn-lang') || 'ar';
let theme = localStorage.getItem('sn-theme') || 'teal';
const themes = ['teal','night','ocean'];
const themeIcons = ['🌿','🌙','🌊'];
const themeNames = {teal:'🌿 Teal',night:'🌙 Night',ocean:'🌊 Ocean'};
let currentCardIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderCards();
  renderReflections();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('sn-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabReflections', t.tabReflections);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('reflectionsTitle', t.reflectionsTitle); set('reflectionsDesc', t.reflectionsDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  set('habitsReset', t.resetBtn);
  renderHome(); renderCards(); renderReflections(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('sn-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const c = CARDS[dayIdx];
  const cd = c[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>
  `;
  const sections = [
    {icon:'📜',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ بطاقة للفهم':lang==='fr'?'20 cartes':'20 cards'},
    {icon:'💡',tab:'reflections',title:t.tabReflections,desc:lang==='ar'?'تأملات في السنة':lang==='fr'?'Réflexions':'Reflections'},
    {icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر فهمك':lang==='fr'?'Testez-vous':'Test yourself'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب':lang==='fr'?'Le livre':'The book'},
  ];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('card-${c.id}')">
        <span class="principle-num">${c.id}</span>
        <span class="principle-emoji">${c.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          <div class="comparison-box">
            <div class="comparison-side carnegie-side">
              <div class="comp-label">📜 ${t.hadith}</div>
              <div class="comp-text">${d.hadith}</div>
            </div>
            <div class="comparison-side ghazali-side">
              <div class="comp-label">⚖️ ${t.fiqh}</div>
              <div class="comp-text">${d.fiqh}</div>
            </div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('cardsContainer').innerHTML = searchBar + cards;
}

function filterCards(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareCard(idx) {
  const c = CARDS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n💡 ${d.action}\n\n— السنة النبوية | Prophetic Sunnah`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copié !' : 'Copied!');
    } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: REFLECTIONS ═══════════════
function renderReflections() {
  const t = T[lang];
  document.getElementById('reflectionsContainer').innerHTML = REFLECTIONS.map(r => {
    const d = r[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${r.emoji}</span>
        <span class="anxiety-title">${d.title}</span>
      </div>
      <div class="anxiety-problem">
        <span class="anxiety-label">${t.problem}</span>
        ${d.problem}
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label">${t.solution}</span>
        ${d.solution}
      </div>
      <div class="verse-box">
        <div class="verse-arabic">${d.verse}</div>
        <div class="verse-ref">${d.verseRef}</div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('sn-habits') || '{}');
  if (habitsState.date !== today) {
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('sn-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  document.getElementById('habitsContainer').innerHTML = HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div>
        <div class="habit-label">${d.label}</div>
        <div class="habit-source">${d.source}</div>
      </div>
    </div>`;
  }).join('');
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}

function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('sn-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i);
  localStorage.setItem('sn-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  if (hs.done.length === HABITS.length) {
    launchConfetti();
    showToast(T[lang].allDone);
  }
}

function resetHabits() {
  localStorage.setItem('sn-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Réinitialisé' : 'Reset');
}

function updateHabitsProgress(hs) {
  const done = hs.done.length;
  const total = HABITS.length;
  const pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('habitsFill');
  const txt = document.getElementById('habitsText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}

function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('sn-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) streakData.count++;
    else if (prevState.date !== new Date().toDateString()) streakData.count = prevState.done.length === HABITS.length ? 1 : 0;
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) {
    streakData.count = 0; streakData.lastDate = prevState.date;
  }
  localStorage.setItem('sn-streak', JSON.stringify(streakData));
}

function getStreak() {
  return JSON.parse(localStorage.getItem('sn-streak') || '{"count":0}').count;
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#00695C','#4DB6AC','#80CBC4','#E0F2F1','#FFD54F','#26A69A','#B2DFDB'];
  for (let i = 0; i < 120; i++) {
    particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-.5)*10});
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  document.getElementById('quizContainer').innerHTML = QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i+1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
}

function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o, oi) => {
    o.classList.toggle('selected', [2,1,0][oi] === val);
  });
  playSound('click');
}

function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang === 'ar' ? 'أجب على جميع الأسئلة' : lang === 'fr' ? 'Répondez à toutes les questions' : 'Answer all questions');
    return;
  }
  const invertedQs = [1, 3];
  let score = 0;
  Object.entries(answers).forEach(([qi, v]) => {
    score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v;
  });
  const max = QUIZ.length * 2;
  const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) {
    emoji = '🌟'; title = lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!';
    desc = lang==='ar'?'فهمك للسنة متين ومتوازن. استمر في التعلم!':lang==='fr'?'Votre compréhension de la Sunna est solide. Continuez !':'Your understanding of the Sunnah is solid. Keep learning!';
  } else if (pct >= 50) {
    emoji = '📖'; title = lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
    desc = lang==='ar'?'أنت على الطريق الصحيح لكن هناك مجال للتعمق أكثر.':lang==='fr'?'Vous êtes sur la bonne voie mais il y a place pour approfondir.':'You\'re on the right track but there\'s room to go deeper.';
  } else {
    emoji = '🔍'; title = lang==='ar'?'حان وقت التعلم':lang==='fr'?'Il est temps d\'apprendre':'Time to Learn';
    desc = lang==='ar'?'فهمك للسنة يحتاج تعمّق. ابدأ بقراءة الكتاب وتعلّم أساسيات علم الحديث.':lang==='fr'?'Votre compréhension a besoin d\'approfondissement. Commencez par lire le livre.':'Your understanding needs deepening. Start by reading the book.';
  }
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${pct}%</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${desc}</div>
    <button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>
  `;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري. ألّف أكثر من ٩٤ كتاباً في الفكر الإسلامي. درس في الأزهر ودرّس في جامعات عربية عديدة. عُرف بمنهجه الوسطي والتجديدي.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"السنة النبوية بين أهل الفقه وأهل الحديث" كتاب يعالج الفجوة بين المحدثين والفقهاء. يدعو الغزالي إلى فهم السنة في إطار مقاصد الشريعة وربطها بالقرآن والعقل، محذراً من الحرفية الجامدة والتطبيق المنفصل عن الواقع.',
      sourcesTitle: 'المصادر',
      sources: ['"السنة النبوية بين أهل الفقه وأهل الحديث" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','كتب أصول الفقه المعتمدة'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker. Author of 94+ books on Islamic thought. Studied at Al-Azhar and taught at many Arab universities. Known for his moderate and reformist approach.',
      bookTitle: 'About the Book',
      bookDesc: '"The Prophetic Sunnah Between Jurists and Hadith Scholars" addresses the gap between hadith specialists and jurists. Al-Ghazali calls for understanding the Sunnah within the framework of Islamic objectives and connecting it to the Quran and reason, warning against rigid literalism and application disconnected from reality.',
      sourcesTitle: 'Sources',
      sources: ['"The Prophetic Sunnah Between Jurists and Hadith Scholars" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Established Usul al-Fiqh works'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tiré du livre et de sources islamiques fiables.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique égyptien. Auteur de plus de 94 livres sur la pensée islamique. Diplômé d\'Al-Azhar, enseignant dans de nombreuses universités arabes. Connu pour son approche modérée et réformiste.',
      bookTitle: 'À Propos du Livre',
      bookDesc: '« La Sunna Prophétique entre Juristes et Spécialistes du Hadith » traite du fossé entre les spécialistes du hadith et les juristes. Al-Ghazali appelle à comprendre la Sunna dans le cadre des objectifs islamiques, en la reliant au Coran et à la raison.',
      sourcesTitle: 'Sources',
      sources: ['« La Sunna Prophétique entre Juristes et Spécialistes du Hadith » — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Ouvrages de référence d\'Usul al-Fiqh'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "السنة النبوية بين أهل الفقه وأهل الحديث" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ بطاقة، ٨ تأملات، تتبع العادات، اختبار ذاتي، أدعية نبوية.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم للتنقل بين البطاقات. اضغط Escape لإغلاق اللوحات.'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"The Prophetic Sunnah Between Jurists and Hadith Scholars" by Sheikh al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages, 3 themes, 20 cards, 8 reflections, habit tracker, self-quiz, Prophetic duas.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys to navigate between cards. Press Escape to close panels.'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« La Sunna Prophétique » par Sheikh al-Ghazali, le Saint Coran, la Sunna Prophétique.'},
      {title:'✨ Fonctionnalités',body:'Trois langues, 3 thèmes, 20 cartes, 8 réflexions, suivi habitudes, quiz, duas prophétiques.'},
      {title:'⌨️ Raccourcis',body:'Utilisez les flèches pour naviguer entre les cartes. Échap pour fermer les panneaux.'},
    ]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `
    <div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => setTimeout(observeAll, 100)); });
}

// ═══════════════ KEYBOARD ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const cardsPanel = document.getElementById('panel-cards');
      if (!cardsPanel || !cardsPanel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none');
      if (cards.length === 0) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}
