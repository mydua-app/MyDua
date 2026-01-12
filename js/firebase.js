// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// 🔐 Firebase ayarların
const firebaseConfig = {
    apiKey: "AIzaSyA0d3MagxitjTkiNWFV8-KX8HRWoTU_5ak",
    authDomain: "mydua-8a36c.firebaseapp.com",
    projectId: "mydua-8a36c",
    storageBucket: "mydua-8a36c.firebasestorage.app",
    messagingSenderId: "500065129002",
    appId: "1:500065129002:web:47281c31b25926e2d96953"
};

// Firebase başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔑 Google ile giriş
window.googleLogin = function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Giriş başarılı:", result.user.email);
        })
        .catch((error) => {
            alert("Giriş hatası: " + error.message);
        });
};

// 🚪 Çıkış
window.googleLogout = function () {
    signOut(auth);
};

// 👤 Kullanıcı durumu
onAuthStateChanged(auth, (user) => {
    const profileBox = document.getElementById("profileBox");
    const profileName = document.getElementById("profileName");

    if (user) {
        profileBox.style.display = "flex";
        profileName.textContent = user.displayName;
    } else {
        profileBox.style.display = "none";
    }
});
