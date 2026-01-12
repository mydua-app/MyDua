function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    menu.style.left = menu.style.left === "0px" ? "-220px" : "0px";
}

function toggleProfileMenu() {
    const menu = document.getElementById("profileMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
