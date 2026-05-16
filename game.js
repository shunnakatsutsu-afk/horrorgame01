/* ─── ゲームエンジン (マルチストーリー + セーブ対応版) ─── */

const Game = (() => {
  let currentNodeId = null;
  let currentStory  = null;
  let isTyping      = false;
  let typeTimer     = null;
  let fullText      = '';
  let typingSpeed   = 38;
  let backlogOpen   = false;
  let currentScene  = null;
  let inputSetup    = false;

  const backlog = [];
  const stories = {};

  const $ = id => document.getElementById(id);

  const el = {
    main:       () => $('main-screen'),
    title:      () => $('title-screen'),
    ending:     () => $('ending-screen'),
    bg:         () => $('bg-layer'),
    charaL:     () => $('chara-left'),
    charaR:     () => $('chara-right'),
    speaker:    () => $('speaker-name'),
    mainText:   () => $('main-text'),
    indicator:  () => $('click-indicator'),
    choices:    () => $('choices'),
    endLabel:   () => $('ending-label'),
    endTitle:   () => $('ending-title'),
    endText:    () => $('ending-text'),
    endBg:      () => $('ending-bg'),
    logPanel:   () => $('backlog-panel'),
    logContent: () => $('backlog-content'),
    logBtn:     () => $('backlog-btn'),
  };

  /* ── セーブ/ロード ── */
  function saveKey(id) { return `hayarigami_save_${id}`; }

  function saveGame() {
    if (!currentStory || !currentNodeId) return;
    try {
      localStorage.setItem(saveKey(currentStory.id), JSON.stringify({
        nodeId:  currentNodeId,
        entries: backlog.slice()
      }));
    } catch (_) {}
  }

  function getSave(id) {
    try {
      const raw = localStorage.getItem(saveKey(id));
      return raw ? JSON.parse(raw) : null;
    } catch (_) { return null; }
  }

  function clearSave(id) {
    try { localStorage.removeItem(saveKey(id)); } catch (_) {}
  }

  function updateContinueBtns() {
    Object.values(stories).forEach(s => {
      const btn = $(`sc-cont-${s.id}`);
      if (!btn) return;
      getSave(s.id) ? btn.classList.remove('hidden') : btn.classList.add('hidden');
    });
  }

  /* ── テキストタイプライター ── */
  function typeText(text, onDone) {
    isTyping = true;
    fullText = text;
    el.mainText().textContent = '';
    el.indicator().classList.add('hidden');
    let i = 0;
    clearInterval(typeTimer);
    typeTimer = setInterval(() => {
      if (i >= text.length) {
        clearInterval(typeTimer);
        isTyping = false;
        el.mainText().textContent = text;
        el.indicator().classList.remove('hidden');
        if (onDone) onDone();
        return;
      }
      el.mainText().textContent += text[i];
      Audio.playSFX('blip');
      i++;
    }, typingSpeed);
  }

  function skipTyping() {
    if (!isTyping) return false;
    clearInterval(typeTimer);
    isTyping = false;
    el.mainText().textContent = fullText;
    el.indicator().classList.remove('hidden');
    const node = currentStory && currentStory.nodes[currentNodeId];
    if (node && node.choices) showChoices(node.choices);
    return true;
  }

  /* ── 背景セット ── */
  function setBg(sceneClass) {
    const bg = el.bg();
    bg.className = '';
    bg.style.backgroundImage = '';
    bg.innerHTML = '';
    if (!sceneClass) return;
    const src = BACKGROUNDS && BACKGROUNDS[sceneClass];
    if (src) {
      bg.style.backgroundImage = `url('${src}')`;
      bg.style.backgroundSize = 'cover';
      bg.style.backgroundPosition = 'center';
    } else {
      bg.classList.add(sceneClass);
    }
  }

  /* ── キャラクターセット ── */
  function setChara(slot, charaId, speaking) {
    const elem = slot === 'left' ? el.charaL() : el.charaR();
    if (!charaId) {
      elem.classList.add('hidden-chara');
      elem.innerHTML = '';
      return;
    }
    const ch = CHARACTERS[charaId];
    if (!ch) return;
    const existing = elem.querySelector('img');
    if (existing && existing.dataset.chara === charaId) {
      // 同じキャラは再生成しない
    } else {
      const img = document.createElement('img');
      img.src = ch.img;
      img.alt = ch.name;
      img.draggable = false;
      img.dataset.chara = charaId;
      img.onerror = () => {
        elem.innerHTML = `<div class="chara-placeholder" style="background:${ch.color}22;border:2px dashed ${ch.color}44;color:${ch.color};display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:14px;border-radius:4px;">${ch.name}</div>`;
      };
      elem.innerHTML = '';
      elem.appendChild(img);
    }
    elem.classList.remove('hidden-chara', 'dimmed', 'speaking');
    elem.classList.add(speaking ? 'speaking' : 'dimmed');
  }

  /* ── ノード描画 ── */
  function renderNode(nodeId) {
    const node = currentStory.nodes[nodeId];
    if (!node) { console.error('Node not found:', nodeId); return; }
    currentNodeId = nodeId;

    if (node.ending) { showEnding(node); return; }

    setBg(node.scene);

    const horrorScenes = new Set(currentStory.horrorScenes || []);
    const prevScene = currentScene;
    currentScene = node.scene;
    if (horrorScenes.has(node.scene)) {
      Audio.playBGM('horror');
      if (prevScene !== node.scene) Audio.playSFX('horror');
    } else {
      Audio.playBGM('normal');
    }

    setChara('left',  node.left  || null, node.speaking === 'left');
    setChara('right', node.right || null, node.speaking === 'right');

    el.choices().classList.add('hidden');
    el.choices().innerHTML = '';
    el.indicator().classList.remove('hidden');
    el.speaker().textContent = node.name || '';

    const text = (node.text || '').replace(/\\n/g, '\n');
    backlog.push({ name: node.name || '', text });
    saveGame();

    typeText(text, () => {
      if (node.choices && node.choices.length > 0) {
        showChoices(node.choices);
        Audio.playSFX('choice');
      }
    });
  }

  /* ── 選択肢 ── */
  function showChoices(choices) {
    el.indicator().classList.add('hidden');
    const container = el.choices();
    container.innerHTML = '';
    choices.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = c.label;
      btn.addEventListener('click', () => {
        Audio.playSFX('click');
        container.classList.add('hidden');
        advance(c.goto);
      });
      container.appendChild(btn);
    });
    container.classList.remove('hidden');
  }

  /* ── 次ノードへ ── */
  function advance(nodeId) {
    const target = nodeId || currentStory.nodes[currentNodeId]?.next;
    if (!target) return;
    Audio.playSFX('scene');
    renderNode(target);
  }

  /* ── クリックハンドラ ── */
  function onScreenClick() {
    if (backlogOpen) return;
    const node = currentStory && currentStory.nodes[currentNodeId];
    if (!node) return;
    if (!el.choices().classList.contains('hidden')) return;
    if (skipTyping()) return;
    if (node.next) {
      Audio.playSFX('click');
      advance(node.next);
    }
  }

  /* ── エンディング ── */
  function showEnding(node) {
    clearSave(currentStory.id);
    el.main().classList.add('hidden');
    const endEl = el.ending();
    endEl.className = '';
    endEl.classList.remove('hidden');
    endEl.classList.add(`ending-${node.type}`);
    if (node.type === 'true')   el.endBg().style.background = 'radial-gradient(ellipse at 50% 50%, #1a1208 0%, #000 70%)';
    if (node.type === 'bad')    el.endBg().style.background = 'radial-gradient(ellipse at 50% 50%, #120608 0%, #000 70%)';
    if (node.type === 'normal') el.endBg().style.background = 'radial-gradient(ellipse at 50% 50%, #080c14 0%, #000 70%)';
    el.endLabel().textContent = node.label;
    el.endTitle().textContent = node.title;
    el.endText().innerHTML = (node.text || '').split('\n').map(l => l || '<br>').join('\n');
    Audio.stopBGM(2000);
  }

  /* ── バックログ ── */
  function openBacklog() {
    if (backlog.length === 0) return;
    backlogOpen = true;
    const content = el.logContent();
    content.innerHTML = '';
    backlog.forEach(entry => {
      const div = document.createElement('div');
      div.className = 'backlog-entry';
      const nameSpan = document.createElement('span');
      nameSpan.className = 'backlog-name';
      nameSpan.textContent = entry.name || '―';
      const textSpan = document.createElement('span');
      textSpan.className = 'backlog-text';
      textSpan.textContent = entry.text;
      div.appendChild(nameSpan);
      div.appendChild(textSpan);
      content.appendChild(div);
    });
    el.logPanel().classList.remove('hidden');
    requestAnimationFrame(() => { content.scrollTop = content.scrollHeight; });
    el.logBtn().style.display = 'none';
  }

  function closeBacklog() {
    backlogOpen = false;
    el.logPanel().classList.add('hidden');
    el.logBtn().style.display = '';
  }

  /* ── 入力ハンドラ ── */
  function setupInputHandlers() {
    if (inputSetup) return;
    inputSetup = true;
    document.addEventListener('keydown', e => {
      if (e.key === 'b' || e.key === 'B') {
        backlogOpen ? closeBacklog() : openBacklog();
      }
      if (e.key === 'Escape') closeBacklog();
    });
    el.main().addEventListener('wheel', e => {
      if (e.deltaY < -30 && !backlogOpen) openBacklog();
    }, { passive: true });
    let touchStartY = 0;
    el.main().addEventListener('touchstart', e => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    el.main().addEventListener('touchend', e => {
      const deltaY = e.changedTouches[0].clientY - touchStartY;
      if (deltaY < -60 && !backlogOpen) openBacklog();
    }, { passive: true });
  }

  /* ── ゲーム開始共通処理 ── */
  function beginStory(storyId) {
    currentStory = stories[storyId];
    currentScene = null;
    Audio.init();
    Audio.playBGM('normal');
    el.title().classList.add('hidden');
    el.main().classList.remove('hidden');
    el.main().addEventListener('click', onScreenClick);
    setupInputHandlers();
  }

  /* ── 公開API ── */
  return {
    init(storyList) {
      storyList.forEach(s => { stories[s.id] = s; });
      Audio.playBGM('title');
      updateContinueBtns();
    },
    startNew(id) {
      clearSave(id);
      backlog.length = 0;
      beginStory(id);
      renderNode('start');
    },
    startContinue(id) {
      const save = getSave(id);
      if (!save) { this.startNew(id); return; }
      backlog.length = 0;
      backlog.push(...save.entries);
      beginStory(id);
      renderNode(save.nodeId);
    },
    retry() {
      if (!currentStory) return;
      clearSave(currentStory.id);
      backlog.length = 0;
      el.ending().classList.add('hidden');
      el.main().classList.remove('hidden');
      Audio.playBGM('normal');
      renderNode('start');
    },
    returnToTitle() {
      backlog.length = 0;
      currentNodeId = null;
      currentScene  = null;
      isTyping      = false;
      clearInterval(typeTimer);
      closeBacklog();
      el.main().classList.add('hidden');
      el.ending().classList.add('hidden');
      el.choices().classList.add('hidden');
      el.choices().innerHTML = '';
      Audio.stopBGM(1200);
      Audio.playBGM('title');
      el.title().classList.remove('hidden');
      updateContinueBtns();
    },
    openBacklog,
    closeBacklog,
  };
})();

function startNew(id)      { Game.startNew(id); }
function startContinue(id) { Game.startContinue(id); }
function retryGame()       { Game.retry(); }
function returnToTitle()   { Game.returnToTitle(); }
function openBacklog()     { Game.openBacklog(); }
function closeBacklog()    { Game.closeBacklog(); }
