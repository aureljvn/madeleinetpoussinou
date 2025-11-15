/* ============================================
   BURGER MENU MOBILE
   ============================================ */

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    mobileMenu.classList.toggle("show");
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        burger.classList.remove("open");
        mobileMenu.classList.remove("show");
    });
});


/* ============================================
   DROPDOWN (CLIQUE POUR OUVRIR)
   ============================================ */

const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

dropbtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", () => {
    dropdownContent.style.display = "none";
});


/* ============================================
   COMPTE À REBOURS ARRIVÉE MADELEINE
   ============================================ */

// Date d'arrivée : mardi 18 novembre 2025, 21h40
const arrivalDate = new Date("November 18, 2025 21:40:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = arrivalDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "Elle est arrivée ❤️";
        return;
    }

    const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days} jours • ${hours} h • ${minutes} min • ${seconds} sec`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
