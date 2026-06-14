// ============================================
// EXERCIȚII — Verbul LASSEN (refactor mai 2026)
// Claudia Toth · A2 · 5 patterns
// normalizeAnswer robust (fold diacritice RO + separator flex)
// ============================================

function normalizeAnswer(s) {
    return (s || '')
        .toLowerCase()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim()
        .trim();
}

// ============================================
// EX 1: Conjugă LASSEN la Präsens (6 itemi)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Ich ____ dich gehen.', accept: ['lasse'], correct: 'lasse', hint: 'pers. 1 sg' },
    { id: 'b', sentence: 'Du ____ mich nicht schlafen.', accept: ['laesst', 'lässt'], correct: 'lässt', hint: 'pers. 2 sg cu UMLAUT' },
    { id: 'c', sentence: 'Er ____ das Auto reparieren.', accept: ['laesst', 'lässt'], correct: 'lässt', hint: 'pers. 3 sg cu UMLAUT' },
    { id: 'd', sentence: 'Wir ____ die Kinder spielen.', accept: ['lassen'], correct: 'lassen', hint: 'pers. 1 pl' },
    { id: 'e', sentence: 'Ihr ____ mich nie in Ruhe!', accept: ['lasst'], correct: 'lasst', hint: 'pers. 2 pl FĂRĂ Umlaut' },
    { id: 'f', sentence: 'Sie (ei/ele) ____ das Haus bauen.', accept: ['lassen'], correct: 'lassen', hint: 'pers. 3 pl' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Conjugă LASSEN la Präsens.</strong><br>Atenție la UMLAUT la pers. 2 și 3 singular (du lässt, er lässt). Pers. 2 plural „ihr lasst" e FĂRĂ Umlaut.</div>';
    ex1Data.forEach((item, i) => {
        const parts = item.sentence.split('____');
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${parts[0]}<input type="text" id="ex1-${item.id}" placeholder="${item.hint}" style="width:180px; margin:0 4px;">${parts[1]}</label></div><div class="feedback" id="ex1-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex1-${item.id}`).value);
        const f = document.getElementById(`ex1-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.textContent = ok ? `✓ ${item.correct}` : `Corect: ${item.correct} (${item.hint})`;
        if (ok) correct++;
    });
    return { correct, total: ex1Data.length };
}

// ============================================
// EX 2: Conjugă LASSEN la Präteritum (5 itemi cu radicalul „ließ")
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Ich ____ ihn gehen.', accept: ['liess', 'ließ'], correct: 'ließ', hint: 'pers. 1 sg · imperfect' },
    { id: 'b', sentence: 'Du ____ mich allein.', accept: ['liessest', 'ließest'], correct: 'ließest', hint: 'pers. 2 sg' },
    { id: 'c', sentence: 'Sie (ea) ____ das Auto reparieren.', accept: ['liess', 'ließ'], correct: 'ließ', hint: 'pers. 3 sg' },
    { id: 'd', sentence: 'Wir ____ die Kinder spielen.', accept: ['liessen', 'ließen'], correct: 'ließen', hint: 'pers. 1 pl' },
    { id: 'e', sentence: 'Sie (ei) ____ das Haus bauen.', accept: ['liessen', 'ließen'], correct: 'ließen', hint: 'pers. 3 pl' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Conjugă LASSEN la Präteritum (imperfect).</strong><br>Radicalul devine <strong>ließ</strong> (cu „ie" și „ß"). Pers. 1 și 3 sg sunt IDENTICE. Acceptăm și „ss" în loc de „ß" la tastatură.</div>';
    ex2Data.forEach((item, i) => {
        const parts = item.sentence.split('____');
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${parts[0]}<input type="text" id="ex2-${item.id}" placeholder="${item.hint}" style="width:180px; margin:0 4px;">${parts[1]}</label></div><div class="feedback" id="ex2-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex2-${item.id}`).value);
        const f = document.getElementById(`ex2-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.textContent = ok ? `✓ ${item.correct}` : `Corect: ${item.correct} (${item.hint})`;
        if (ok) correct++;
    });
    return { correct, total: ex2Data.length };
}

// ============================================
// EX 3: Gelassen vs Lassen (8 itemi — capcana infinitiv dublu)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Ich habe ihn gehen ____ .', accept: ['lassen'], correct: 'lassen', hint: 'urmat de Inf gehen → INF DUBLU' },
    { id: 'b', sentence: 'Sie hat das Auto reparieren ____ .', accept: ['lassen'], correct: 'lassen', hint: 'urmat de Inf reparieren → INF DUBLU' },
    { id: 'c', sentence: 'Wir haben es ____ .', accept: ['gelassen'], correct: 'gelassen', hint: 'lassen SINGUR (a abandona) → gelassen' },
    { id: 'd', sentence: 'Hast du das Buch zu Hause ____ ?', accept: ['gelassen'], correct: 'gelassen', hint: 'lassen SINGUR (a uita) → gelassen' },
    { id: 'e', sentence: 'Mein Bruder hat die Haare schneiden ____ .', accept: ['lassen'], correct: 'lassen', hint: 'urmat de Inf schneiden → INF DUBLU' },
    { id: 'f', sentence: 'Lehrer hat uns früher gehen ____ .', accept: ['lassen'], correct: 'lassen', hint: 'urmat de Inf gehen → INF DUBLU' },
    { id: 'g', sentence: 'Ich habe es einfach ____ .', accept: ['gelassen'], correct: 'gelassen', hint: 'lassen SINGUR → gelassen' },
    { id: 'h', sentence: 'Sie hat ihn warten ____ .', accept: ['lassen'], correct: 'lassen', hint: 'urmat de Inf warten → INF DUBLU' }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Gelassen sau Lassen? (Perfekt)</strong><br>🚨 Capcana cea mai mare a verbului lassen: scrie <strong>gelassen</strong> când e singur, <strong>lassen</strong> când e urmat de alt INFINITIV (infinitiv dublu).</div>';
    ex3Data.forEach((item, i) => {
        const parts = item.sentence.split('____');
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${parts[0]}<input type="text" id="ex3-${item.id}" placeholder="${item.hint}" style="width:180px; margin:0 4px;">${parts[1]}</label></div><div class="feedback" id="ex3-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex3-${item.id}`).value);
        const f = document.getElementById(`ex3-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.textContent = ok ? `✓ ${item.correct} — ${item.hint}` : `Corect: ${item.correct} (${item.hint})`;
        if (ok) correct++;
    });
    return { correct, total: ex3Data.length };
}

// ============================================
// EX 4: Click-match propoziție DE ↔ traducere RO (6 perechi cu 3 sensuri)
// ============================================
const ex4Pairs = [
    { de: 'Ich lasse dich gehen.', ro: 'Te las să pleci. (a permite)' },
    { de: 'Ich lasse das Auto reparieren.', ro: 'Las mașina la reparat. (cauzativ)' },
    { de: 'Lass das!', ro: 'Las-o baltă! (a renunța)' },
    { de: 'Lass uns gehen!', ro: 'Hai să mergem! (sugestie)' },
    { de: 'Das lässt sich machen.', ro: 'Asta se poate face. (pasiv natural)' },
    { de: 'Sie lässt die Haare schneiden.', ro: 'Ea lasă să i se taie părul. (la coafor)' }
];

let ex4Selected = { de: null, ro: null };
let ex4Matched = [];
let ex4Wrong = [];

function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    ex4Selected = { de: null, ro: null };
    ex4Matched = [];
    ex4Wrong = [];
    const deShuffled = shuffle(ex4Pairs.map((p, i) => ({ ...p, idx: i })));
    const roShuffled = shuffle(ex4Pairs.map((p, i) => ({ ...p, idx: i })));
    let html = '<div class="exercise-instruction"><strong>📝 Potrivește propoziția DE cu traducerea RO.</strong><br>Click pe o propoziție germană, apoi click pe traducerea corectă. Verde = corect, roșu = greșit.</div>';
    html += '<div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; margin-top:16px;">';
    html += '<div><h4 style="color:#065f46; margin-bottom:8px;">🇩🇪 Germană</h4>';
    deShuffled.forEach((p) => {
        html += `<button class="ex4-btn" data-side="de" data-idx="${p.idx}" onclick="ex4Click(this)" style="display:block; width:100%; text-align:left; margin-bottom:8px; padding:10px 14px; border:2px solid #d1d5db; border-radius:8px; background:#fff; cursor:pointer; font-size:0.95rem;">${p.de}</button>`;
    });
    html += '</div><div><h4 style="color:#065f46; margin-bottom:8px;">🇷🇴 Română</h4>';
    roShuffled.forEach((p) => {
        html += `<button class="ex4-btn" data-side="ro" data-idx="${p.idx}" onclick="ex4Click(this)" style="display:block; width:100%; text-align:left; margin-bottom:8px; padding:10px 14px; border:2px solid #d1d5db; border-radius:8px; background:#fff; cursor:pointer; font-size:0.95rem;">${p.ro}</button>`;
    });
    html += '</div></div>';
    c.innerHTML = html;
}

function ex4Click(btn) {
    if (btn.classList.contains('ex4-matched')) return;
    const side = btn.dataset.side;
    const idx = parseInt(btn.dataset.idx);
    document.querySelectorAll(`.ex4-btn[data-side="${side}"]`).forEach(b => {
        if (!b.classList.contains('ex4-matched')) b.style.background = '#fff';
    });
    btn.style.background = '#F5F0E8';
    ex4Selected[side] = { btn, idx };
    if (ex4Selected.de && ex4Selected.ro) {
        const ok = ex4Selected.de.idx === ex4Selected.ro.idx;
        if (ok) {
            ex4Selected.de.btn.classList.add('ex4-matched');
            ex4Selected.ro.btn.classList.add('ex4-matched');
            ex4Selected.de.btn.style.background = '#d1fae5';
            ex4Selected.ro.btn.style.background = '#d1fae5';
            ex4Selected.de.btn.style.borderColor = '#10b981';
            ex4Selected.ro.btn.style.borderColor = '#10b981';
            ex4Matched.push(ex4Selected.de.idx);
        } else {
            ex4Selected.de.btn.style.background = '#fee2e2';
            ex4Selected.ro.btn.style.background = '#fee2e2';
            setTimeout(() => {
                if (!ex4Selected.de.btn.classList.contains('ex4-matched')) ex4Selected.de.btn.style.background = '#fff';
                if (!ex4Selected.ro.btn.classList.contains('ex4-matched')) ex4Selected.ro.btn.style.background = '#fff';
            }, 1000);
            ex4Wrong.push([ex4Selected.de.idx, ex4Selected.ro.idx]);
        }
        ex4Selected = { de: null, ro: null };
    }
}

function checkEx4() {
    return { correct: ex4Matched.length, total: ex4Pairs.length };
}

function resetEx4Custom() { buildEx4(); }

// ============================================
// EX 5: Richtig oder Falsch (6 itemi conceptuale + 1 plural)
// ============================================
const ex5Data = [
    { id: 'a', text: 'Verbul lassen este TARE (neregulat).', accept: ['r', 'richtig'], correct: 'Richtig', exp: 'Da — du lässt, er lässt cu UMLAUT + Präteritum ließ.' },
    { id: 'b', text: 'La Präsens, formele „du lassst" și „er lasst" sunt CORECTE.', accept: ['f', 'falsch'], correct: 'Falsch', exp: 'Greșit! Forma corectă e <strong>lässt</strong> (cu Umlaut + un singur s). Numai „ihr lasst" e fără Umlaut.' },
    { id: 'c', text: 'La Perfekt scriem MEREU „gelassen", indiferent de context.', accept: ['f', 'falsch'], correct: 'Falsch', exp: 'Greșit! <strong>gelassen</strong> = lassen singur. <strong>lassen</strong> = când e urmat de alt infinitiv (infinitiv dublu).' },
    { id: 'd', text: '„Ich lasse das Auto reparieren" înseamnă că EU repar mașina personal.', accept: ['f', 'falsch'], correct: 'Falsch', exp: 'Greșit! E sensul CAUZATIV — pun pe ALTCINEVA (mecanic) să o repare. Eu doar duc mașina la atelier.' },
    { id: 'e', text: 'Persoana lăsată e la cazul ACUZATIV (Akkusativ): „Ich lasse DICH gehen".', accept: ['r', 'richtig'], correct: 'Richtig', exp: 'Da! Persoana cea pe care „o lăsăm" e la Akk: mich/dich/ihn/sie/uns/euch.' },
    { id: 'f', text: '„Lass das!" e o expresie politicoasă pentru a invita pe cineva la cafea.', accept: ['f', 'falsch'], correct: 'Falsch', exp: 'Greșit! E o expresie de tip „Las-o baltă! / Renunță!" — sensul 3 al lui lassen (a renunța).' },
    { id: 'g', text: '„Die Haare" se folosește mereu la PLURAL în germană (pentru păr).', accept: ['r', 'richtig'], correct: 'Richtig', exp: 'Da! „die Haare" e <strong>plural tantum</strong> — niciodată singular. Pentru „un fir de păr" se zice das Haar, dar pentru „părul" general e die Haare.' }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Richtig oder Falsch?</strong><br>Scrie <strong>R</strong> (Richtig = adevărat) sau <strong>F</strong> (Falsch = fals) pentru fiecare propoziție.</div>';
    ex5Data.forEach((item, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${item.text}</label><input type="text" id="ex5-${item.id}" placeholder="R sau F" style="width:80px;"></div><div class="feedback" id="ex5-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex5-${item.id}`).value);
        const f = document.getElementById(`ex5-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.innerHTML = ok ? `✓ ${item.correct} — ${item.exp}` : `Corect: ${item.correct} — ${item.exp}`;
        if (ok) correct++;
    });
    return { correct, total: ex5Data.length };
}

// ============================================
// Build all + check/reset dispatchers
// ============================================
function checkExercise(n) {
    let result;
    if (n === 1) result = checkEx1();
    else if (n === 2) result = checkEx2();
    else if (n === 3) result = checkEx3();
    else if (n === 4) result = checkEx4();
    else if (n === 5) result = checkEx5();
    if (!result) return;
    const score = document.getElementById(`score-${n}`);
    if (score) {
        const pct = Math.round((result.correct / result.total) * 100);
        const emoji = pct === 100 ? '🏆' : pct >= 60 ? '👍' : '📖';
        score.className = 'score show';
        score.innerHTML = `${emoji} <strong>${result.correct} / ${result.total}</strong> corect (${pct}%)`;
    }
}

function resetExercise(n) {
    let data;
    if (n === 1) data = ex1Data;
    else if (n === 2) data = ex2Data;
    else if (n === 3) data = ex3Data;
    else if (n === 4) { resetEx4Custom(); const s = document.getElementById('score-4'); if (s) { s.className='score'; s.innerHTML=''; } return; }
    else if (n === 5) data = ex5Data;
    if (!data) return;
    data.forEach(item => {
        const inp = document.getElementById(`ex${n}-${item.id}`);
        const fb = document.getElementById(`ex${n}-f${item.id}`);
        if (inp) inp.value = '';
        if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    });
    const s = document.getElementById(`score-${n}`);
    if (s) { s.className = 'score'; s.innerHTML = ''; }
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
