// BURGER MENU
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("open");
}

// COMPTE À REBOURS
const eventDate = new Date("2025-11-18T21:40:00").getTime();

setInterval(() => {
    const now = Date.now();
    const diff = eventDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "Elle est là ❤️";
        return;
    }

    const j = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${j} jours ${h}h ${m}m ${s}s`;
}, 1000);
