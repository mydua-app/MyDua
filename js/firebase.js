// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAOd3MagxjtjTkiNWFV8-KX8HRWoTU_5ak",
  authDomain: "mydua-8a36c.firebaseapp.com",
  projectId: "mydua-8a36c",
  storageBucket: "mydua-8a36c.firebasestorage.app",
  messagingSenderId: "500065129002",
  appId: "1:500065129002:web:47281c31b25926e2d96953"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Giriş
window.googleLogin = function () {
  signInWithPopup(auth, provider);
};

// Çıkış
window.googleLogout = function () {
  signOut(auth);
};

// Kullanıcı kontrolü
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Giriş yapıldı:", user.email);

    // Admin kontrolü
    if (user.email === "mydua571@gmail.com") {
      document.body.classList.add("admin");
      console.log("Admin girişi");
    }
  } else {
    console.log("Çıkış yapıldı");
  }
});
