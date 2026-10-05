
        // ================= GAME DATA & DICTIONARY =================
        const HARDWARE_DATA = {
            monitor: {
                id: 'monitor',
                name: 'Monitor',
                fact: 'A monitor displays pictures, text and videos.',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full hw-svg"><rect x="10" y="15" width="80" height="55" rx="6" fill="#1e293b" stroke="#475569" stroke-width="3"/><rect x="15" y="20" width="70" height="45" rx="3" fill="#38bdf8"/><path d="M 25 55 Q 40 30 55 55 T 85 40" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.7"/><polygon points="42,70 58,70 64,85 36,85" fill="#475569"/><rect x="30" y="85" width="40" height="6" rx="2" fill="#334155"/></svg>`
            },
            keyboard: {
                id: 'keyboard',
                name: 'Keyboard',
                fact: 'A keyboard is used to type letters, numbers and symbols.',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full hw-svg"><rect x="5" y="30" width="90" height="40" rx="6" fill="#334155" stroke="#1e293b" stroke-width="3"/><rect x="10" y="35" width="80" height="30" rx="3" fill="#0f172a"/><rect x="15" y="40" width="8" height="6" rx="1" fill="#94a3b8"/><rect x="26" y="40" width="8" height="6" rx="1" fill="#94a3b8"/><rect x="37" y="40" width="8" height="6" rx="1" fill="#94a3b8"/><rect x="48" y="40" width="8" height="6" rx="1" fill="#94a3b8"/><rect x="59" y="40" width="8" height="6" rx="1" fill="#94a3b8"/><rect x="70" y="40" width="15" height="6" rx="1" fill="#38bdf8"/><rect x="15" y="50" width="12" height="6" rx="1" fill="#94a3b8"/><rect x="30" y="50" width="40" height="6" rx="1" fill="#cbd5e1"/><rect x="73" y="50" width="12" height="6" rx="1" fill="#94a3b8"/></svg>`
            },
            mouse: {
                id: 'mouse',
                name: 'Mouse',
                fact: 'A mouse helps us point, click and select things.',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full hw-svg"><path d="M 30 50 C 30 25, 70 25, 70 50 L 70 70 C 70 85, 30 85, 30 70 Z" fill="#64748b" stroke="#334155" stroke-width="3"/><line x1="50" y1="26" x2="50" y2="48" stroke="#334155" stroke-width="3"/><rect x="46" y="32" width="8" height="12" rx="3" fill="#f59e0b"/><line x1="30" y1="48" x2="70" y2="48" stroke="#334155" stroke-width="2"/></svg>`
            },
            cpu: {
                id: 'cpu',
                name: 'CPU / System Unit',
                fact: 'The CPU processes instructions and helps the computer work.',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full hw-svg"><rect x="25" y="10" width="50" height="80" rx="6" fill="#1e293b" stroke="#0f172a" stroke-width="3"/><rect x="32" y="20" width="36" height="6" rx="2" fill="#475569"/><circle cx="50" cy="40" r="10" fill="#334155" stroke="#64748b" stroke-width="2"/><circle cx="50" cy="70" r="6" fill="#38bdf8"/><rect x="35" y="80" width="30" height="3" fill="#64748b"/></svg>`
            },
            speaker: {
                id: 'speaker',
                name: 'Speaker',
                fact: 'Speakers play sounds and music.',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full hw-svg"><rect x="25" y="15" width="50" height="70" rx="8" fill="#334155" stroke="#1e293b" stroke-width="3"/><circle cx="50" cy="35" r="10" fill="#0f172a" stroke="#64748b" stroke-width="2"/><circle cx="50" cy="65" r="16" fill="#0f172a" stroke="#64748b" stroke-width="3"/><circle cx="50" cy="65" r="6" fill="#f59e0b"/></svg>`
            },
            printer: {
                id: 'printer',
                name: 'Printer',
                fact: 'A printer produces a paper copy of information.',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full hw-svg"><rect x="25" y="15" width="50" height="30" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/><rect x="15" y="38" width="70" height="35" rx="6" fill="#475569" stroke="#1e293b" stroke-width="3"/><rect x="25" y="58" width="50" height="30" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/><line x1="32" y1="68" x2="68" y2="68" stroke="#94a3b8" stroke-width="3"/><line x1="32" y1="76" x2="58" y2="76" stroke="#94a3b8" stroke-width="3"/><circle cx="72" cy="48" r="4" fill="#34d399"/></svg>`
            },
            webcam: {
                id: 'webcam',
                name: 'Webcam',
                fact: 'A webcam captures photos and videos.',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full hw-svg"><circle cx="50" cy="40" r="25" fill="#1e293b" stroke="#475569" stroke-width="3"/><circle cx="50" cy="40" r="16" fill="#0284c7"/><circle cx="50" cy="40" r="8" fill="#0f172a"/><circle cx="46" cy="36" r="3" fill="#ffffff"/><path d="M 40 65 L 60 65 L 65 85 L 35 85 Z" fill="#334155"/><rect x="30" y="85" width="40" height="6" rx="2" fill="#1e293b"/></svg>`
            },
            headphones: {
                id: 'headphones',
                name: 'Headphones',
                fact: 'Headphones let us hear sound privately.',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full hw-svg"><path d="M 20 55 A 32 32 0 0 1 80 55" fill="none" stroke="#1e293b" stroke-width="8" stroke-linecap="round"/><rect x="14" y="50" width="16" height="30" rx="7" fill="#f43f5e"/><rect x="70" y="50" width="16" height="30" rx="7" fill="#f43f5e"/><rect x="24" y="55" width="6" height="20" rx="2" fill="#ffffff" opacity="0.6"/><rect x="70" y="55" width="6" height="20" rx="2" fill="#ffffff" opacity="0.6"/></svg>`
            },
            // Distractor non-hardware items for Level 1
            book: {
                id: 'book',
                name: 'Book',
                isHardware: false,
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full hw-svg"><rect x="20" y="20" width="60" height="60" rx="4" fill="#ef4444"/><rect x="15" y="20" width="10" height="60" rx="2" fill="#b91c1c"/><line x1="35" y1="35" x2="65" y2="35" stroke="#ffffff" stroke-width="4"/><line x1="35" y1="50" x2="60" y2="50" stroke="#ffffff" stroke-width="4"/></svg>`
            },
            phone: {
                id: 'phone',
                name: 'Phone',
                isHardware: false,
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full hw-svg"><rect x="30" y="15" width="40" height="70" rx="8" fill="#1e293b"/><rect x="34" y="25" width="32" height="50" rx="2" fill="#38bdf8"/><circle cx="50" cy="80" r="3" fill="#ffffff"/></svg>`
            }
        };

        // ================= GLOBAL GAME STATE =================
        let gameState = {
            score: 0,
            lives: 3,
            stars: 0,
            currentLevel: 1,
            soundEnabled: true,
            startTime: 0,
            totalTimeSeconds: 0,
            totalQuestionsAttempted: 0,
            correctAnswers: 0,
            // Level 1 specific
            l1Targets: ['keyboard', 'monitor', 'mouse', 'cpu', 'printer', 'speaker'],
            l1CurrentIndex: 0,
            // Level 2 specific
            l2Matches: 0,
            // Level 3 specific
            l3PlacedCount: 0,
            // Level 4 specific
            l4CurrentQuestion: 0,
            l4Questions: [],
            l4Timer: null,
            l4TimeRemaining: 10
        };

        // Synthesized Audio via Web Audio API
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        let audioCtx = null;

        function playSynthesizedSound(type) {
            if (!gameState.soundEnabled) return;
            try {
                if (!audioCtx) audioCtx = new AudioCtx();
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);

                const now = audioCtx.currentTime;
                if (type === 'correct') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(523.25, now); // C5
                    osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
                    osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
                    gain.gain.setValueAtTime(0.3, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
                    osc.start(now);
                    osc.stop(now + 0.35);
                } else if (type === 'wrong') {
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(220, now); // A3
                    osc.frequency.exponentialRampToValueAtTime(130.81, now + 0.2); // C4
                    gain.gain.setValueAtTime(0.3, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
                    osc.start(now);
                    osc.stop(now + 0.25);
                } else if (type === 'win') {
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(440, now);
                    osc.frequency.exponentialRampToValueAtTime(880, now + 0.3);
                    gain.gain.setValueAtTime(0.4, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
                    osc.start(now);
                    osc.stop(now + 0.5);
                }
            } catch (e) {
                console.log("Audio play error", e);
            }
        }

        function toggleSound() {
            gameState.soundEnabled = !gameState.soundEnabled;
            document.getElementById('soundToggleBtn').innerText = gameState.soundEnabled ? '🔊' : '🔇';
        }

        // UI View Switchers
        function hideAllScreens() {
            const screens = ['startScreen', 'level1Screen', 'level2Screen', 'level3Screen', 'level4Screen', 'finalScoreScreen'];
            screens.forEach(s => {
                const el = document.getElementById(s);
                if (el) {
                    el.classList.add('hidden');
                    el.classList.remove('flex');
                }
            });
        }

        function showScreen(screenId) {
            hideAllScreens();
            const target = document.getElementById(screenId);
            if (target) {
                target.classList.remove('hidden');
                target.classList.add('flex');
            }
        }

        function updateTopHeader() {
            document.getElementById('scoreDisplay').innerText = gameState.score;
            document.getElementById('livesDisplay').innerText = gameState.lives;
            const indicators = {
                1: 'Level 1: Lab Hunt 🔎',
                2: 'Level 2: Hardware Match 🧩',
                3: 'Level 3: Build Computer 🛠️',
                4: 'Level 4: Hardware Master ⚡'
            };
            document.getElementById('levelIndicatorText').innerText = indicators[gameState.currentLevel] || 'Hardware Explorer!';
        }

        function openHowToPlay() { document.getElementById('howToPlayModal').classList.remove('hidden'); }
        function closeHowToPlay() { document.getElementById('howToPlayModal').classList.add('hidden'); }

        function showFactModal(itemKey, customTitle = "Correct!") {
            const item = HARDWARE_DATA[itemKey];
            if (!item) return;
            document.getElementById('factTitle').innerText = customTitle;
            document.getElementById('factSvgContainer').innerHTML = item.svg;
            document.getElementById('factDescription').innerText = item.fact;
            document.getElementById('factModal').classList.remove('hidden');
        }

        function closeFactModal() {
            document.getElementById('factModal').classList.add('hidden');
            checkLevelProgress();
        }

        // ================= GAME CONTROLLER =================
        function startGame() {
            gameState.score = 0;
            gameState.lives = 3;
            gameState.stars = 0;
            gameState.currentLevel = 1;
            gameState.startTime = Date.now();
            gameState.totalQuestionsAttempted = 0;
            gameState.correctAnswers = 0;
            
            updateTopHeader();
            initLevel1();
        }

        function showStartScreen() {
            showScreen('startScreen');
        }

        function addScore(pts) {
            gameState.score += pts;
            gameState.stars += 1;
            updateTopHeader();
            triggerConfettiBurst(50);
        }

        function loseLife() {
            gameState.lives--;
            updateTopHeader();
            if (gameState.lives <= 0) {
                // Friendly reset to current level
                gameState.lives = 3;
                alert("Out of hearts! Let's try this level again! 💪");
                if (gameState.currentLevel === 1) initLevel1();
                else if (gameState.currentLevel === 2) initLevel2();
                else if (gameState.currentLevel === 3) initLevel3();
                else if (gameState.currentLevel === 4) initLevel4();
            }
        }

        function checkLevelProgress() {
            if (gameState.currentLevel === 1) {
                gameState.l1CurrentIndex++;
                if (gameState.l1CurrentIndex >= gameState.l1Targets.length) {
                    // Level 1 Complete -> Transition to Level 2
                    gameState.currentLevel = 2;
                    playSynthesizedSound('win');
                    initLevel2();
                } else {
                    renderLevel1Target();
                }
            }
        }

        // ================= LEVEL 1: FIND THE HARDWARE =================
        function initLevel1() {
            showScreen('level1Screen');
            gameState.currentLevel = 1;
            gameState.l1CurrentIndex = 0;
            // Shuffle target order
            gameState.l1Targets.sort(() => Math.random() - 0.5);
            updateTopHeader();
            renderLevel1Target();
        }

        function renderLevel1Target() {
            const targetKey = gameState.l1Targets[gameState.l1CurrentIndex];
            const targetItem = HARDWARE_DATA[targetKey];
            document.getElementById('l1MissionText').innerText = `🔎 Find the ${targetItem.name.toUpperCase()}!`;
            
            // Progress Bar calculation
            const pct = (gameState.l1CurrentIndex / gameState.l1Targets.length) * 100;
            document.getElementById('l1ProgressBar').style.width = `${pct}%`;

            // Prepare pool of items (Target + random hardware + distractors)
            let poolKeys = [targetKey];
            const allKeys = Object.keys(HARDWARE_DATA).filter(k => k !== targetKey);
            allKeys.sort(() => Math.random() - 0.5);
            
            // Pick 7 additional objects to make total 8
            poolKeys = poolKeys.concat(allKeys.slice(0, 7));
            poolKeys.sort(() => Math.random() - 0.5);

            const grid = document.getElementById('l1ObjectsGrid');
            grid.innerHTML = '';

            poolKeys.forEach(key => {
                const item = HARDWARE_DATA[key];
                const card = document.createElement('div');
                card.className = "hw-card cursor-pointer w-20 h-20 sm:w-28 sm:h-28 bg-white/90 hover:bg-white rounded-2xl p-2 border-2 border-indigo-200 shadow-md flex flex-col items-center justify-center transition-all transform hover:scale-105";
                card.innerHTML = item.svg + `<span class="text-[10px] sm:text-xs font-bold text-indigo-900 mt-1">${item.name.split(' ')[0]}</span>`;
                
                card.onclick = () => {
                    gameState.totalQuestionsAttempted++;
                    if (key === targetKey) {
                        gameState.correctAnswers++;
                        playSynthesizedSound('correct');
                        card.classList.add('ring-4', 'ring-emerald-400', 'bg-emerald-50');
                        addScore(10);
                        showFactModal(key, "🎉 Correct Component!");
                    } else {
                        playSynthesizedSound('wrong');
                        card.classList.add('animate-shake', 'ring-4', 'ring-rose-400');
                        setTimeout(() => card.classList.remove('animate-shake', 'ring-4', 'ring-rose-400'), 600);
                        loseLife();
                    }
                };

                grid.appendChild(card);
            });
        }

        // ================= LEVEL 2: MATCH THE HARDWARE =================
        function initLevel2() {
            showScreen('level2Screen');
            gameState.currentLevel = 2;
            gameState.l2Matches = 0;
            updateTopHeader();

            const activeKeys = ['monitor', 'keyboard', 'mouse', 'cpu', 'speaker', 'headphones'];
            document.getElementById('l2MatchCount').innerText = `0 / ${activeKeys.length} Matched`;

            const draggablesContainer = document.getElementById('l2Draggables');
            const targetsContainer = document.getElementById('l2DropTargets');
            draggablesContainer.innerHTML = '';
            targetsContainer.innerHTML = '';

            // Shuffle keys for draggables
            const dragKeys = [...activeKeys].sort(() => Math.random() - 0.5);
            // Shuffle keys for targets
            const targetKeys = [...activeKeys].sort(() => Math.random() - 0.5);

            dragKeys.forEach(key => {
                const item = HARDWARE_DATA[key];
                const el = document.createElement('div');
                el.className = "draggable-item bg-white p-2 rounded-2xl border-2 border-indigo-300 shadow w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center";
                el.draggable = true;
                el.dataset.key = key;
                el.innerHTML = item.svg;

                // Drag Events
                el.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('text/plain', key);
                });

                draggablesContainer.appendChild(el);
            });

            targetKeys.forEach(key => {
                const item = HARDWARE_DATA[key];
                const target = document.createElement('div');
                target.className = "drop-target rounded-xl p-3 flex items-center justify-between bg-indigo-50 border-2 border-dashed border-indigo-300 min-h-[56px]";
                target.dataset.key = key;
                target.innerHTML = `<span class="font-bold text-sm sm:text-base text-indigo-950">${item.name}</span><span class="status-icon text-lg">⭕</span>`;

                // Drag over / drop events
                target.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    target.classList.add('highlight');
                });
                target.addEventListener('dragleave', () => target.classList.remove('highlight'));
                target.addEventListener('drop', (e) => {
                    e.preventDefault();
                    target.classList.remove('highlight');
                    const draggedKey = e.dataTransfer.getData('text/plain');
                    
                    gameState.totalQuestionsAttempted++;
                    if (draggedKey === key) {
                        gameState.correctAnswers++;
                        playSynthesizedSound('correct');
                        target.classList.add('filled');
                        target.querySelector('.status-icon').innerText = '✅';
                        
                        // Lock dragged item
                        const draggedEl = draggablesContainer.querySelector(`[data-key="${draggedKey}"]`);
                        if (draggedEl) draggedEl.style.visibility = 'hidden';

                        addScore(15);
                        gameState.l2Matches++;
                        document.getElementById('l2MatchCount').innerText = `${gameState.l2Matches} / ${activeKeys.length} Matched`;

                        if (gameState.l2Matches >= activeKeys.length) {
                            setTimeout(() => {
                                gameState.currentLevel = 3;
                                playSynthesizedSound('win');
                                initLevel3();
                            }, 800);
                        }
                    } else {
                        playSynthesizedSound('wrong');
                        target.classList.add('animate-shake');
                        setTimeout(() => target.classList.remove('animate-shake'), 500);
                        loseLife();
                    }
                });

                targetsContainer.appendChild(target);
            });
        }

        // ================= LEVEL 3: BUILD THE COMPUTER =================
        function initLevel3() {
            showScreen('level3Screen');
            gameState.currentLevel = 3;
            gameState.l3PlacedCount = 0;
            updateTopHeader();

            document.getElementById('l3BuildStatus').innerText = `0 / 5 Assembled`;

            const deskParts = ['monitor', 'cpu', 'keyboard', 'mouse', 'speaker'];
            const palette = document.getElementById('l3PartsPalette');
            palette.innerHTML = '';

            deskParts.sort(() => Math.random() - 0.5).forEach(key => {
                const item = HARDWARE_DATA[key];
                const part = document.createElement('div');
                part.className = "draggable-item bg-white p-2 rounded-2xl border-2 border-indigo-300 shadow w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center";
                part.draggable = true;
                part.dataset.partId = key;
                part.innerHTML = item.svg;

                part.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('text/plain', key);
                });

                palette.appendChild(part);
            });

            // Target drop zones on desk setup
            const targets = document.querySelectorAll('#deskCanvas .drop-target');
            targets.forEach(t => {
                t.classList.remove('filled');
                const targetKey = t.dataset.targetId;
                t.innerText = `${HARDWARE_DATA[targetKey].name} Slot 🎯`;

                t.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    t.classList.add('highlight');
                });
                t.addEventListener('dragleave', () => t.classList.remove('highlight'));
                t.addEventListener('drop', (e) => {
                    e.preventDefault();
                    t.classList.remove('highlight');
                    const draggedKey = e.dataTransfer.getData('text/plain');

                    gameState.totalQuestionsAttempted++;
                    if (draggedKey === targetKey) {
                        gameState.correctAnswers++;
                        playSynthesizedSound('correct');
                        t.classList.add('filled');
                        t.innerHTML = HARDWARE_DATA[draggedKey].svg;

                        const draggedEl = palette.querySelector(`[data-part-id="${draggedKey}"]`);
                        if (draggedEl) draggedEl.remove();

                        addScore(20);
                        gameState.l3PlacedCount++;
                        document.getElementById('l3BuildStatus').innerText = `${gameState.l3PlacedCount} / 5 Assembled`;

                        if (gameState.l3PlacedCount >= 5) {
                            playSynthesizedSound('win');
                            triggerConfettiBurst(150);
                            setTimeout(() => {
                                gameState.currentLevel = 4;
                                initLevel4();
                            }, 1200);
                        }
                    } else {
                        playSynthesizedSound('wrong');
                        t.classList.add('animate-shake');
                        setTimeout(() => t.classList.remove('animate-shake'), 500);
                        loseLife();
                    }
                });
            });
        }

        // ================= LEVEL 4: HARDWARE MASTER QUIZ =================
        function initLevel4() {
            showScreen('level4Screen');
            gameState.currentLevel = 4;
            gameState.l4CurrentQuestion = 0;
            updateTopHeader();

            // Prepare 5 questions
            const keys = ['monitor', 'keyboard', 'mouse', 'cpu', 'printer'];
            gameState.l4Questions = keys.map(key => {
                const item = HARDWARE_DATA[key];
                // Distractors for functions
                const allFacts = [
                    HARDWARE_DATA.monitor.fact,
                    HARDWARE_DATA.keyboard.fact,
                    HARDWARE_DATA.mouse.fact,
                    HARDWARE_DATA.cpu.fact,
                    HARDWARE_DATA.printer.fact,
                    HARDWARE_DATA.speaker.fact
                ];
                
                const wrongChoices = allFacts.filter(f => f !== item.fact).sort(() => Math.random() - 0.5).slice(0, 3);
                const options = [item.fact, ...wrongChoices].sort(() => Math.random() - 0.5);

                return {
                    itemKey: key,
                    correctFact: item.fact,
                    options: options
                };
            });

            renderQuizQuestion();
        }

        function renderQuizQuestion() {
            if (gameState.l4CurrentQuestion >= gameState.l4Questions.length) {
                // Quiz Complete! Show Final Results Screen
                showFinalResults();
                return;
            }

            const q = gameState.l4Questions[gameState.l4CurrentQuestion];
            const item = HARDWARE_DATA[q.itemKey];

            document.getElementById('quizImageContainer').innerHTML = item.svg;
            document.getElementById('quizQuestionText').innerText = `What is the ${item.name} used for?`;

            const optionsGrid = document.getElementById('quizOptionsGrid');
            optionsGrid.innerHTML = '';

            q.options.forEach(optText => {
                const btn = document.createElement('button');
                btn.className = "btn-bounce bg-white border-2 border-indigo-300 hover:border-indigo-500 rounded-2xl p-4 text-left font-bold text-sm sm:text-base text-indigo-950 shadow transition-all";
                btn.innerText = optText;

                btn.onclick = () => {
                    clearInterval(gameState.l4Timer);
                    gameState.totalQuestionsAttempted++;

                    if (optText === q.correctFact) {
                        gameState.correctAnswers++;
                        playSynthesizedSound('correct');
                        btn.classList.add('bg-emerald-100', 'border-emerald-500');
                        addScore(20);
                    } else {
                        playSynthesizedSound('wrong');
                        btn.classList.add('bg-rose-100', 'border-rose-500');
                        loseLife();
                    }

                    setTimeout(() => {
                        gameState.l4CurrentQuestion++;
                        renderQuizQuestion();
                    }, 800);
                };

                optionsGrid.appendChild(btn);
            });

            // Start 10-second countdown timer
            clearInterval(gameState.l4Timer);
            gameState.l4TimeRemaining = 10;
            document.getElementById('quizTimer').innerText = `${gameState.l4TimeRemaining}s`;

            gameState.l4Timer = setInterval(() => {
                gameState.l4TimeRemaining--;
                document.getElementById('quizTimer').innerText = `${gameState.l4TimeRemaining}s`;

                if (gameState.l4TimeRemaining <= 0) {
                    clearInterval(gameState.l4Timer);
                    playSynthesizedSound('wrong');
                    loseLife();
                    gameState.l4CurrentQuestion++;
                    renderQuizQuestion();
                }
            }, 1000);
        }

        // ================= FINAL SCORE SCREEN =================
        function showFinalResults() {
            clearInterval(gameState.l4Timer);
            showScreen('finalScoreScreen');

            const totalTime = Math.round((Date.now() - gameState.startTime) / 1000);
            const accuracy = gameState.totalQuestionsAttempted > 0 
                ? Math.round((gameState.correctAnswers / gameState.totalQuestionsAttempted) * 100) 
                : 100;

            document.getElementById('finalScoreVal').innerText = gameState.score;
            document.getElementById('finalStarsVal').innerText = `${gameState.stars} ⭐`;
            document.getElementById('finalTimeVal').innerText = `${totalTime}s`;
            document.getElementById('accuracyText').innerText = `Accuracy: ${accuracy}%`;

            // Rank calculation
            let rankTitle = "🌱 Keep Practicing";
            let rankMedal = "🌱";

            if (accuracy >= 90) {
                rankTitle = "🥇 Hardware Master";
                rankMedal = "🥇";
            } else if (accuracy >= 70) {
                rankTitle = "🥈 Hardware Explorer";
                rankMedal = "🥈";
            } else if (accuracy >= 50) {
                rankTitle = "🥉 Hardware Learner";
                rankMedal = "🥉";
            }

            document.getElementById('rankTitle').innerText = rankTitle;
            document.getElementById('rankMedalIcon').innerText = rankMedal;
            document.getElementById('rankSubtitle').innerText = `You are a ${rankTitle}!`;

            playSynthesizedSound('win');
            triggerConfettiBurst(200);
        }

        // ================= CONFETTI PARTICLE SYSTEM =================
        const canvas = document.getElementById('confettiCanvas');
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function triggerConfettiBurst(count = 100) {
            const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6'];
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: canvas.width / 2,
                    y: canvas.height / 2,
                    vx: (Math.random() - 0.5) * 18,
                    vy: (Math.random() - 0.8) * 18,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 8 + 4,
                    life: 100
                });
            }
        }

        function animateConfetti() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p, idx) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.3; // Gravity
                p.life -= 1;

                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                if (p.life <= 0 || p.y > canvas.height) {
                    particles.splice(idx, 1);
                }
            });
            requestAnimationFrame(animateConfetti);
        }
        animateConfetti();
   