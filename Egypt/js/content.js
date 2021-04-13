// Vars
const $ = a => document.querySelector(a);
const $$ = a => document.querySelectorAll(a);

// Content Loader

const contentElem = document.querySelector("#body .content"), selectors = document.querySelectorAll("#body .selector button");

function moveSpan() {
        document.querySelector(".selector > span").style.width = `${document.querySelector("#body .selector button[active]").getBoundingClientRect().width}px`;
        document.querySelector(".selector > span").style.top = `${document.querySelector("#body .selector button[active]").offsetTop + document.querySelector("#body .selector button[active]").getBoundingClientRect().height}px`;
        document.querySelector(".selector > span").style.left = `${document.querySelector("#body .selector button[active]").offsetLeft}px`;
};moveSpan()

contentElem.querySelector(".aboutEG").setAttribute("active", "");

selectors.forEach(a => {
        a.addEventListener("click", function () {
                if (a.hasAttribute("active")) return;
                selectors.forEach(b => { b.removeAttribute("active") });
                a.setAttribute("active", "");
                changeContent(a.getAttribute("data-target"));
                moveSpan()
        });
});

function changeContent(target) {
        const targetElem = contentElem.querySelector(`.${target}`);
        document.querySelectorAll("#body .content > div").forEach(a => { a.removeAttribute("active") });
        targetElem.setAttribute("active", "");
};

