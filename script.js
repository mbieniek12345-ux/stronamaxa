// Kolory dla pierwszego przycisku (toggle tekst)
const koloryTekst = ["#008000", "#ff3300", "#0066ff", "#ff9900", "#9933ff"];
let kolorIndex = 0;

function toggleWiadomosc() {
    const wiad = document.getElementById('wiadomosc');
    if (wiad.style.opacity === "0" || wiad.style.opacity === "") {
        wiad.style.opacity = "1";
        wiad.style.transform = "translateY(0)";
        wiad.style.color = koloryTekst[kolorIndex % koloryTekst.length];
        kolorIndex++;
    } else {
        wiad.style.opacity = "0";
        wiad.style.transform = "translateY(20px)";
    }
}

// Drugi przycisk – licznik + animacja + baloniki
let licznik2 = 0;
const kolory = ["#0066ff", "#ff3300", "#33cc33", "#ff9900", "#9933ff"];

function klik2() {
    licznik2++;
    const licznikEl = document.getElementById("licznik2");
    const box = document.getElementById("box2");
    const body = document.body;

    // aktualizacja licznika
    licznikEl.innerText = "Kliknięto: " + licznik2 + " razy";

    // zmiana koloru licznik
    const kolor = kolory[licznik2 % kolory.length];
    licznikEl.style.color = kolor;

    // animacja powiększenia
    licznikEl.style.transform = "scale(1.3)";
    setTimeout(() => { licznikEl.style.transform = "scale(1)"; }, 200);

    // co 10 kliknięć – miganie sekcji
    if (licznik2 % 10 === 0) {
        const oldBg = box.style.background;
        box.style.background = "#fffa65";
        setTimeout(() => { box.style.background = oldBg || "#ffffff"; }, 500);
    }

    // po 20 kliknięciach – miganie całego tła strony
    if (licznik2 % 20 === 0) {
        const oldBodyBg = body.style.background;
        body.style.background = "#ffccff"; // cała strona różowa
        setTimeout(() => { body.style.background = oldBodyBg || "#f0f8ff"; }, 500);
    }

    // --- BALONIK +1 ---
    const balonik = document.createElement("span");
    balonik.innerText = "+1";
    balonik.style.position = "absolute";
    balonik.style.fontWeight = "bold";
    balonik.style.color = "#ff3300";
    balonik.style.fontSize = "16px";
    balonik.style.pointerEvents = "none";

    // Pozycja balonika – w centrum przycisku z małym losowym przesunięciem
    const rect = box.getBoundingClientRect();
    balonik.style.left = rect.left + rect.width/2 + (Math.random()*40 - 20) + "px";
    balonik.style.top = rect.top - 20 + window.scrollY + "px"; // uwzględniamy scroll

    balonik.style.transition = "all 1s ease";
    document.body.appendChild(balonik);

    // animacja unoszenia i znikania
    setTimeout(() => {
        balonik.style.top = parseInt(balonik.style.top) - 50 + "px";
        balonik.style.opacity = "0";
    }, 10);

    setTimeout(() => {
        document.body.removeChild(balonik);
    }, 1000);
}
// --- Tryb nocny / dzienny ---
let nocny = false;

function toggleNightMode() {
    const body = document.body;
    nocny = !nocny;
    if (nocny) {
        body.style.background = "#1a1a1a";
        body.style.color = "#ffffff";
        document.getElementById("toggleNight").innerText = "Tryb dzienny ☀️";
    } else {
        body.style.background = "#f0f8ff";
        body.style.color = "#000000";
        document.getElementById("toggleNight").innerText = "Tryb nocny 🌙";
    }
}

// --- Zegar na stronie ---
function aktualizujZegarek() {
    const teraz = new Date();
    const godzina = teraz.getHours().toString().padStart(2,"0");
    const minuta = teraz.getMinutes().toString().padStart(2,"0");
    const sekunda = teraz.getSeconds().toString().padStart(2,"0");
    document.getElementById("zegarek").innerText = `Aktualna godzina: ${godzina}:${minuta}:${sekunda}`;
}

// odpalamy zegarek co sekundę
setInterval(aktualizujZegarek, 1000);
aktualizujZegarek(); // od razu pokazuje czas
