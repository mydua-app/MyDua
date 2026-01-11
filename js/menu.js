function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("active");
}

// VIDEO BITINCE SITEYI GOSTER
const video = document.getElementById("introVideo");
const intro = document.getElementById("videoIntro");
const site = document.getElementById("siteContent");

video.onended = () => {
    intro.style.display = "none";
    site.classList.remove("hidden");
};

// KURAN DUALARI (SURE:AYET)
const duaAyatlari = [
    "2:286",
    "20:114",
    "3:8",
    "7:23",
    "14:40",
    "23:118"
];

const duaList = document.getElementById("duaList");

if (duaList) {
    duaList.innerHTML = "";

    duaAyatlari.forEach(ref => {
        fetch(`https://api.alquran.cloud/v1/ayah/${ref}/editions/quran-simple,tr.diyanet`)
            .then(res => res.json())
            .then(data => {
                const arabic = data.data[0].text;
                const meaning = data.data[1].text;

                const card = document.createElement("div");
                card.className = "dua-card";

                card.innerHTML = `
                    <div class="dua-arabic">${arabic}</div>
                    <div class="dua-meaning">${meaning}</div>
                    <div class="dua-source">Ayet: ${ref}</div>
                `;

                duaList.appendChild(card);
            })
            .catch(() => {
                duaList.innerHTML += "<p>Bir hata oluştu.</p>";
            });
    });
                }
