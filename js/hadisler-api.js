const hadisList = document.getElementById("hadisList");
const yenileBtn = document.getElementById("yenileHadisler");

function hadisleriGetir() {
  hadisList.innerHTML = "<p>Yükleniyor...</p>";

  hadisList.innerHTML = "";

  // 4 rastgele hadis al
  for (let i = 0; i < 4; i++) {
    fetch("https://hadeethenc.com/api/v1/hadeeths/random/?language=tr")
      .then(res => res.json())
      .then(data => {
        const hadis = data.data;

        const card = document.createElement("div");
        card.className = "dua-card";

        card.innerHTML = `
          <p class="dua-arapca">${hadis.hadeeth_ar}</p>
          <p class="dua-anlam">${hadis.hadeeth_tr}</p>
          <small class="dua-kaynak">
            ${hadis.source} – ${hadis.book}
          </small>
        `;

        hadisList.appendChild(card);
      })
      .catch(() => {
        hadisList.innerHTML = "<p>Hadisler yüklenemedi.</p>";
      });
  }
}

// İlk açılış
hadisleriGetir();

// Yenile butonu
yenileBtn.addEventListener("click", hadisleriGetir);
