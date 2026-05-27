// ============================================
// TEORIE — Verbul LASSEN (refactor mai 2026)
// Claudia Toth · Annettes Deutschkurs · A2
// 7 subsecțiuni mapate la 7 MP3 vocea Claudia (păstrate din repo vechi)
// Sg + Pl la TOATE substantivele (regula 13)
// ============================================

const theoryHTML = `
    <!-- Sub 0: Introducere -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Ce înseamnă LASSEN? — 3 sensuri principale</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01_introducere.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🎙️ Ascultă introducerea — vocea Claudiei</span>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Verbul <strong>lassen</strong> este unul dintre cele mai folosite și flexibile verbe din germană. Are 3 sensuri principale care trebuie să le știi BINE pentru că se confundă ușor în română: (1) a lăsa / a permite, (2) a face ceva PRIN ALTCINEVA (cauzativ — adică pui pe altul să facă), (3) a renunța la ceva. Pe lângă acestea, e un verb TARE cu Umlaut la pers. 2/3 sg (du lässt) și are o regulă specială la Perfekt: gelassen vs lassen. 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>🎯 Cele 3 sensuri principale</h4>
                <ul>
                    <li>✅ <strong style="color:#10b981;">a lăsa, a permite</strong> — <em>Ich lasse dich gehen.</em> (Te las să pleci.)</li>
                    <li>✅ <strong style="color:#10b981;">a face ceva (prin altcineva)</strong> / cauzativ — <em>Ich lasse das Auto reparieren.</em> (Las mașina la reparat.)</li>
                    <li>✅ <strong style="color:#10b981;">a renunța / a lăsa în pace</strong> — <em>Lass das!</em> (Las-o baltă!)</li>
                </ul>
            </div>

            <div class="theory-box" style="background:#fef3c7;">
                <h4>⚠️ Capcana cea mai mare</h4>
                <p>În română „a lăsa" are același cuvânt pentru toate sensurile. În germană, <strong>lassen</strong> își schimbă semnificația în funcție de CONTEXT și STRUCTURĂ. Învață cele 3 tipare:</p>
                <ul style="margin-top:8px;">
                    <li><em>lassen + pe cineva + Infinitiv</em> = sensul 1 (a permite)</li>
                    <li><em>lassen + ceva + Infinitiv</em> = sensul 2 (cauzativ)</li>
                    <li><em>lassen + ceva (fără Infinitiv)</em> = sensul 3 (a renunța) sau a abandona</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Sub 1: Präsens -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📖 2. Präsens (Prezent) — verb TARE cu Umlaut</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02_prasens.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🎙️ Pronunție Präsens — vocea Claudiei</span>
            </div>

            <p>Verbul <strong>lassen</strong> este TARE (neregulat). Vocala radicală <strong>a</strong> primește <strong>Umlaut (ä)</strong> la persoanele <strong>2 sg (du)</strong> și <strong>3 sg (er/sie/es)</strong>.</p>

            <table class="grammar-table">
                <thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td><strong>ich</strong></td><td><strong style="color:#10b981;">lasse</strong></td><td>eu las</td></tr>
                    <tr><td><strong>du</strong></td><td><strong style="color:#10b981;">lässt</strong></td><td>tu lași</td></tr>
                    <tr><td><strong>er / sie / es</strong></td><td><strong style="color:#10b981;">lässt</strong></td><td>el / ea lasă</td></tr>
                    <tr><td><strong>wir</strong></td><td><strong style="color:#10b981;">lassen</strong></td><td>noi lăsăm</td></tr>
                    <tr><td><strong>ihr</strong></td><td><strong style="color:#10b981;">lasst</strong></td><td>voi lăsați</td></tr>
                    <tr><td><strong>sie / Sie</strong></td><td><strong style="color:#10b981;">lassen</strong></td><td>ei / ele lasă · dumneavoastră lăsați</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#fef3c7;">
                <h4>⚠️ ATENȚIE la formele cu Umlaut</h4>
                <p><strong>du lässt</strong> și <strong>er/sie/es lässt</strong> — TOATE au <strong>ä</strong> (Umlaut) + <strong>ss</strong>. Nu se confundă cu <em>lasst</em> (voi) care e fără Umlaut.</p>
                <p style="margin-top:8px;">Comparație: <em>du <strong>lässt</strong> mich</em> (tu mă lași) vs <em>ihr <strong>lasst</strong> mich</em> (voi mă lăsați).</p>
            </div>
        </div>
    </div>

    <!-- Sub 2: Präteritum -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>⏪ 3. Präteritum (imperfect / timp scris) — radical „ließ"</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03_prateritum.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🎙️ Pronunție Präteritum — vocea Claudiei</span>
            </div>

            <p>La Präteritum, radicalul se schimbă în <strong style="color:#10b981;">ließ</strong> (cu <strong>ie</strong> lung + <strong>ß</strong> dublu „s"). Persoanele 1 și 3 sg sunt IDENTICE.</p>

            <table class="grammar-table">
                <thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO (imperfect)</th></tr></thead>
                <tbody>
                    <tr><td><strong>ich</strong></td><td><strong style="color:#10b981;">ließ</strong></td><td>eu lăsam</td></tr>
                    <tr><td><strong>du</strong></td><td><strong style="color:#10b981;">ließest</strong></td><td>tu lăsai</td></tr>
                    <tr><td><strong>er / sie / es</strong></td><td><strong style="color:#10b981;">ließ</strong></td><td>el / ea lăsa</td></tr>
                    <tr><td><strong>wir</strong></td><td><strong style="color:#10b981;">ließen</strong></td><td>noi lăsam</td></tr>
                    <tr><td><strong>ihr</strong></td><td><strong style="color:#10b981;">ließt</strong></td><td>voi lăsați</td></tr>
                    <tr><td><strong>sie / Sie</strong></td><td><strong style="color:#10b981;">ließen</strong></td><td>ei / ele lăsau · dumneavoastră lăsați</td></tr>
                </tbody>
            </table>

            <div class="theory-box">
                <h4>📌 Exemple</h4>
                <p>→ Ich <strong>ließ</strong> ihn gehen. <span class="ro-translation">— Eu îl lăsam să plece.</span></p>
                <p>→ Sie <strong>ließ</strong> das Auto reparieren. <span class="ro-translation">— Ea lăsa mașina la reparat.</span></p>
                <p>→ Wir <strong>ließen</strong> die Kinder spielen. <span class="ro-translation">— Noi lăsam copiii să se joace.</span></p>
            </div>
        </div>
    </div>

    <!-- Sub 3: Perfekt -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>✅ 4. Perfekt — capcana <em>gelassen</em> vs <em>lassen</em></span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04_perfekt.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🎙️ Pronunție Perfekt — vocea Claudiei</span>
            </div>

            <p>La Perfekt (perfect compus / timp vorbit), lassen folosește auxiliarul <strong style="color:#10b981;">haben</strong>. Conjugarea propriu-zisă:</p>

            <table class="grammar-table">
                <thead><tr><th>Pronume</th><th>Formă cu „gelassen" (singur)</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td><strong>ich</strong></td><td><strong style="color:#10b981;">habe gelassen</strong></td><td>eu am lăsat</td></tr>
                    <tr><td><strong>du</strong></td><td><strong style="color:#10b981;">hast gelassen</strong></td><td>tu ai lăsat</td></tr>
                    <tr><td><strong>er / sie / es</strong></td><td><strong style="color:#10b981;">hat gelassen</strong></td><td>el / ea a lăsat</td></tr>
                    <tr><td><strong>wir</strong></td><td><strong style="color:#10b981;">haben gelassen</strong></td><td>noi am lăsat</td></tr>
                    <tr><td><strong>ihr</strong></td><td><strong style="color:#10b981;">habt gelassen</strong></td><td>voi ați lăsat</td></tr>
                    <tr><td><strong>sie / Sie</strong></td><td><strong style="color:#10b981;">haben gelassen</strong></td><td>ei / ele au lăsat</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#fef3c7;">
                <h4>🚨 REGULA IMPORTANTĂ — <em>gelassen</em> SAU <em>lassen</em>?</h4>
                <ul style="margin-top:8px;">
                    <li style="margin-bottom:10px;"><strong style="color:#10b981;">gelassen</strong> = când lassen e SINGUR (fără alt infinitiv lângă):<br>
                    <em>Ich habe es <strong>gelassen</strong>.</em> — Am lăsat-o baltă. / Am abandonat.</li>
                    <li><strong style="color:#10b981;">lassen</strong> = când lassen e URMAT de alt INFINITIV (construcția cu „infinitiv dublu"):<br>
                    <em>Ich habe das Auto reparieren <strong>lassen</strong>.</em> — Am dat mașina la reparat.<br>
                    <em>Ich habe ihn gehen <strong>lassen</strong>.</em> — L-am lăsat să plece.</li>
                </ul>
            </div>

            <div class="theory-box" style="background:#dbeafe;">
                <h4>💡 De ce e așa?</h4>
                <p>Construcția „infinitiv dublu" e specifică germană. Verbele MODALE (können, müssen, dürfen, wollen, sollen, mögen) și „CVASI-MODALE" (lassen, sehen, hören) folosesc INFINITIVUL (nu participiul) când sunt urmate de alt verb la Perfekt. <em>Ich habe es sehen können</em> (nicht „gekonnt"), <em>Sie hat das Lied hören wollen</em> (nicht „gewollt").</p>
            </div>
        </div>
    </div>

    <!-- Sub 4: Sensul 1 — a lăsa / a permite -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🚪 5. Sensul 1 — A lăsa / a permite</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05_lasa_permite.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🎙️ Sensul 1 — vocea Claudiei</span>
            </div>

            <div class="theory-box" style="background:#dbeafe;">
                <h4>📐 Structura</h4>
                <p><strong>lassen + PERSOANA (Akkusativ) + Infinitiv</strong></p>
                <p style="margin-top:8px;">Persoana e cea pe care O LĂSĂM să facă ceva. Infinitivul e acțiunea pe care i-o permitem.</p>
            </div>

            <table class="grammar-table">
                <thead><tr><th>Propoziție germană</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td>Ich lasse <strong>dich</strong> gehen.</td><td>Te las să pleci.</td></tr>
                    <tr><td>Lässt du <strong>mich</strong> schlafen?</td><td>Mă lași să dorm?</td></tr>
                    <tr><td>Meine Mutter lässt <strong>mich</strong> nicht ausgehen.</td><td>Mama nu mă lasă să ies (în oraș).</td></tr>
                    <tr><td>Der Lehrer lässt <strong>uns</strong> früher gehen.</td><td>Profesorul ne lasă să plecăm mai devreme.</td></tr>
                    <tr><td>Lass <strong>ihn</strong> in Ruhe!</td><td>Lasă-l în pace! (imperativ)</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#fef3c7;">
                <h4>⚠️ Atenție</h4>
                <p>Persoana lăsată este la <strong>ACUZATIV</strong> (Akkusativ), NU dativ. <em>Ich lasse <strong>dich</strong></em> (Akk), nu „dir". <em>Sie lässt <strong>mich</strong></em> (Akk), nu „mir".</p>
            </div>
        </div>
    </div>

    <!-- Sub 5: Sensul 2 — cauzativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🔧 6. Sensul 2 — A face ceva PRIN ALTCINEVA (cauzativ)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06_face_altcineva.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🎙️ Sensul 2 cauzativ — vocea Claudiei</span>
            </div>

            <div class="theory-box" style="background:#dbeafe;">
                <h4>📐 Structura</h4>
                <p><strong>lassen + OBIECT (Akkusativ) + Infinitiv</strong></p>
                <p style="margin-top:8px;">Aici tu NU faci acțiunea — pui pe ALTUL (un meșter, coafor, mecanic, etc.) să o facă PENTRU tine. În română se traduce adesea cu „dau la..." sau „pun să...".</p>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">📚 Substantive cauzative (cu Sg + Pl)</h4>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td><strong>das Auto</strong></td><td><strong>die Autos</strong></td><td>mașina · mașinile (neutru +s)</td></tr>
                    <tr><td><strong>das Haus</strong></td><td><strong>die Häuser</strong></td><td>casa · casele (neutru +Umlaut +er)</td></tr>
                    <tr><td><strong>die Mutter</strong></td><td><strong>die Mütter</strong></td><td>mama · mamele (feminin +Umlaut)</td></tr>
                    <tr><td><strong>der Friseur</strong></td><td><strong>die Friseure</strong></td><td>coaforul · coaforii (masculin +e)</td></tr>
                    <tr><td><strong>der Mechaniker</strong></td><td><strong>die Mechaniker</strong></td><td>mecanicul · mecanicii (masculin invariabil)</td></tr>
                    <tr><td><strong>die Reparatur</strong></td><td><strong>die Reparaturen</strong></td><td>reparația · reparațiile (feminin +en)</td></tr>
                    <tr><td><strong>der Termin</strong></td><td><strong>die Termine</strong></td><td>programarea · programările (masculin +e)</td></tr>
                    <tr><td><strong>die Haare</strong></td><td>—</td><td>părul (🚨 plural tantum în germană — niciodată singular!)</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">📝 Propoziții model</h4>
            <table class="grammar-table">
                <thead><tr><th>Propoziție germană</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td>Ich lasse <strong>das Auto</strong> reparieren.</td><td>Las mașina la reparat. (mecanicul o repară)</td></tr>
                    <tr><td>Sie lässt <strong>die Haare</strong> schneiden.</td><td>Ea lasă să i se taie părul. (coaforul taie)</td></tr>
                    <tr><td>Wir lassen <strong>das Haus</strong> bauen.</td><td>Construim casa. (constructorii o construiesc)</td></tr>
                    <tr><td>Er lässt <strong>einen Termin</strong> reservieren.</td><td>Face o programare. (secretara o face)</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Sub 6: Expresii uzuale -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>💬 7. Expresii uzuale cu LASSEN (+ sensul 3: a renunța)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-6')" id="btn-audio-6">▶</button>
                    <audio id="audio-6" preload="none"><source src="audio/07_expresii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🎙️ Expresii uzuale — vocea Claudiei</span>
            </div>

            <table class="grammar-table">
                <thead><tr><th>Germană</th><th>Traducere RO</th><th>Context</th></tr></thead>
                <tbody>
                    <tr><td><strong>Lass das!</strong></td><td>Las-o baltă! / Renunță!</td><td>Sensul 3 — a renunța</td></tr>
                    <tr><td><strong>Lass mich in Ruhe!</strong></td><td>Lasă-mă în pace!</td><td>Imperativ enervat</td></tr>
                    <tr><td><strong>Lass uns gehen!</strong></td><td>Hai să mergem! / Să mergem!</td><td>Sugestie de grup</td></tr>
                    <tr><td><strong>Lass mich denken.</strong></td><td>Lasă-mă să mă gândesc.</td><td>Pauză în conversație</td></tr>
                    <tr><td><strong>Das lässt sich machen.</strong></td><td>Asta se poate face.</td><td>Construcție „pasivă" cu sich</td></tr>
                    <tr><td><strong>Das lässt sich nicht sagen.</strong></td><td>Asta nu se poate spune.</td><td>Negație</td></tr>
                    <tr><td><strong>Lass mich in Ruhe schlafen!</strong></td><td>Lasă-mă să dorm în liniște!</td><td>Imperativ + pace</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#ecfdf5; border-color:#10b981; margin-top:18px;">
                <h4>🎯 Bonus: lassen + sich = pasiv natural</h4>
                <p>Construcția <strong>etwas lässt sich + Infinitiv</strong> = se poate face / e posibil. E un mod foarte natural de a exprima posibilitatea în germană (înlocuiește „kann gemacht werden" — pasiv complicat).</p>
                <p style="margin-top:8px;">→ <em>Das lässt sich reparieren.</em> = Asta se poate repara.</p>
                <p>→ <em>Die Tür lässt sich nicht öffnen.</em> = Ușa nu se poate deschide.</p>
            </div>

            <div class="theory-box" style="background:#fef3c7; margin-top:18px; text-align:center;">
                <h4>🦋 Felicitări — ai învățat verbul LASSEN!</h4>
                <p>Acum cunoști: <strong>3 sensuri</strong> (a lăsa/permite, cauzativ, a renunța), <strong>3 timpuri</strong> conjugate (Präsens, Präteritum, Perfekt), <strong>regula gelassen vs lassen</strong> și <strong>7 expresii uzuale</strong> esențiale.</p>
            </div>
        </div>
    </div>
`;

function buildTheory() {
    const container = document.getElementById('theory-container');
    if (!container) return;
    container.innerHTML = theoryHTML;
}

function toggleSubSection(i) {
    const c = document.getElementById('sub-section-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#theory-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    if (audio.paused) {
        audio.play();
        btn.textContent = '⏸';
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
    audio.onended = function() { btn.textContent = '▶'; };
}

buildTheory();
