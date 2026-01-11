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
