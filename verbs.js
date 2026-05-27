// ============================================
// VERB-KONJUGATION — Verbul LASSEN (refactor mai 2026)
// Claudia Toth · A2 · 4 verbe-cheie (lassen + 3 cauzative)
// Toate PONS-verified · Präteritum → RO IMPERFECT (regula 12)
// ============================================

const verbsData = [
    {
        inf: 'lassen', ro: 'a lăsa / a permite / cauzativ', typ: 'tare / neregulat', aux: 'haben', part: 'gelassen',
        praes: [['ich','lasse','las'],['du','lässt','lași (cu UMLAUT!)'],['er/sie/es','lässt','lasă (cu UMLAUT!)'],['wir','lassen','lăsăm'],['ihr','lasst','lăsați (fără Umlaut!)'],['sie/Sie','lassen','lasă · dvs. lăsați']],
        praet: [['ich','ließ','lăsam'],['du','ließest','lăsai'],['er/sie/es','ließ','lăsa'],['wir','ließen','lăsam'],['ihr','ließt','lăsați'],['sie/Sie','ließen','lăsau']],
        perf: [['ich','habe gelassen','am lăsat'],['du','hast gelassen','ai lăsat'],['er/sie/es','hat gelassen','a lăsat'],['wir','haben gelassen','am lăsat'],['ihr','habt gelassen','ați lăsat'],['sie/Sie','haben gelassen','au lăsat']],
        note: '🚨 Verb TARE cu 3 capcane: (1) Umlaut la pers. 2/3 sg Präsens (du lässt, er lässt). (2) Präteritum cu ie+ß (ließ). (3) Perfekt cu 2 forme — <strong>gelassen</strong> când e singur (Ich habe es gelassen) vs <strong>lassen</strong> când e urmat de alt infinitiv (Ich habe ihn gehen lassen — infinitiv dublu).'
    },
    {
        inf: 'reparieren', ro: 'a repara', typ: 'regulat', aux: 'haben', part: 'repariert',
        praes: [['ich','repariere','repar'],['du','reparierst','repari'],['er/sie/es','repariert','repară'],['wir','reparieren','reparăm'],['ihr','repariert','reparați'],['sie/Sie','reparieren','repară']],
        praet: [['ich','reparierte','reparam'],['du','repariertest','reparai'],['er/sie/es','reparierte','repara'],['wir','reparierten','reparam'],['ihr','repariertet','reparați'],['sie/Sie','reparierten','reparau']],
        perf: [['ich','habe repariert','am reparat'],['du','hast repariert','ai reparat'],['er/sie/es','hat repariert','a reparat'],['wir','haben repariert','am reparat'],['ihr','habt repariert','ați reparat'],['sie/Sie','haben repariert','au reparat']],
        note: '🔗 Verb din latină (-ieren) — Partizip <strong>FĂRĂ ge-</strong>: repariert (NU gerepariert). Toate verbele -ieren urmează acest tipar. Combinație tipică cu lassen: <em>Ich lasse das Auto reparieren.</em> (Las mașina la reparat.)',
        same: 'studieren, fotografieren, telefonieren, kopieren — toate -ieren, Partizip FĂRĂ ge-'
    },
    {
        inf: 'schneiden', ro: 'a tăia', typ: 'tare / neregulat', aux: 'haben', part: 'geschnitten',
        praes: [['ich','schneide','tai'],['du','schneidest','tai'],['er/sie/es','schneidet','taie'],['wir','schneiden','tăiem'],['ihr','schneidet','tăiați'],['sie/Sie','schneiden','taie']],
        praet: [['ich','schnitt','tăiam'],['du','schnittest','tăiai'],['er/sie/es','schnitt','tăia'],['wir','schnitten','tăiam'],['ihr','schnittet','tăiați'],['sie/Sie','schnitten','tăiau']],
        perf: [['ich','habe geschnitten','am tăiat'],['du','hast geschnitten','ai tăiat'],['er/sie/es','hat geschnitten','a tăiat'],['wir','haben geschnitten','am tăiat'],['ihr','habt geschnitten','ați tăiat'],['sie/Sie','haben geschnitten','au tăiat']],
        note: '🚨 Verb TARE: Präteritum cu radical <strong>schnitt</strong> (i scurt). Partizip <strong>geschnitten</strong> (dublu t). Combinație tipică cu lassen: <em>Sie lässt die Haare schneiden.</em> (Ea lasă să i se taie părul — la coafor.) Plus T-stem la Präsens: du/er schneidest/schneidet.'
    },
    {
        inf: 'bauen', ro: 'a construi', typ: 'regulat', aux: 'haben', part: 'gebaut',
        praes: [['ich','baue','construiesc'],['du','baust','construiești'],['er/sie/es','baut','construiește'],['wir','bauen','construim'],['ihr','baut','construiți'],['sie/Sie','bauen','construiesc']],
        praet: [['ich','baute','construiam'],['du','bautest','construiai'],['er/sie/es','baute','construia'],['wir','bauten','construiam'],['ihr','bautet','construiați'],['sie/Sie','bauten','construiau']],
        perf: [['ich','habe gebaut','am construit'],['du','hast gebaut','ai construit'],['er/sie/es','hat gebaut','a construit'],['wir','haben gebaut','am construit'],['ihr','habt gebaut','ați construit'],['sie/Sie','haben gebaut','au construit']],
        note: '🔗 Verb regulat clasic. Combinație tipică cu lassen: <em>Wir lassen das Haus bauen.</em> (Construim casa — constructorii o construiesc, nu noi.)',
        same: 'kaufen, machen, kochen, lernen — același tipar regulat'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function(x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    var hint = '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (perfect compus / timp vorbit)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#6b7280;">' + ex[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '<div class="exercise-instruction"><strong>🔁 4 verbe-cheie:</strong> lassen (verbul principal — TARE) + 3 verbe-satelit cauzative (reparieren, schneiden, bauen) pe care le „lași" altcineva să le facă. Toate PONS-verified.</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">Cele 3 verbe-satelit (reparieren, schneiden, bauen) sunt cele mai uzuale acțiuni pe care le LĂSĂM să le facă altcineva: mecanicul repară mașina, coaforul taie părul, constructorii fac casa. Plus capcana mare: <em>reparieren</em> e împrumut latină — Partizip FĂRĂ „ge-" (repariert, NU gerepariert). Iar lassen e TARE cu Umlaut (du lässt!) și are 2 forme la Perfekt — gelassen vs lassen, în funcție de context. 🦋</div>' +
        '</div></div>';

    verbsData.forEach(function(v, i) {
        let badge;
        if (v.typ.indexOf('auxiliar') >= 0) badge = '#7c3aed';
        else if (v.typ.indexOf('tare') >= 0) badge = '#dc2626';
        else badge = '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            (v.same ? '<div class="theory-box" style="background:#d1fae5;"><p style="margin:0;">📎 <strong>Același tipar regulat:</strong> ' + v.same + '</p></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
