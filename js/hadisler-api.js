const hadisList = document.getElementById("hadisList");
const yenileBtn = document.getElementById("yenileHadisler");

// Türkçe hadisleri getir
function hadisleriGetir() {
  hadisList.innerHTML = "<p>Yükleniyor...</p>";

  fetch("https://hadeethenc.com/api/v1/hadeeths/list/?language=tr&per_page=4&page=1")
    .then(res => res.json())
    .then(data => {
      hadisList.innerHTML = "";

      data.data.forEach(hadis => {
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
      });
    })
    .catch(() => {
      hadisList.innerHTML = "<p>Hadisler yüklenemedi.</p>";
    });
}

// İlk yükleme
hadisleriGetir();

// Yenile
yenileBtn.addEventListener("click", hadisleriGetir);
