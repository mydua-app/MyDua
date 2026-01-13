const sureSelect = document.getElementById("sureSelect");
const ayetList = document.getElementById("ayetList");

// Sureleri yükle
fetch("https://api.alquran.cloud/v1/surah")
  .then(res => res.json())
  .then(data => {
    data.data.forEach(sure => {
      const option = document.createElement("option");
      option.value = sure.number;
      option.textContent = `${sure.number}. ${sure.name} (${sure.englishName})`;
      sureSelect.appendChild(option);
    });
  });

// Sure seçilince ayetleri getir
sureSelect.addEventListener("change", () => {
  const sureNo = sureSelect.value;
  ayetList.innerHTML = "<p>Yükleniyor...</p>";

  Promise.all([
    fetch(`https://api.alquran.cloud/v1/surah/${sureNo}/ar.alafasy`).then(r => r.json()),
    fetch(`https://api.alquran.cloud/v1/surah/${sureNo}/tr.diyanet`).then(r => r.json())
  ]).then(([arapca, meal]) => {
    ayetList.innerHTML = "";

    arapca.data.ayahs.forEach((ayet, i) => {
      const div = document.createElement("div");
      div.className = "ayet-card";

      div.innerHTML = `
        <div class="ayet-head">Ayet ${ayet.numberInSurah}</div>
        <p class="ayet-arapca">${ayet.text}</p>
        <p class="ayet-meal">${meal.data.ayahs[i].text}</p>
        <button onclick="sesliOku('${ayet.audio}')">▶ Dinle</button>
      `;

      ayetList.appendChild(div);
    });
  });
});

// Sesli okuma
function sesliOku(url) {
  const audio = new Audio(url);
  audio.play();
                                                                          }
