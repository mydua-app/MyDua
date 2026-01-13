// ÖNCE BUNLARI BELİRLEYELİM (örnek dua ayetleri)
const duaReferences = [
    "2:286",
    "3:8",
    "7:23",
    "14:40",
    "20:114",
    "23:118"
];

// Liste kutusunu bul
const duaList = document.getElementById("duaList");
duaList.innerHTML = ""; // başlangıçta temizle

// API’den JSON çekme
duaReferences.forEach(ref => {
    fetch(`https://api.alquran.cloud/v1/ayah/${ref}/editions/quran-uthmani,tr.diyanet`)
    .then(response => response.json())
    .then(data => {
        // data.data[0] ➜ Arapça
        // data.data[1] ➜ Türkçe meal
        const arabic = data.data[0].text;
        const meaning = data.data[1].text;

        const card = document.createElement("div");
        card.className = "dua-card";

        card.innerHTML = `
            <h3>${ref}</h3>
            <p class="dua-arapca">${arabic}</p>
            <p class="dua-anlam">${meaning}</p>
        `;
        duaList.appendChild(card);
    })
    .catch(err => {
        console.error("Dua yüklenirken hata:", err);
    });
});
