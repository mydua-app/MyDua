const hadisDualari = [
  {
    baslik: "Sabah – Akşam Duası",
    arapca: "اَللّٰهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
    okunus: "Allahümme bike asbahnâ ve bike emseynâ ve bike nahyâ ve bike nemût ve ileyken-nüşûr",
    anlam: "Allah’ım! Senin lütfunla sabaha ulaştık, senin lütfunla akşama eriştik. Sen dileyince dirilir, yine sen dileyince ölürüz. Dönüş sanadır.",
    kaynak: "Ebû Dâvûd, Edeb, 110; Tirmizî, De’avât, 13"
  },
  {
    baslik: "Zarar Görmemek İçin",
    arapca: "بِسْمِ اللّٰهِ الَّذٖي لَا يَضُرُّ مَعَ اسْمِهٖ شَيْءٌ فِي الْأَرْضِ وَلَا في السَّمٰاءِ وَهُوَ السَّمٖيعُ الْعَلٖيمُ",
    okunus: "Bismillâhillezî lâ yedurru measmihî şey’ün fil-ardı velâ fis-semâi ve hüves-semîul-alîm",
    anlam: "İsminin anılmasıyla yerde ve gökte hiçbir şeyin zarar veremeyeceği Allah’ın adıyla. O, hakkıyla işiten, kemaliyle bilendir.",
    kaynak: "Tirmizî, De’avât, 13; Ebû Dâvûd, Edeb, 110"
  },
  {
    baslik: "Uykudan Uyanınca",
    arapca: "الْحَمْدُ لِلَّهِ الَّذِى أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    okunus: "Elhamdülillâhillezî ahyânâ ba‘de mâ emâtenâ ve ileyhen-nüşûr",
    anlam: "Bizi öldürdükten sonra dirilten Allah’a hamdolsun. Yeniden dirilince de O’na döneceğiz.",
    kaynak: "Buhârî, Tevhîd, 13"
  },
  {
    baslik: "Elbise Giyerken",
    arapca: "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ أَسْأَلُكَ خَيْرَهُ وَخَيْرَ مَا صُنِعَ لَهُ وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ",
    okunus: "Allahümme lekel-hamdü ente kesevtenîhi es’elüke hayrahü ve hayra mâ sunia lehü ve eûzü bike min şerrihî ve şerri mâ sunia lehü",
    anlam: "Allah’ım! Hamd sanadır. Bunu bana sen giydirdin. Onun ve yapılış gâyesinin hayırlı olmasını senden dilerim. Onun ve yapılış gâyesinin şerrinden de sana sığınırım.",
    kaynak: "Tirmizî, Libâs, 29"
  },
  {
    baslik: "Tuvalete Girerken",
    arapca: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    okunus: "Allahümme innî eûzü bike minel-hubusi vel-habâis",
    anlam: "Allah’ım pislikten ve pis şeylerden (erkek ve dişi cinlerin şerrinden) sana sığınırım.",
    kaynak: "Buhârî, Da’avât, 15"
  },
  {
    baslik: "Tuvaletten Çıkarken",
    arapca: "الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الأَذَى وَعَافَانِي",
    okunus: "Elhamdülillâhillezî ezhebe annil-ezâ ve âfânî",
    anlam: "Üzerimden sıkıntıyı kaldıran ve bana afiyet veren Allah'a hamdolsun.",
    kaynak: "İbn Mâce, Tahâret, 10"
  },
  {
    baslik: "Yemekten Sonra",
    arapca: "الْحَمْدُ لِلَّهِ الَّذٖي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمٖينَ",
    okunus: "Elhamdülillâhi’llezî et'amenâ ve sekânâ ve cealenâ müslimîn",
    anlam: "Bizi yediren, bizi içiren ve bizi Müslüman yapan Allah’a hamdolsun.",
    kaynak: "Ebû Dâvûd, Et’ıme, 52"
  },
  {
    baslik: "Evden Çıkarken",
    arapca: "بِسْمِ اللّٰهِ تَوَكَّلْتُ عَلَى اللّٰهِ وَلٰا حَوْلَ وَلٰا قُوَّةَ إِلّٰا بِاللّٰهِ",
    okunus: "Bismillâhi tevekkeltü alallâhi velâ havle velâ kuvvete illâ billâh",
    anlam: "Allah’ın adıyla, Allah’a tevekkül ettim. O’ndan başka gerçek güç ve kuvvet sahibi yoktur.",
    kaynak: "Ebû Dâvûd, Edeb, 112; Tirmizî, De’avât, 34"
  },
  {
    baslik: "Yolculuğa Çıkarken",
    arapca: "اللَّهُمَّ إِنِّى أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ وَكَآبَةِ الْمُنْقَلَبِ وَالْحَوْرِ بَعْدَ الْكَوْرِ وَدَعْوَةِ الْمَظْلُومِ وَسُوءِ الْمَنْظَرِ فِى الأَهْلِ وَالْمَالِ",
    okunus: "Allahümme innî eûzü bike min va’sâis-seferi ve kâbetil-münkalibi vel-havri ba’del-kevri ve da’vetil-mazlûmi ve sûil-manzari fil-ehli vel-mâl",
    anlam: "Allah’ım! Yolculuğun yorgunluk ve sıkıntılarından, kötü bir şekilde dönmekten, iyi hallerden kötü hallere düşmekten, mazlumun bedduasından, mala ve aileye gelecek kötülüklerden sana sığınırım.",
    kaynak: "Müslim, Hac, 426"
  },
  {
    baslik: "Pazar ve Çarşıya Girerken",
    arapca: "لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرٖيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيٖي وَيُمٖيتُ وَهُوَ حَيٌّ لاَ يَموُتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلٰى كُلِّ َشْيءٍ قَدٖيرٌ",
    okunus: "Lâ ilâhe illallâhü vahdehü lâ şerîke leh, lehül-mülkü ve lehül-hamdü yuhyî ve yümît ve hüve hayyün lâ yemût, biyedihil-hayr ve hüve alâ külli şey’in kadîr",
    anlam: "Allah’tan başka hiçbir ilâh yoktur. O, birdir ve ortağı yoktur, mülk O’nundur ve hamd O’na aittir, yaşatan, öldüren O’dur, O daima diridir, ölmez, hayır O’nun elindedir ve O her şeye gücü yetendir.",
    kaynak: "Tirmizî, Da’avât, 36"
  },
  {
    baslik: "Yatağa Yatınca (Sığınma)",
    arapca: "اَللّٰهُمَّ أَسْلَمْتُ نَفْسٖي إِلَيْكَ وَوَجَّهْتُ وَجْهٖي إِلَيْكَ وَفَوَّضْتُ أَمْرٖي إِلَيْكَ وَأَلْجَأْتُ ظَهْرٖي إِلَييْكَ رَغْبَةً وَرَهْبَةً إِلَيْكَ لَا مَلْجَأَ وَلَا مَنْجٰى مِنْكَ إِلَّا إِلَيْكَ آمَنْتُ بِكِتَابِكَ الَّذٖي أَنْزَلْتَ وَبِنَبِيِّكَ الَّذٖي أَرْسَلْتَ",
    okunus: "Allahümme eslemtü nefsî ileyke ve veccehtü vechî ileyke ve fevvaztü emrî ileyke ve elce’tü zahrî ileyke rağbeten ve rehbeten ileyke lâ melcee velâ mencâ minke illâ ileyke. Âmentü bi-kitâbikellezî enzelte ve bi-nebiyyikellezî erselte",
    anlam: "Allah’ım! Kendimi sana teslim ettim. Yüzümü sana çevirdim. İşimi sana havale ettim. Rızanı isteyerek, azabından korkarak sırtımı sana dayadım. Sana karşı yine senden başka sığınak yoktur. İndirdiğin kitaba ve gönderdiğin peygambere inandım.",
    kaynak: "Buhârî, De’avât, 6"
  },
  {
    baslik: "Dinin Üzere Sabit Kıl",
    arapca: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    okunus: "Ya mukallibel kulûb! Sebbit kalbî ‘alâ dînike.",
    anlam: "Ey kalpleri hâlden hâle çeviren Allah’ım, kalbimi dinin üzere sabit kıl.",
    kaynak: "Tirmizî, Deavât 124"
  },
  {
    baslik: "Şifa Duası",
    arapca: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا",
    okunus: "Allahümme Rabbe’n-nâsi! Ezhibi’l-be'se, işfi ente’ş-şâfi. Lâ şifâe illâ şifâüke. Şifâen lâ yüğâdiru sekamâ.",
    anlam: "Allah’ım, Ey insanların Rabbi! Sıkıntıyı gider, şifa ver. Şifayı veren ancak sensin. Senin vereceğin şifadan başka şifa yoktur. Öyle bir şifa ver ki, hastalık nedir bırakmasın.",
    kaynak: "Buhârî, Tıb 37"
  },
  {
    baslik: "Güzel Ahlak Duası",
    arapca: "اللَّهُمَّ أَحْسَنْتَ خَلْقِي فَأَحْسِنْ خُلُقِي",
    okunus: "Allahümme ahsente halkî fe ehsin hulukî.",
    anlam: "Allah’ım! Yaratılışımı güzelleştirdiğin gibi ahlakımı da güzelleştir.",
    kaynak: "İbn Hanbel, el-Müsned I, 403"
  },
  {
    baslik: "Affetmeyi Seversin",
    arapca: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    okunus: "Allahümme inneke afüvvün tühıbbü'l-afve fa'fu annî",
    anlam: "Allah’ım! Sen affedicisin, cömertsin, affetmeyi seversin, beni de affet.",
    kaynak: "Tirmizî, Deavât 89"
  },
  {
    baslik: "Helalinden İste",
    arapca: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    okunus: "Allahümmekfinî bihalâlike an haramike ve ağninî bifadlike ammen sivâke.",
    anlam: "Allah’ım! Harama bulaşmaktansa, helalinle yetineyim. Beni lütfunla (zengin kılarak) Senden başkasına muhtaç etme.",
    kaynak: "Tirmizî, Deavât 110"
  },
  {
    baslik: "Yardım ve Zikir",
    arapca: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    okunus: "Allahümme einnî alâ zikrike ve şükrike ve husni ibâdetike.",
    anlam: "Allah’ım! Seni anmak, sana şükretmek, sana güzelce kulluk etmekte bana yardım et.",
    kaynak: "Ebu Dâvûd, Salât 361"
  },
  {
    baslik: "Rızaya ve Affa Sığınma",
    arapca: "اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ وَأَعُوذُ بِكَ مِنْكَ لَا أُحْصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ",
    okunus: "Allahümme e’ûzü bi rızâke min sehatike ve bi muâfâtike min ‘ukûbetike ve e’ûzü bike minke lâ uhsi senâen ‘aleyke ente kema esneyte ‘ala nefsike.",
    anlam: "Allah’ım! Öfkenden rızana; cezandan affına sığınırım. Senden yine sana sığınırım. Sana övgüyü saymakla bitiremem. Sen kendini nasıl övdüysen öylesin.",
    kaynak: "Müslim, Salât, 222"
  },
  {
    baslik: "Nimetin Zevalinden Sığınma",
    arapca: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ وَتَحَوُّلِ عَافِيَتِكَ وَفُجَاءَةِ نِقْمَتِكَ وَجَمِيعِ سَخَطِكَ",
    okunus: "Allâhümme innî e’ûzü bike min zevâli ni’metike ve tehavvüli ‘âfiyetike ve fücâeti nıkmetike ve cemî’ı sahatike.",
    anlam: "Allah’ım! Nimetinin yok olmasından, verdiğin afiyetin bozulmasından, ansızın cezalandırmandan ve öfkene sebep olan her şeyden sana sığınırım.",
    kaynak: "Müslim, Zikir, 96"
  },
  {
    baslik: "Keder ve Borçtan Sığınma",
    arapca: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْجُبْنِ وَالْبُخْلِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
    okunus: "Allahümme innî e’ûzü bike mine’l-hemmi ve’l-hazeni. Ve e’ûzü bike mine’l-‘aczi vel-keseli. Ve e’ûzü bike minel cübni vel-buhli. Ve e’ûzü bike min ğalebetid-deyni ve kahrir-ricâli.",
    anlam: "Allah’ım! Kederden ve üzüntüden, acizlikten, tembellikten, cimrilikten, korkaklıktan, borç yükünden ve insanların kahrından sana sığınırım.",
    kaynak: "Ebû Davud, Sâlat, 367"
  },
  {
    baslik: "Fakirlik ve Zulümden Sığınma",
    arapca: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفَقْرِ وَالْقِلَّةِ وَالذِّلَّةِ وَأَعُوذُ بِكَ مِنْ أَنْ أَظْلِمَ أَوْ أُظْلَمَ",
    okunus: "Allahümme innî e’ûzü bike mine’l-fakri ve’l-kılleti ve’z-zilleti ve e’ûzü bike min en ezlime ev uzleme.",
    anlam: "Allah’ım! Fakirlikten, yokluktan ve zilletten sana sığınırım; zulmetmekten ve zulme uğramaktan da sana sığınırım.",
    kaynak: "Buhârî, Deavât, 40"
  },
  {
    baslik: "Dünya Fitnesi ve Kabir Azabı",
    arapca: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْجُبْنِ وَأَعُوذُ بِكَ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ",
    okunus: "Allahümme innî e’ûzü bike mine’l-cübni ve e’ûzü bike min en uredde ila erzelil ‘umuri ve e’ûzü bike min fitneti'd-dünya ve e’ûzü bike min azabi'l-kabr.",
    anlam: "Allah’ım! Korkaklıktan sana sığınırım. Ömrün en düşük çağının zorluklarından, dünya fitnelerinden ve kabir azabından da sana sığınırım.",
    kaynak: "Buhârî, Cihad, 25"
  },
  {
    baslik: "Yapılan İşlerin Şerrinden Sığınma",
    arapca: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ وَمِنْ شَرِّ مَا لَمْ أَعْمَلْ",
    okunus: "Allahümme innî e'ûzü bike min şerri ma 'amiltu ve min şerri ma lem a'mel.",
    anlam: "Allah’ım! Şimdiye kadar yaptığım, bundan sonra yapacağım işlerin şerrinden sana sığınırım.",
    kaynak: "Müslim, Zikir, 65"
  },
  {
    baslik: "Cehennem Fitnesinden Sığınma",
    arapca: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ فِتْنَةِ النَّارِ وَعَذَابِ النَّارِ وَمِنْ شَرِّ الْغِنَى وَالْفَقْرِ",
    okunus: "Allahümme innî e'ûzü bike min fitneti'n-nâri ve 'azabi'n-nari ve min şerri'l-ğına ve'l-fakri",
    anlam: "Allah’ım! Cehenneme götüren fitneden, Cehennemin azabından, zenginliğin ve fakirliğin şerrinden sana sığınırım.",
    kaynak: "Ebu Davud, Vitr, 32"
  },
  {
    baslik: "Açlık ve Hainlikten Sığınma",
    arapca: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْجُوعِ فَإِنَّهُ بِئْسَ الضَّجِيعُ وَأَعُوذُ بِكَ مِنَ الْخِيَانَةِ فَإِنَّهَا بِئْسَتِ الْبِطَانَةُ",
    okunus: "Allahümme innî e’ûzü bike minel-cû’ı fe-innehû bi’sed-dacî’u ve e’ûzü bike mine’l-hıyâneti fe-innehâ bi’seti’l-bitânetü.",
    anlam: "Allah’ım! Açlıktan sana sığınırım. Çünkü açlık, ne kötü bir arkadaştır. Hainlikten de sana sığınırım. Çünkü hainlik, ne kötü bir sırdaştır.",
    kaynak: "Ebu Davud, Vitr, 32"
  },
  {
    baslik: "Beden ve Göz Sağlığı",
    arapca: "اللَّهُمَّ عَافِنِي فِي جَسَدِي وَعَافِنِي فِي بَصَرِي وَاجْعَلْهُ الْوَارِثَ مِنِّي لَا إِلَهَ إِلَّا اللَّهُ الْحَلِيمُ الْكَرِيمُ سُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ الْعَظِيمِ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    okunus: "Allahümme ‘âfini fi cesedî ve ‘âfinî fî basarî ve’c‘alhü’l vârise minnî lâ ilâhe illâllahu’l-halîmu’l-kerîmu subhâne’llahi rabbi’l-‘arşi’l-‘azîm ve’l-hamdü li’llahi rabbi’l-‘âlemîn.",
    anlam: "Allah’ım! Bedenime sağlık ver, gözüme sağlık ver, sağlığı benim varisim kıl. Halîm ve kerîm olan Allah’tan başka ilah yoktur. Ulu arşın sahibi Allah’ı noksan sıfatlardan tenzih ederim. Her türlü övgü âlemlerin Rabbi Allah’a mahsustur.",
    kaynak: "Tirmizî, Deavât, 66"
  },
  {
    baslik: "Hidayet ve İffet İstemi",
    arapca: "اللَّهُمَّ إِنِّى أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
    okunus: "Allahümme innî es'elükel-hüdâ ve’t-tüka ve’l-‘afafe ve’l-ğınâ.",
    anlam: "Allah’ım! Senden hidayet, takva, iffet ve gönül zenginliği isterim.",
    kaynak: "Müslim, Zikir, 72"
  },
  {
    baslik: "Bağışlanma ve Rızık",
    arapca: "اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي",
    okunus: "Allahummeğfirli verhamni vehdini ve 'âfini verzukni.",
    anlam: "Allah’ım! Beni bağışla, bana merhamet et, bana hidayet nasip eyle, bana âfiyet ve hayırlı rızık ver.",
    kaynak: "Müslim, Zikir, 35"
  },
  {
    baslik: "Faydalı İlim İstemi",
    arapca: "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا وَالْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ وَأَعُوذُ بِاللَّهِ مِنْ حَالِ أَهْلِ النَّارِ",
    okunus: "Allahümme'nfa'nî bima 'allemtenî ve 'allimnî ma yenfeunî ve zidnî 'ilmen, elhamdülillahi 'alâ külli hâlin ve e'uzü billahi min hâli ehli'n-nâri.",
    anlam: "Allah’ım! Bana öğrettiğin ilim ile beni faydalandır, bana fayda verecek ilmi öğret ve benim ilmimi artır. Her hâl üzere Allah’a hamd olsun.",
    kaynak: "Tirmizî, Deavât, 129"
  },
  {
    baslik: "Faydasız Şeylerden Sığınma",
    arapca: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ وَمِنْ قَلْبٍ لَا يَخْشَعُ وَمِنْ نَفْسٍ لَا تَشْبَعُ وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا",
    okunus: "Allahümme innî e'ûzü bike min 'ilmin la yenfe'u ve min kalbin lâ yahşe'u, ve min nefsin lâ teşbe'u ve min da'vetin lâ yüstecâbu leha.",
    anlam: "Allah’ım! Fayda vermeyen ilimden, huşu duymayan kalpten, kabul olunmayan duadan, doymayan nefisten sana sığınırım.",
    kaynak: "Müslim, Zikir, 73"
  },
  {
    baslik: "Nefsin Takvası",
    arapca: "اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا أَنْتَ وَلِيُّهَا وَمَوْلَاهَا",
    okunus: "Allahümme âti nefsî takvâha, ve zekkiha ente hayru men zekkaha, ente veliyyuha ve mevlaha.",
    anlam: "Allah’ım! Nefsime takvasını ver ve onu temizle, Sen temizleyenlerin en hayırlısısın. Onun koruyucusu ve efendisi de sensin.",
    kaynak: "Müslim, Zikir, 73"
  },
  {
    baslik: "İyilikle Sevinmek",
    arapca: "اللَّهُمَّ اجْعَلْنِي مِنَ الَّذِينَ إِذَا أَحْسَنُوا اسْتَبْشَرُوا وَإِذَا أَسَاءُوا اسْتَغْفَرُوا",
    okunus: "Allahümme'c'alnî mine'llezîne iza ehsenu 's-tebşeru ve iza esâu'stağferû.",
    anlam: "Allah’ım! Beni iyilik işledikleri zaman sevinen ve kötülük yaptıkları zaman bağışlanma dileyen kullarından eyle.",
    kaynak: "İbn Mâce, Edeb, 57"
  },
  {
    baslik: "Nefse Bırakmama Duası",
    arapca: "اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ وَأَصْلِحْ لِي شَأْنِي كُلَّهُ لَا إِلَهَ إِلَّا أَنْتَ",
    okunus: "Allahümme rahmeteke ercû felâ tekilnî ila nefsî tarfate ‘aynin ve aslih lî şe'nî küllehü lâ ilâhe illa ente.",
    anlam: "Ey Allah’ım! Senin rahmetini umuyorum, beni göz açıp kapayıncaya kadar nefsimle baş başa bırakma. Halimi tümüyle düzelt.",
    kaynak: "Ebu Dâvûd, Edeb, 110"
  },
  {
    baslik: "Nifak ve Kötü Ahlak",
    arapca: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الشِّقَاقِ وَالنِّفَاقِ وَسُوءِ الْأَخْلَاقِ",
    okunus: "Allahümme innî e'uzü bike mine'ş-şikaki ve'n-nifaki ve sûi'l-ahlâki.",
    anlam: "Allah’ım! Haktan ayrılmaktan, iki yüzlülükten ve kötü ahlaktan sana sığınırım.",
    kaynak: "Ebû Davud, Vitr, 32"
  },
  {
    baslik: "Muhabbet Duası",
    arapca: "اللَّهُمَّ ارْزُقْنِي حُبَّكَ وَحُبَّ مَنْ يَنْفَعُنِي حُبُّهُ عِنْدَكَ",
    okunus: "Allahümme'rzuknî hubbeke ve hubbe men yenfeunî hubbuhu 'indeke.",
    anlam: "Allah’ım! Bana kendi sevgini ve Senin yanında sevgisi bana fayda verecek kimsenin sevgisini ver.",
    kaynak: "Tirmizî, Deavât, 73"
  },
  {
    baslik: "Ailenin Hayırlısı",
    arapca: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ صَالِحِ مَا تُؤْتِي النَّاسَ مِنَ الْمَالِ وَالْأَهْلِ وَالْوَلَدِ غَيْرَ الضَّالِّ وَلَا الْمُضِلِّ",
    okunus: "Allahümme innî eselüke min salihi ma tü’ti’n-nâse mine’l-mali ve’l-ehli ve’l-veledi gayri’d-dâlli vele’l mudilli.",
    anlam: "Allah’ım! Mal, aile, çocuk olarak insanlara verdiklerinin hayırlısını dilerim, sapıtan ve saptıranları değil.",
    kaynak: "Tirmizî, Deavât, 124"
  },
  {
    baslik: "Kalplerin Telifi",
    arapca: "اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا وَاهْدِنَا سُبُلَ السَّلَامِ وَنَجِّنَا مِنَ الظُّلُمَاتِ إِلَى النُّورِ",
    okunus: "Allahümme elif beyne kulubinâ ve aslih zâte beyninâ ve’hdinâ sübüle’sselâmi ve neccinâ mi-ne’z-zulümâti ile’n-nûri.",
    anlam: "Allah’ım! Kalplerimizi birleştir. Aramızı düzelt ve bizi kurtuluş yollarına ilet. Bizi karanlıklardan aydınlığa çıkar.",
    kaynak: "Ebu Dâvûd, Salât, 182"
  },
  {
    baslik: "Dünya ve Ahiret Islahı",
    arapca: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي",
    okunus: "Allahümme aslih lî dinî ellezî hüve ‘ismetu emrî, ve aslih lî dünyâye elletî fîhâ meâşî, ve aslih lî ahireti elletî fîhâ meadî.",
    anlam: "Allah’ım! Dinimi güzelce yaşat, dünyamı düzelt ve ahiretimi hazırla ki o benim son durağımdır.",
    kaynak: "Müslim, Zikir, 71"
  },
  {
    baslik: "Seyyidül İstigfar",
    arapca: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لeke بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    okunus: "Allâhümme ente Rabbî lâ ilâhe illâ ente halaktenî ve ene abdüke ve ene alâ ahdike ve vâ’dike mesteda’tü eûzü bike min şerri mâ sana’tü ebû ü leke bi-ni’metike aleyye ve ebû ü bi zenbî fağfirlî fe innehû lâ yağfiruz-zünûbe illâ ente.",
    anlam: "Allah’ım! Sen benim Rabbimsin! Beni Sen yarattın. Ben Senin kulunum; gücüm yettiğince sana verdiğim sözde durmaktayım. Günahlarımı itiraf eder, affını dilerim.",
    kaynak: "Buhârî, Deavât, 2"
  },
  {
    baslik: "Kapsamlı Bağışlanma",
    arapca: "اللَّهُمَّ اغْفِرْ لِي خَطِيئَتِي وَجَهْلِي وَإِسْرَافِي فِي أَمْرِي وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي",
    okunus: "Allâhümmağfirlî hatîetî ve cehlî ve isrâfî fî emrî ve mâ ente a‘lemü bihî minnî.",
    anlam: "Allah’ım! Günahlarımı, bilgisizlik yüzünden yaptıklarımı, işimdeki aşırılıkları ve benden daha iyi bildiğin bütün kusurlarımı bağışla.",
    kaynak: "Buhârî, Deavât, 60"
  },
  {
    baslik: "Hatalardan Arınma",
    arapca: "اللَّهُمَّ اغْسِلْ خَطَايَايَ بِمَاءِ الثَّلْجِ وَالْبَرَدِ وَنَقِّ قَلْبِي مِنَ الْخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الْأَبْيَضَ مِنَ الدَّنَسِ",
    okunus: "Allahümmeğsil hatâyâye bimâi’sselci ve’l-beredi ve nakki kalbî mine’l-hatâyâ kemâ nekkayte’sevbe’l-ebyeda mine’d-denesi.",
    anlam: "Allah’ım! Hatalarımı kar ve soğuk su ile temizle. Beyaz elbiseyi kirden temizlediğin gibi kalbimi de hatalardan arındır.",
    kaynak: "Müslim, Zikir, 49"
  },
  {
    baslik: "İftar Duası",
    arapca: "اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
    okunus: "Allahümme leke sumtü ve ‘alâ rızkıke eftartü",
    anlam: "Allah’ım! Senin rızân için oruç tuttum. Senin rızkınla orucumu açıyorum.",
    kaynak: "Ebû Dâvûd, Savm, 22"
  },
  {
    baslik: "Zikir, Şükür ve İbadet",
    arapca: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    okunus: "Allahümme einnî ala zikrike ve şükrike ve hüsni ibadetik",
    anlam: "Allah’ım! Seni zikretmek, nimetlerine şükretmek ve sana en güzel biçimde ibadet etmek konusunda bana yardım et.",
    kaynak: "İbn Huzeyme, Dua, No:751; Hâkim, No: 1838"
  },
  {
    baslik: "Salih Amel ve İhlas",
    arapca: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رَحْمَةً مِنْ عِنْدِكَ تَهْدِي بِهَا قَلْبِي وَتَجْمَعُ بِهَا أَمْرِي...",
    okunus: "Allahümme innî es’elüke rahmeten min indike tehdi bihâ kalbi ve tecmau bihâ emri ve telümmü bihâ şa’sî ve tuslihu bihâ gâibî ve terfeu bihâ şâhidî ve tüzekki bihâ amelî ve tülhimünî bihâ rüşdî ve terüddü bihâ halfetî ve ta’sımunî bihâ min külli sûin.",
    anlam: "Allah’ım! Katından öyle bir rahmet istiyorum ki, onunla kalbime hidayet, işlerime nizam, dağınıklığıma tertip ver. Bana öyle bir iman ver ki, bir daha küfür ihtimali kalmasın.",
    kaynak: "Tirmizi, Deavât, 30"
  },
  {
    baslik: "Kalplerin Sabit Kalması",
    arapca: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    okunus: "Yâ Mukallibel Kulûbi Sebbit Kalbî 'Alâ Dînik",
    anlam: "Ey kalpleri hâlden hâle çeviren Allah’ım! Benim kalbimi dininde sabit kıl!",
    kaynak: "Tirmizî, Kader, 7"
  },
  {
    baslik: "Hidayet ve Gönül Zenginliği",
    arapca: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
    okunus: "Allahümme innî es'elükel-hüdâ ve't-tüka ve'l-'afafe ve'l-ğınâ",
    anlam: "Allah'ım! Senden hidayet, takva, iffet ve gönül zenginliği isterim.",
    kaynak: "Müslim, Zikir, 72"
  },
  {
    baslik: "Ezan Duası",
    arapca: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ",
    okunus: "Allahumme Rabbe hezihi’d-da’veti’t-tâmme. Vesselatil kâimeti âti Muhammedenil vesilete vel fazîlete vebashu makâmen Mahmudenillezi veadteh.",
    anlam: "Ey bu eksiksiz davetin ve kılınan namazın Rabbi! Hz. Muhammed’e Vesile’yi ve fazileti ver. Onu vaadettiğin Makâm-ı Mahmûd’a ulaştır!",
    kaynak: "Buhârî, Ezân, 8"
  },
  {
    baslik: "Nurlanmak İçin Dua",
    arapca: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا...",
    okunus: "Allâhümmec’al fî kalbî nûrâ ve fî basarî nûrâ, ve fî sem’î nûrâ ve ‘an yemînî nûrâ ve ‘an yesârî nûrâ ve fevkî nûrâ ve tahtî nûrâ ve emâmî nûrâ ve halfî nûrâ, vec’allî nûrâ.",
    anlam: "Allah’ım! Kalbime, gözüme, kulağıma, sağıma, soluma, üstüme, altıma, önüme ve arkama nur ver; bana büyük bir nur ihsan eyle!",
    kaynak: "Buhârî, Deavât, 9"
  },
  {
    baslik: "Rabbimizin Sevgisi",
    arapca: "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ وَالْعَمَلَ الَّذِي يُبَلِّغُنِي حُبَّكَ",
    okunus: "Allahümme innî es'eluke hubbeke ve hubbe men yuhibbuke ve'l-amele’l-lezi yübelliğuni hubbeke.",
    anlam: "Allah'ım! Senden seni sevmeyi, seni sevenleri sevmeyi ve senin sevgine ulaştıracak amelleri sevmeyi dilerim.",
    kaynak: "Tirmizî, Daavât, 73"
  },
  {
    baslik: "Helal Rızık Talebi",
    arapca: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنİ بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    okunus: "Allâhümmekfinî bihelâlike an harâmik, ve ağninî bifazlike ammen sivâk.",
    anlam: "Allah'ım! Bana helal rızık nasip ederek haramlardan koru! Lütfunla beni senden başkasına muhtaç etme!",
    kaynak: "Tirmizî, Daavât, 111"
  },
  {
    baslik: "Af ve Afiyet",
    arapca: "اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي",
    okunus: "Allahummağfirli verhamni vehdini ve afıni verzukni",
    anlam: "Allah'ım, beni bağışla, bana merhamet et, rızanı kazandıracak işler yaptır, bana afiyet ve hayırlı rızık ver.",
    kaynak: "Müslim, Zikir, 35"
  },
  {
    baslik: "Kötü Ahlaktan Sığınma",
    arapca: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ مُنْكَرَاتِ الْأَخْلَاقِ وَالْأَعْمَالِ وَالْأَهْوَاءِ",
    okunus: "Allahümme innî e'ûzü bike min münkerâti'l-ahlâki ve'l-a'mâli ve'l-ehvâ.",
    anlam: "Allah'ım! Kötü ahlaklı olmaktan, fena işler yapmaktan ve yanlış inançlara sapmaktan sana sığınırım.",
    kaynak: "Tirmizî, Daavât, 126"
  },
  {
    baslik: "Hastalıklardan Korunma",
    arapca: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ وَالْجُنُونِ وَالْجُذَامِ وَمِنْ سَيِّئِ الْأَسْقَامِ",
    okunus: "Allahümme innî e'ûzü bike mine'l-berası ve'l-cünûni ve'l-cüzzâmi ve min seyyi'il-eskâm.",
    anlam: "Allah'ım! Alaca hastalığından, akıl rahatsızlığından, cüzzam illetinden ve kötü hastalıklardan sana sığınırım.",
    kaynak: "Ebû Dâvûd, Vitir, 32"
  },
  {
    baslik: "Seyyidül İstiğfar",
    arapca: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ...",
    okunus: "Allahümme ente Rabbî lâ ilahe illâ ente halaktenî ve ene abdüke ve ene alâ ahdike ve vâ’dike mes’tetâtü eûzü bike min şerri mâ sanâtü ebû’ü leke bi-nîmetike aleyye ve ebû’ü bizenbî fağfirlî feinnehû lâ yağfıruz-zünûbe illâ ente.",
    anlam: "Allah'ım! Sen benim Rabbimsin. Senden başka ilah yoktur. Beni sen yarattın. Ben senin kulunum. Senin emanına sımsıkı sarıldım. Sözümü ve ahdimi yerine getirmeye gücüm yettiğince gayret edeceğim. İşlediğim bütün günahlarımı sana itiraf ediyorum. Beni bağışla. Zira günahları ancak sen bağışlayabilirsin. Ey Rabbim! Beni doğru yola, Kendisinin nimetlerine razı olduğun, hidayete erdirilmiş ve iyilik yapan kullarının yoluna ilet.",
    kaynak: "Buhârî, Deavât, 2"
  },
  {
    baslik: "Yemek Duası",
    arapca: "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ غَيْرَ مَكْفِيٍّ وَلَا مُوَدَّعٍ وَلَا مُسْتَغْنًى عَنْهُ رَبَّنَا",
    okunus: "Elhamdülillahi kesiran dayyiben mübareken fihi ğeyra mekfiyyin velâ müvedde'in velâ müsteğnen a'nhü rabbena.",
    anlam: "Bize her türlü nimeti veren Rabbimize, eksilmeyen ve terk edilmeyen bir hamd ile şükrederiz.",
    kaynak: "Buhârî, Et’ime, 54"
  }
];

const grid = document.getElementById("hadisGrid");
const btn = document.getElementById("yenileHadis");

function karisik4() {
  return [...hadisDualari].sort(() => 0.5 - Math.random()).slice(0, 4);
}

function yukle() {
  grid.innerHTML = "";

  karisik4().forEach(dua => {
    const card = document.createElement("div");
    card.className = "dua-card";

    card.innerHTML = `
      <h3>${dua.baslik}</h3>
      <p class="dua-arapca">${dua.arapca}</p>
      <p class="dua-okunus">${dua.okunus}</p>
      <p class="dua-anlam">${dua.anlam}</p>
      <small class="dua-kaynak">${dua.kaynak}</small>
    `;

    grid.appendChild(card);
  });
}

yukle();
btn.addEventListener("click", yukle);
