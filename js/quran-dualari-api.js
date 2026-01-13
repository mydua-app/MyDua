const duaAyetleri = [
  // Bakara
  "2:32","2:127","2:128","2:201","2:246","2:247","2:248","2:249","2:250",
  "2:255","2:285","2:286",

  // Âl-i İmrân
  "3:8","3:9","3:16","3:26","3:27","3:38","3:53","3:147",
  "3:190","3:191","3:192","3:193","3:194",

  // En'am
  "6:1","6:162",

  // Kehf
  "18:10",

  // A'raf
  "7:23","7:47","7:89","7:126","7:151","7:156","7:157",

  // Maide
  "5:114","5:116","5:117","5:118",

  // Hud
  "11:47","11:88",

  // Yusuf
  "12:33","12:101",

  // İbrahim
  "14:35","14:36","14:37","14:38","14:39","14:40","14:41",

  // İsra
  "17:23","17:24","17:80","17:111",

  // Tevbe
  "9:129",

  // Yunus
  "10:85","10:86",

  // Tâhâ
  "20:25","20:26","20:27","20:28","20:29","20:30","20:31",
  "20:32","20:33","20:34","20:35","20:114",

  // Mü'minun
  "23:26","23:28","23:29","23:93","23:94","23:97","23:98",
  "23:109","23:118",

  // Furkan
  "25:65","25:66","25:74",

  // Şu'ara
  "26:83","26:84","26:85","26:86","26:87","26:88","26:89",
  "26:118","26:169",

  // Neml
  "27:19","27:44",

  // Enbiya
  "21:83","21:87","21:89","21:112",

  // Ankebut
  "29:30",

  // Kamer
  "54:10",

  // Kasas
  "28:16","28:17","28:21","28:24",

  // Sebe'
  "34:1","34:2",

  // Sad
  "38:35","38:41",

  // Zuhruf
  "43:13","43:14",

  // Mümtehine
  "60:4","60:5",

  // Tahrim
  "66:8","66:11",

  // Saffat
  "37:100",

  // Fatır
  "35:34","35:35",

  // Zümer
  "39:46",

  // Mü'min
  "40:7","40:8","40:9","40:44",

  // Ahkaf
  "46:15",

  // Haşr
  "59:10","59:22","59:23","59:24"
];

const duaList = document.getElementById("duaList");
duaList.innerHTML = "<p>Dualar yükleniyor...</p>";

duaList.innerHTML = "";

duaAyetleri.forEach(ref => {
  fetch(`https://api.alquran.cloud/v1/ayah/${ref}/editions/quran-uthmani,en.transliteration,tr.diyanet`)
    .then(res => res.json())
    .then(data => {
      const arapca = data.data[0].text;
      const okunuş = data.data[1].text;
      const meal = data.data[2].text;

      const card = document.createElement("div");
      card.className = "dua-card";

      card.innerHTML = `
        <h3>${ref}</h3>
        <p class="dua-arapca">${arapca}</p>
        <p class="dua-okunus">${okunuş}</p>
        <p class="dua-anlam">${meal}</p>
      `;

      duaList.appendChild(card);
    })
    .catch(err => console.error("Hata:", ref, err));
});
