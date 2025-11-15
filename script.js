// Arrivée : mardi 18 novembre 2025 à 21h40
const arrival = new Date(2025, 10, 18, 21, 20, 0); 
// ⚠️ Mois 10 = novembre (car janvier = 0)

function updateCountdown() {
    const now = new Date();
    const diff = arrival - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "Elle est là ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const sec = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${days} jours • ${hours}h • ${mins}m • ${sec}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
