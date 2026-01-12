import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  getRedirectResult
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0d3MagxitjTkiNWFV8-KX8HRWoTU_5ak",
  authDomain: "mydua-8a36c.firebaseapp.com",
  projectId: "mydua-8a36c",
  storageBucket: "mydua-8a36c.firebasestorage.app",
  messagingSenderId: "500065129002",
  appId: "1:500065129002:web:47281c31b25926e2d96953"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/* GİRİŞ */
window.googleLogin = function () {
  signInWithRedirect(auth, provider);
};

/* ÇIKIŞ */
window.googleLogout = function () {
  signOut(auth);
};

/* REDIRECT SONUCU */
getRedirectResult(auth).catch((error) => {
  console.error(error);
});

/* KULLANICI DURUMU */
onAuthStateChanged(auth, (user) => {
  const menu = document.getElementById("profileMenu");

  if (!menu) return;

  if (user) {
    menu.children[0].style.display = "none"; // giriş gizle
    menu.children[1].style.display = "block"; // çıkış göster
    console.log("Giriş yapıldı:", user.email);
  } else {
    menu.children[0].style.display = "block";
    menu.children[1].style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      signInWithRedirect(auth, provider);
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      signOut(auth);
    });
  }
});
