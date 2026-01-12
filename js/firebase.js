import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

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

window.googleLogin = function () {
    signInWithPopup(auth, provider)
        .catch(err => alert(err.message));
};

window.googleLogout = function () {
    signOut(auth);
};

onAuthStateChanged(auth, (user) => {
    const menu = document.getElementById("profileMenu");
    if (user) {
        menu.children[0].style.display = "none"; // giriş gizle
        menu.children[1].style.display = "block"; // çıkış göster
    } else {
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
});
