// ============================================
// FLASHCARDS — Verbul LASSEN (refactor mai 2026)
// Claudia Toth · Annettes Deutschkurs · A2 · 32 carduri
// Substantive cu Sg + Pl (regula 13) · Audio Hedda pre-generat
// ⚠️ ZERO ghilimele interne — CAPS pentru emfază
// ============================================

const flashcardsData = [
    // ===== 10 FORME CONJUGATE LASSEN =====
    { de: "ich lasse", ro: "eu las · Präsens P1 sg (regulat)", audio: "audio/cards/01-ich-lasse.wav" },
    { de: "du lässt", ro: "tu lași · Präsens P2 sg cu UMLAUT (capcana TARE!)", audio: "audio/cards/02-du-laesst.wav" },
    { de: "er lässt", ro: "el lasă · Präsens P3 sg cu UMLAUT", audio: "audio/cards/03-er-laesst.wav" },
    { de: "wir lassen", ro: "noi lăsăm · Präsens P1 pl", audio: "audio/cards/04-wir-lassen.wav" },
    { de: "ihr lasst", ro: "voi lăsați · Präsens P2 pl FĂRĂ Umlaut", audio: "audio/cards/05-ihr-lasst.wav" },
    { de: "ich ließ", ro: "eu lăsam · Präteritum P1 sg (radical ließ)", audio: "audio/cards/06-ich-liess.wav" },
    { de: "er ließ", ro: "el lăsa · Präteritum P3 sg (identic cu P1)", audio: "audio/cards/07-er-liess.wav" },
    { de: "wir ließen", ro: "noi lăsam · Präteritum P1 pl", audio: "audio/cards/08-wir-liessen.wav" },
    { de: "ich habe gelassen", ro: "am lăsat (singur) · Perfekt cu gelassen", audio: "audio/cards/09-habe-gelassen.wav" },
    { de: "ich habe gehen lassen", ro: "am lăsat să plece · Perfekt cu lassen + infinitiv dublu", audio: "audio/cards/10-gehen-lassen.wav" },

    // ===== 8 EXPRESII UZUALE =====
    { de: "Lass das!", ro: "Las-o baltă! / Renunță! · imperativ scurt", audio: "audio/cards/11-lass-das.wav" },
    { de: "Lass mich in Ruhe!", ro: "Lasă-mă în pace! · imperativ enervat", audio: "audio/cards/12-lass-mich-ruhe.wav" },
    { de: "Lass uns gehen!", ro: "Hai să mergem! · sugestie de grup", audio: "audio/cards/13-lass-uns-gehen.wav" },
    { de: "Lass mich denken.", ro: "Lasă-mă să mă gândesc. · pauză în conversație", audio: "audio/cards/14-lass-mich-denken.wav" },
    { de: "Das lässt sich machen.", ro: "Asta se poate face. · pasiv natural cu sich", audio: "audio/cards/15-laesst-sich-machen.wav" },
    { de: "Das lässt sich nicht sagen.", ro: "Asta nu se poate spune. · negație", audio: "audio/cards/16-laesst-sich-nicht-sagen.wav" },
    { de: "Ich lasse dich gehen.", ro: "Te las să pleci. · sensul 1 a permite", audio: "audio/cards/17-lasse-dich-gehen.wav" },
    { de: "Ich lasse das Auto reparieren.", ro: "Las mașina la reparat. · sensul 2 cauzativ", audio: "audio/cards/18-auto-reparieren.wav" },

    // ===== 8 SUBSTANTIVE CONTEXTUAL CAUZATIV cu Sg + Pl =====
    { de: "das Auto · die Autos", ro: "mașina · mașinile (neutru +s)", audio: "audio/cards/19-auto.wav" },
    { de: "das Haus · die Häuser", ro: "casa · casele (neutru +Umlaut +er)", audio: "audio/cards/20-haus.wav" },
    { de: "die Mutter · die Mütter", ro: "mama · mamele (feminin +Umlaut)", audio: "audio/cards/21-mutter.wav" },
    { de: "der Friseur · die Friseure", ro: "coaforul · coaforii (masculin +e)", audio: "audio/cards/22-friseur.wav" },
    { de: "der Mechaniker · die Mechaniker", ro: "mecanicul · mecanicii (masculin invariabil)", audio: "audio/cards/23-mechaniker.wav" },
    { de: "die Reparatur · die Reparaturen", ro: "reparația · reparațiile (feminin +en)", audio: "audio/cards/24-reparatur.wav" },
    { de: "der Termin · die Termine", ro: "programarea · programările (masculin +e)", audio: "audio/cards/25-termin.wav" },
    { de: "die Haare", ro: "părul · 🚨 PLURAL TANTUM în germană (niciodată singular)", audio: "audio/cards/26-haare.wav" },

    // ===== 6 VERBE-SATELIT CAUZATIVE =====
    { de: "reparieren", ro: "a repara · regulat · haben (hat repariert) · FĂRĂ ge- la Partizip", audio: "audio/cards/27-reparieren.wav" },
    { de: "schneiden", ro: "a tăia · TARE · haben (hat geschnitten) · die Haare schneiden lassen", audio: "audio/cards/28-schneiden.wav" },
    { de: "bauen", ro: "a construi · regulat · haben (hat gebaut)", audio: "audio/cards/29-bauen.wav" },
    { de: "ausgehen", ro: "a ieși (în oraș) · separabil TARE · sein (ist ausgegangen)", audio: "audio/cards/30-ausgehen.wav" },
    { de: "schlafen", ro: "a dormi · TARE · haben (hat geschlafen) · du schläfst", audio: "audio/cards/31-schlafen.wav" },
    { de: "gehen", ro: "a merge · TARE · sein (ist gegangen) · ich ging", audio: "audio/cards/32-gehen.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const c = document.getElementById('flashcards-container');
    if (!c) return;
    c.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 32 carduri Verbul LASSEN</strong> — 10 forme conjugate + 8 expresii + 8 substantive cauzative (Sg+Pl) + 6 verbe-satelit.<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție Hedda. Folosește săgețile pentru navigare.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = flashcardsData[currentCardIndex];
    const deEl = document.getElementById('flashcard-de');
    const roEl = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const fc = document.getElementById('flashcard');
    if (deEl) deEl.textContent = card.de;
    if (roEl) roEl.textContent = card.ro;
    if (counter) counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (fc) fc.classList.remove('flipped');
}

function flipCard() {
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
    updateFlashcard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    updateFlashcard();
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    if (card.audio) {
        currentAudio = new Audio(card.audio);
        currentAudio.play().catch(() => playWithTTS(card.de));
    } else {
        playWithTTS(card.de);
    }
}

function playWithTTS(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'de-DE';
        u.rate = 0.82;
        window.speechSynthesis.speak(u);
    }
}

buildFlashcards();
