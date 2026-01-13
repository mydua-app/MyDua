const hadisList = document.getElementById("hadisList");
const yenileBtn = document.getElementById("yenileHadisler");

// Kullanılacak kaynak
const API_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/tur-bukhari.json";

let tumHadisler = [];

function rastgeleSec(arr, adet) {
  return arr.sort(() => 0.5 - Math.random()).slice(0, adet);
}

function hadisleriGoster() {
  hadisList.innerHTML = "";

  const secilenler = rastgeleSec(tumHadisler, 4);

  secilenler.forEach(hadis => {
    const card = document.createElement("div");
    card.className = "dua-card";

    card.innerHTML = `
      <p class="dua-arapca">${hadis.text}</p>
      <small class="dua-kaynak">${hadis.reference}</small>
    `;

    hadisList.appendChild(card);
  });
}

function hadisleriGetir() {
  hadisList.innerHTML = "<p>Hadisler yükleniyor...</p>";

  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      tumHadisler = data.hadiths;
      hadisleriGoster();
    })
    .catch(() => {
      hadisList.innerHTML = "<p>Hadisler yüklenemedi.</p>";
    });
}

// İlk yükleme
hadisleriGetir();

// Yenile butonu
yenileBtn.addEventListener("click", hadisleriGoster);