// Anthem Changer
$$(".anthemSelectors button").forEach(btn => {
        btn.addEventListener("click", function () {
                if (this.hasAttribute("active")) return;
                $$(".anthemSelectors button[active]").forEach(a => { a.removeAttribute("active") });
                this.setAttribute("active", "");

                $(".anthem").innerHTML = "<div class='player'></div>";
                if (this.innerText == "1923") {
                        $(".anthem .player").innerHTML += `<iframe scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/599252532&color=%2303213b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`;
                        $(".anthem").innerHTML += `
<div>
    <h2 style="text-align: right;">كلمات نشيد "اسلمي يا مصر":</h2>
    <p><strong>اسلمي يا مصـرُ إنـنـي الـفِـدا &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;ذي
            يــدي إن مــدَّتِ الــدنـيـا يـدا</strong></p>
    <p><strong>أبـــدًا لـــن تــسـتــكـيـنــي أبـــدًا&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;إنــنـي أرجـــو مــع الـــيــوم غـــدا</strong></p>
    <p><strong>ومعي قلبـي وعزمـي للجـهاد&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ولـقـلـبي
            أنـتِ بـعـدَ الـدين ديــن</strong></p>
    <p><strong>لـــكِ يـــــا مـصـــرُ
            الــســــلامـــة&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            وســــــــلامًــــــــا يـــــــــــا بــــــــلادي</strong></p>
    <p><strong>إنْ رمـــى الـــدهـــرُ ســـهـــامَــه &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </strong><strong>&nbsp;</strong><strong>أتَّـــــقــــيـــــــهـــــــــا
            بـــــــفـــــــؤادي</strong></p>
    <p style="text-align: center;"><strong>واسـلـمـي فـي كــل حــيـن</strong></p>
    <p><strong>أنــا مـصـريٌّ بـنـاني مـن
            بـنـى&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; هـرمَ الـدهــرِ الـذي
            أعــيـا الـفــنـا </strong></p>
    <p><strong>وقْــفــةُ الأهــرامِ فـيـمـا
            بـيـنـنـا&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; لِــصُــروفِ الــدهــر
            وقــفــتـي أنا</strong></p>
    <p><strong>فـي دفـاعي وجـهـادي للـبـلاد&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            لا أمـــيــــلُ لا أمَـــــلُّ لا ألـــــيــــــن</strong></p>
    <p><strong>لـــكِ يـــــا مـصـــرُ الــســــلامـــة&nbsp; &nbsp; &nbsp; &nbsp;
            وســــــــلامًـــــــــا يــــــــــا بــــــــلادي</strong></p>
    <p><strong>إنْ رمـــى الـــدهـــرُ
            ســـهـــامَــه&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            أتَّـــــقــــيـــــــهـــــــــا بـــــــفــــــــؤادي</strong></p>
    <p style="text-align: center;"><strong>واسـلـمـي فـي كــل حــيـن</strong></p>
    <p><strong>وَيْـكَ يــا مَـنْ رامَ تَقْييدَ الفَـلَكْ&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;أىُّ نَـجْـمٍ في السَّما يخضعُ لَــكْ</strong></p>
    <p><strong>وطــنُ الـحُـرِّ سَـمًـا لا تُــمْـتَـلَـكْ&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;والــفــتـى الــحُــرُّ بــأُفْـقِــهِ مَـلَــكْ</strong></p>
    <p><strong>لا عَدَا يـا أرضَ مصـرٍ بِـكِ عَـاد&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;إنـنـا
            دونَ حِــمــاكِ أجـــمــعـــيـــن</strong></p>
    <p><strong>لـــكِ يـــــا مـصـــرُ الــســــلامـــة
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; وســــــــلامًــــــــا يـــــــــــا
            بــــــــلادي</strong></p>
    <p><strong>إنْ رمـــى الـــدهـــرُ ســـهـــامَــه
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; أتَّـــــقــــيـــــــهـــــــــا
            بـــــــفــــــــؤادي</strong></p>
    <p style="text-align: center;"><strong>واسـلـمـي فـي كــل حــيـن</strong></p>
    <p><strong>لــلــعُــلا أبــنـاءَ مـصــرٍ
            لــلــعُــلا&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; وبـمـصــرٍ شـرِّفُــوا
            الــمـسـتـقــبـلا</strong></p>
    <p><strong>وفِــدًا لــمـصــرنـا الــدنـيــا
            فــلا&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; نـــــــضـــــــــعُ
            الأوطـــــــانَ إلا أولًا</strong></p>
    <p><strong>جـانـبـي الأيـسـرُ قـلبُـهُ الـفـؤاد&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;وبـلادي
            هي لي قلـبـي الــيـمين</strong></p>
    <p><strong>لـــكِ يـــــا مـصـــرُ
            الــســــلامـــة&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            وســــــــلامًــــــــا يـــــــــــا بــــــــلادي</strong></p>
    <p><strong>إنْ رمـــى الـــدهـــرُ ســـهـــامَــه&nbsp; &nbsp; &nbsp; &nbsp;
            أتَّـــــقــــيـــــــهـــــــــا بـــــــفــــــــؤادي</strong></p>
    <p style="text-align: center;"><strong>واسـلـمـي فـي كــل حــيـن</strong></p>
</div>
            `;
                } else if (this.innerText == "1952") {
                        $(".anthem .player").innerHTML += `<iframe scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/599262918&color=%2303213b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`;
                        $(".anthem").innerHTML += `
<div>
    <h2 style="text-align: right;">كلمات نشيد "الحرية":</h2>
    <p><strong>كُــنْــتَ&nbsp;فـي صَـــمْتِــكَ&nbsp;مُــرْغَـــــمْ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;كُـــنْـــتَ&nbsp;فـي&nbsp; صَــــبْـــرِكَ&nbsp;مُــكْـــــرَه</strong></p>
    <p><strong>كُــنْــتَ&nbsp;فـي صَـــمْتِــكَ&nbsp;مُــرْغَـــــمْ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;كُـــنْـــتَ&nbsp;فـي&nbsp; صَــــبْـــرِكَ&nbsp;مُــكْـــــرَه</strong></p>
    <p><strong>فَــــتــــكـــــلَّـــــــمْ&nbsp;وتــــــــــألَّــــــــــــمْ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;وتَـــــعـــلَّـــــم&nbsp;كــــيــــف&nbsp;تَــــــكْــــــــرَه</strong></p>
    <p><strong>عِرْضُكَ الـغـالي على الظـالـــمِ&nbsp;</strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;هـانْ</strong><strong>&nbsp;ومـشى الـعـارُ إلـيه وإلـيــــكْ</strong></p>
    <p><strong>أرضكَ الحرةُ غطّــاهـا الهـــــوانْ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;وطــغى الـظـلمُ علـيـهـا وعـلـيــك</strong></p>
    <p><strong>قَـدِّم الآجـالَ قُـرْبـانـًا لـعِـرْضــــكْ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;اجعل العمرَ سِياجًا حولَ أرضـــكْ</strong></p>
    <p><strong>غـضـبـةً لـلـعِـرْضِ لـلأرضِ لـــنـا</strong><strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;غـضـبـةً تـبــعــثُ فـيــنــا مـجــدَنـــا</strong></p>
    <p><strong>وإذا مــا هـــتــف الــهَـــوْل بــنــــا &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;فليَقُـلْ كل فتى إني هنا&nbsp;إني هنا</strong></p>
    <p><strong>أنـا يــا مــصـــرُ فَــتـــاكِ بــدمـــي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;أحمي حِماكِ ودمي مـلء ثـــراكِ</strong></p>
    <p><strong>أنـا يــا مــصـــرُ فَــتـــاكِ بــدمـــي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;أحمي حِماكِ ودمي مـلء ثـــراكِ</strong></p>
    <p style="text-align: center;"><strong>أنـا يــا مــصـــرُ فَــتـــاك</strong></p>
    <p><strong>أنــــــا ومـــــــــضٌ وبــــــــريـــــــــــق</strong><strong>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;أنــــا صــــــخــــــرٌ أنــــا جَــــــمْـــــــــرُ</strong></p>
    <p><strong>أنــــــا ومـــــــــضٌ وبــــــــريـــــــــــق&nbsp; &nbsp; &nbsp; &nbsp; أنــــا صــــــخــــــرٌ أنــــا جَــــــمْـــــــــرُ</strong></p>
    <p><strong>لَـــــفْـــحُ أنـــفـــاســـي حـــــريـــــقْ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ودمـــــــــي نـــــــــــــــار وثــــــــــــــــأرُ</strong></p>
    <p><strong>بــلـدي لا عــشـتُ إن لـم أفــتـــدِ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;يـومَــكِ الـحــرَّ بــيــومـــي وغَـــدي</strong></p>
    <p><strong>نــــازفـــــــًا مــــن دم أعــــدائــــــكَ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;مــا نـــزفـــوه مـــن أبــي أو ولــدي</strong></p>
    <p><strong>آخــذاً حــريتـــي من غـاصـبيهــــا&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ســالـبيهـــا وبــروحـــي أفــتــديـــــها</strong></p>
    <p><strong>هات أذنيك معي واسمع معي &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;صـيحــة اليقظـة تـجتـاح الجـمــوع</strong></p>
    <p><strong>صـيــحـة شـدت ظهـور الــركّــــع&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;ومـحت أصـداؤهـا عــار الخضـوع</strong></p>
    <p><strong>أنـا يــا مــصـــرُ فَــتـــاكِ بــدمــــي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;أحـمي حِماكِ ودمي مـلء ثـــراكِ</strong></p>
    <p><strong>أنـا يــا مــصـــرُ فَــتـــاكِ بــدمــــي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;أحـمي حِماكِ ودمي مـلء ثـــراكِ</strong></p>
    <p style="text-align: center;"><strong>أنـا يــا مــصـــرُ فَــتـــاكِ</strong></p>
    <p><strong>أنت إن لم تتحرر بيدي يا بلــدي&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;فسأمضي أتحرر من قيود الجسد</strong></p>
    <p><strong>أنت إن لم تتحرر بيدي يا بلــدي&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;فسأمضي أتحرر من قيود الجسد</strong></p>
    <p><strong>لا أبالـــي الــهــول بــل أعشـقـــه&nbsp; &nbsp; &nbsp; &nbsp;لا أبــالـيـــه وإن مـــت صــريــعــــاً</strong></p>
    <p><strong>إنــه لـــو لــــم يــكــــن أخــلــقــــــه&nbsp; &nbsp; &nbsp; &nbsp;لأرى فـيـــه ضـحــايــانــا جـميــعـــاً</strong></p>
    <p><strong>في دمـاهـم أمـل الـنيــل تـوحــد&nbsp; &nbsp; &nbsp; &nbsp;فـي دمـاهـم دم عيسى و محمـد</strong></p>
    <p><strong>في دمـاهـم أمـل الـنيــل تـوحــد&nbsp; &nbsp; &nbsp; &nbsp;فـي دمـاهـم دم عيسى و محمـد</strong></p>
    <p><strong>فـاحـترم بالثأر ذكرى شـهدائـــك&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;بـذلـوا أرواحـهــم بــذل الــسخـــي</strong></p>
    <p><strong>وانـتقـم إن هـنـا أذكـى دمائـــك&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;وهـنـــا أمـــي ، وأخــتـي ، وأخـــي</strong></p>
    <p><strong>أنـا يــا مــصـــرُ فَــتـــاكِ بــدمـــي&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;أحمي حِماكِ ودمي مـلء ثـــراكِ</strong></p>
    <p><strong>أنـا يــا مــصـــرُ فَــتـــاكِ بــدمـــي&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;أحمي حِماكِ ودمي مـلء ثـــراكِ</strong></p>
    <p style="text-align: center;"><strong>أنـا يــا مــصـــرُ فَــتـــاكِ</strong></p>
    <p><strong>أنت إن لم تتحرر بيدي يا بلــدي&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;فسأمضي أتحرر من قيود الجسد</strong></p>
    <p><strong>أنت إن لم تتحرر بيدي يا بلــدي&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;فسأمضي أتحرر من قيود الجسد</strong></p>
    <p><strong>لا أبالـــي الــهــول بــل أعشـقـــه&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;لا أبــالـيـــه وإن مـــت صــريــعــــاً</strong></p>
    <p><strong>إنــه لـــو لــــم يــكــــن أخــلــقــــــه&nbsp; &nbsp; &nbsp; &nbsp;لأرى فـيـــه ضـحــايــانــا جـميــعـــاً</strong></p>
    <p><strong>في دمـاهـم أمـل الـنيــل تـوحــد&nbsp; &nbsp; &nbsp; &nbsp;فـي دمـاهـم دم عيسى و محمـد</strong></p>
    <p><strong>في دمـاهـم أمـل الـنيــل تـوحــد&nbsp; &nbsp; &nbsp; &nbsp;فـي دمـاهـم دم عيسى و محمـد</strong></p>
    <p><strong>فـاحـترم بالثأر ذكرى شـهدائـــك&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;بـذلـوا أرواحـهــم بــذل الــسخـــي</strong></p>
    <p><strong>وانـتقـم إن هـنـا أذكـى دمائـــك&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;وهـنـــا أمـــي ، وأخــتـي ، وأخـــي</strong></p>
    <p><strong>أنـا يــا مــصـــرُ فَــتـــاكِ بــدمـــي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;أحمي حِماكِ ودمي مـلء ثـــراكِ</strong></p>
    <p><strong>أنـا يــا مــصـــرُ فَــتـــاكِ بــدمـــي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;أحمي حِماكِ ودمي مـلء ثـــراكِ</strong></p>
    <p style="text-align: center;"><strong>أنـا يــا مــصـــرُ فَــتـــاكِ</strong></p>
</div>
            `;
                } else if (this.innerText == "1960") {
                        $(".anthem .player").innerHTML += `<iframe scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/599266566&color=%2303213b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`;
                        $(".anthem").innerHTML += `
<div>
    <h2 style="text-align: right;">كلمات نشيد "والله زمان يا سلاحي":</h2>
    <p><strong>والله زمـــــان يـــــا ســـــلاحــي&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; اشـتـقــت لــك فـي كــفــاحـي</strong></p>
    <p><strong>انــطــق وقــول أنــا صــاحــي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; يــــــا حـــــــرب والله زمـــــــــــان</strong></p>
    <p><strong>والله زمـــــان يـــــا ســـــلاحــي&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; اشـتـقــت لــك فـي كــفــاحـي</strong></p>
    <p><strong>انــطــق وقــول أنــا صــاحــي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; يــــــا حـــــــرب والله زمـــــــــــان</strong></p>
    <p><strong>والله زمـــان علـــى الجـــنـــود&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; زاحـــفــــة بــــتــرعـــــد رعــــــود</strong></p>
    <p><strong>والله زمـــان علـــى الجـــنـــود&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; زاحـــفــــة بــــتــرعـــــد رعــــــود</strong></p>
    <p><strong>حـالـفة تـــروح لـــم تــــــعــــود&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; إلا بــــــنــــصـــــــر الــــــزمــــــان</strong></p>
    <p><strong>هِمّـــوا وضُـمّــوا الصـفـــوف&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; شـيـلوا الـحياة على الـكفوف</strong></p>
    <p><strong>هِمّـــوا وضُـمّــوا الصـفـــوف&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; شـيـلوا الـحياة على الـكفوف</strong></p>
    <p><strong>يــــاما الــعـــدو راح يـشــــوف</strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong><strong>مــنــكــم فـي نـار الـــمـــيــدان</strong></p>
    <p><strong>والله زمـــــان يـــــا ســـــلاحــي&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; اشـتـقــت لــك فـي كــفــاحـي</strong></p>
    <p><strong>انــطــق وقــول أنــا صــاحــي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; يــــــا حـــــــرب والله زمـــــــــــان</strong></p>
    <p><strong>يــا مــجـــــدنـــا يــا مــجـــــدنـــا&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;يـــا الـلـي اتـبــنـــيــت عــنـدنــا</strong></p>
    <p><strong>يــا مــجـــــدنـــا يــا مــجـــــدنـــا&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;يـــا الـلـي اتـبــنـــيــت عــنـدنــا</strong></p>
    <p><strong>بـشقـانا وكدنا&nbsp;بـشقـانا وكدنا&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; عـــمـــرك مـــا تــبــقـى هــوان</strong></p>
    <p><strong>هِمّـــوا وضُـمّــوا الصـفـــوف&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; شـيـلوا الـحياة على الـكفوف</strong></p>
    <p><strong>هِمّـــوا وضُـمّــوا الصـفـــوف&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; شـيـلوا الـحياة على الـكفوف</strong></p>
    <p><strong>يــــاما الــعـــدو راح يـشــــوف&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; مــنــكــم فـي نـار الـــمـــيــدان</strong></p>
    <p><strong>والله زمـــــان يـــــا ســـــلاحــي&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; اشـتـقــت لــك فـي كــفــاحـي</strong></p>
    <p><strong>انــطــق وقــول أنــا صــاحــي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; يــــــا حـــــــرب والله زمـــــــــــان</strong></p>
    <p><strong>مصر الحرة مـيــن يحميـــهـــا&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; نـــحـــمـــيــهــــا بــــســـلاحــــنـــا</strong></p>
    <p><strong>أرض الثورة مـيـن يــفـديـهــا&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; نــــفـــــديــــهـــــا بـــأرواحـــــنـــــا</strong></p>
    <p><strong>مصر الحرة مـيــن يحميـــهـــا&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; نـــحـــمـــيــهــــا بــــســـلاحــــنـــا</strong></p>
    <p><strong>أرض الثورة مـيـن يــفـديـهــا&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; نــــفـــــديــــهـــــا بـــأرواحـــــنـــــا</strong></p>
    <p><strong>الشــعـب بـيزحـف زي النـور&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; الشعب جبال الشعـب بحـور</strong></p> 
    <p><strong>بركـان غضبان بركـان بيـفور&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; زلـزال بـيـشق لهم في قـبــور</strong></p>
    <p><strong>الشــعـب بـيزحـف زي النـور&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; الشعب جبال الشعـب بحـور</strong></p>
    <p><strong>بركـان غضبان بركـان بيـفور&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; زلـزال بـيـشق لهم في قـبــور</strong></p>
    <p><strong>والله زمـــــان يـــــا ســـــلاحــي&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; اشـتـقــت لــك فـي كــفــاحـي</strong></p>
    <p><strong>انــطــق وقــول أنــا صــاحــي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; يــــــا حـــــــرب والله زمـــــــــــان</strong></p>
    <p><strong>والله زمـــــان يـــــا ســـــلاحــي&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; اشـتـقــت لــك فـي كــفــاحـي</strong></p>
    <p><strong>انــطــق وقــول أنــا صــاحــي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; يــــــا حـــــــرب والله زمـــــــــــان</strong></p>
</div>
                        `;

                } else if (this.innerText == "1979") {
                        $(".anthem .player").innerHTML += `<iframe scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/599276577&color=%2303213b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`;
                        $(".anthem").innerHTML += `
<div>
    <h2 style="text-align: right;">كلمات النشيد الوطني المصري "بلادي بلادي":</h2>
    <p><strong>بــلادي بــلادي بـــــلادي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; لــــــــكِ حُــــــبي وفــــــؤادي</strong></p>
    <p><strong>بــلادي بــلادي بـــــلادي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; لــــــــكِ حُــــــبي وفــــــؤادي</strong></p>
    <p><strong>مــصـــر يـــا أم البــــــلاد&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; أنـــت غـــايتـي والــــــمُـــراد</strong></p>
    <p><strong>وعـــلـى كــل الـــــعــبـاد&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; كــــم لنيـــــلك مـــن أيــادي</strong></p>
    <p><strong>بــلادي بــلادي بـــــلادي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; لــــــــكِ حُــــــبي وفــــــؤادي</strong></p>
    <p><strong>مـصـر أنـتِ أغــلى دُرَّة&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; فــوق جبيـــن الـدهـر غُـــرَّة</strong></p>
    <p><strong>يــا بـلادي عيشـي حُــرَّة&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; واسلــمـي رغـــم الأعــادي</strong></p>
    <p><strong>بــلادي بــلادي بـــــلادي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; لــــــــكِ حُــــــبي وفـــــؤادي</strong></p>
    <p><strong>مــصـر يا أرض النعـيم&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; سُــدْتِ بالمـــجـد الـــقـديـم</strong></p>
    <p><strong>مقصدي دفـع الـغريم&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; وعـــــلـــى الله اعــــتـمــادي</strong></p>
    <p><strong>بــلادي بــلادي بــــلادي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; لــــــــكِ حُــــــبي وفــــــؤادي</strong></p>
    <p><strong>مــــصـــر أولادك كــرام&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; أوفــيا يــــرعــــوا الـــــزمـــام</strong></p>
    <p><strong>نـــحـــن حــرب وســـلام&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; وفـــــــــداك يــــــــــا بـــــلادي</strong></p>
    <p><strong>سـوف تـحظى بالمرام&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;بــاتـحـــادهـم واتـــــحـــــادي</strong></p>
    <p><strong>بــلادي بــلادي بــــلادي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; لـــــــكِ حُــــــبي وفـــــــؤادي</strong></p>
</div>
                        `;
                };
        });
});


$$(".egTourists ul img").forEach(img => { img.outerHTML = `<div style="margin-top: 25px; text-align: center;">${img.outerHTML}</div>` });
