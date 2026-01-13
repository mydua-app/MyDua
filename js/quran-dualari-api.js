// SENİN VERDİĞİN TÜM DUALAR
const duaAyetleri = [
  "2:32","2:127","2:128","2:201","2:246","2:247","2:248","2:249","2:250",
  "2:255","2:285","2:286",

  "3:8","3:9","3:16","3:26","3:27","3:38","3:53","3:147",
  "3:190","3:191","3:192","3:193","3:194",

  "6:1","6:162",
  "18:10",

  "7:23","7:47","7:89","7:126","7:151","7:156","7:157",

  "5:114","5:116","5:117","5:118",

  "11:47","11:88",
  "12:33","12:101",

  "14:35","14:36","14:37","14:38","14:39","14:40","14:41",

  "17:23","17:24","17:80","17:111",

  "9:129",
  "10:85","10:86",

  "20:25","20:26","20:27","20:28","20:29","20:30","20:31",
  "20:32","20:33","20:34","20:35","20:114",

  "23:26","23:28","23:29","23:93","23:94","23:97","23:98",
  "23:109","23:118",

  "25:65","25:66","25:74",

  "26:83","26:84","26:85","26:86","26:87","26:88","26:89",
  "26:118","26:169",

  "27:19","27:44",

  "21:83","21:87","21:89","21:112",

  "29:30",
  "54:10",

  "28:16","28:17","28:21","28:24",

  "34:1","34:2",

  "38:35","38:41",

  "43:13","43:14",

  "60:4","60:5",

  "66:8","66:11",

  "37:100",

  "35:34","35:35",

  "39:46",

  "40:7","40:8","40:9","40:44",

  "46:15",

  "59:10","59:22","59:23","59:24"
];

// Sure isimleri
const sureler = {
  2:"Bakara",3:"Âl-i İmrân",5:"Mâide",6:"En'âm",7:"A'râf",9:"Tevbe",
  10:"Yûnus",11:"Hûd",12:"Yûsuf",14:"İbrahim",17:"İsrâ",18:"Kehf",
  20:"Tâhâ",21:"Enbiyâ",23:"Mü’minûn",25:"Furkan",26:"Şuara",
  27:"Neml",28:"Kasas",29:"Ankebût",34:"Sebe",35:"Fâtır",
  37:"Sâffât",38:"Sâd",39:"Zümer",40:"Mü’min",43:"Zuhruf",
  46:"Ahkâf",54:"Kamer",59:"Haşr",60:"Mümtehine",66:"Tahrîm"
};

const grid = document.getElementById("duaGrid");
const btn = document.getElementById("yenileBtn");

function rastgele4Sec() {
  return [...duaAyetleri].sort(() => 0.5 - Math.random()).slice(0, 4);
}

function dualariYukle() {
  grid.innerHTML = "";

  rastgele4Sec().forEach(ref => {
    fetch(`https://api.alquran.cloud/v1/ayah/${ref}/editions/quran-uthmani,en.transliteration,tr.diyanet`)
      .then(r => r.json())
      .then(d => {
        const [sureNo, ayetNo] = ref.split(":");

        const card = document.createElement("div");
        card.className = "dua-card";

        card.innerHTML = `
          <div class="dua-head">
            <span>${sureler[sureNo]}</span>
            <span>${ayetNo}. Ayet</span>
          </div>
          <p class="dua-arapca">${d.data[0].text}</p>
          <p class="dua-okunus">${d.data[1].text}</p>
          <p class="dua-anlam">${d.data[2].text}</p>
        `;

        grid.appendChild(card);
      });
  });
}

dualariiYukle = dualariYukle;
dualariiYukle();
btn.addEventListener("click", dualariiYukle);
