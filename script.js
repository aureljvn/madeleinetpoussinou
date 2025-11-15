// COMPTE À REBOURS
const targetDate = new Date("2025-11-18T21:40:00").getTime();

setInterval(() => {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "Elle est arrivée ❤️";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${d} jours ${h}h ${m}m ${s}s`;
}, 1000);


// MENU MOBILE
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
