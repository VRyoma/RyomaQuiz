/*
  りょうまプロフィールクイズ（静的・バニラJS）
  出典: https://note.com/ryoma_dq/n/nf99e99386e84
*/

const SOURCE_URL = "https://note.com/ryoma_dq/n/nf99e99386e84";

/** @typedef {{ id: string, q: string, choices: string[], answerIndex: number, explain: string }} Question */

/** @type {Question[]} */
const QUESTION_BANK = [
  {
    id: "name-kanji",
    q: "りょうまさんの名乗り（漢字表記）は？",
    choices: ["鏑流馬 流馬", "流鏑馬 龍馬", "鏑木 竜馬", "矢留馬 良真"],
    answerIndex: 0,
    explain: "冒頭で『鏑流馬 流馬(やぶさめりょうま)と言います。』と自己紹介しています。",
  },
  {
    id: "vr-entry",
    q: "VRの世界に足を踏み入れたきっかけとして挙げているデバイスは？",
    choices: ["PlayStation VR（2016年発売）", "Meta Quest 3", "Apple Vision Pro", "HTC VIVE Pro"],
    answerIndex: 0,
    explain: "『2016年に発売されたPlayStation VRで…VRの世界に足を踏み入れ』と書かれています。",
  },
  {
    id: "main-devices",
    q: "現在のメイン機（落ち着いた構成）として書かれている組み合わせは？",
    choices: [
      "PlayStation VR2&mocopi(PCVR) と Apple Vision Pro(スタンドアロン)",
      "VALVE Index と HTC VIVE Pro",
      "Meta Quest 3 と Oculus Go",
      "PlayStation VR と VIVEトラッカー",
    ],
    answerIndex: 0,
    explain: "記事では『現在のメイン機はPlayStation VR2&mocopi(PCVR)とApple Vision Pro…』と記載。",
  },
  {
    id: "avp-disney",
    q: "60万円で買ったApple Vision Proは何専用機になってしまった？",
    choices: ["Disney+", "Netflix", "YouTube", "Prime Video"],
    answerIndex: 0,
    explain: "『60万円で買ったApple Vision ProはDisney+専用機になってしまっている』という一文があります。",
  },
  {
    id: "job",
    q: "職業の欄での自己紹介は？",
    choices: ["フルスタックエンジニア（ITシステム系のなんでも屋さん）", "観光ガイド", "ゲーム実況者", "映像編集者"],
    answerIndex: 0,
    explain: "『フルスタックエンジニア(ITシステム系のなんでも屋さん)』と明記されています。",
  },
  {
    id: "strength",
    q: "得意領域として挙げているのは？",
    choices: ["VR/AR/MRを活用したコンテンツ制作", "金融トレード", "料理研究", "医療画像解析"],
    answerIndex: 0,
    explain: "『得意領域は、VR/AR/MRといった先端技術を活用したコンテンツ制作。』と書かれています。",
  },
  {
    id: "tools",
    q: "コンテンツ制作で使うツールとして挙げている組み合わせは？",
    choices: [
      "Unity / Unreal Engine / Blender",
      "Photoshop / Illustrator / Figma",
      "Excel / PowerPoint / Word",
      "Maya / Houdini / ZBrush",
    ],
    answerIndex: 0,
    explain: "『UnityやUnreal Engine、Blenderといったツールを駆使し…』と記載があります。",
  },
  {
    id: "web-design-skill",
    q: "『3級ウェブデザイン技能士(国家検定)』の説明として書かれている内容は？",
    choices: [
      "ウェブページの作成やデザイン(HTML・CSS・JavaScript)を作れる",
      "サウナの正しい入り方を知っている",
      "Amazon Web Serviceのクラウドの基本を知っている",
      "名古屋の観光地や文化を知っている",
    ],
    answerIndex: 0,
    explain: "3級ウェブデザイン技能士の箇所で『ウェブページの作成やデザイン(HTML・CSS・JavaScript)を作れるよ！』とあります。",
  },
  {
    id: "vr-fav-game",
    q: "VRゲームで好きだと書いているタイトルは？",
    choices: ["BeatSaber", "VRChat", "Half-Life: Alyx", "Rec Room"],
    answerIndex: 0,
    explain: "趣味・興味（VR）の段落に『VRゲームはBeatSaberが好き。』とあります。",
  },
  {
    id: "vrchat-start",
    q: "VRChatを始めたのはいつ頃？",
    choices: ["Vket3の時", "Vket1の時", "2020年の年末", "今年の春"],
    answerIndex: 0,
    explain: "『VRChatもVket3の時に始めた』と書かれています。",
  },
  {
    id: "avatar",
    q: "使っているアバターのベースは？",
    choices: ["まめひなた", "しなの", "ミント", "マヌカ"],
    answerIndex: 0,
    explain: "VRの段落で『アバターは、まめひなたをベースに改変したもの』と述べています。",
  },
  {
    id: "gym",
    q: "ジムトレは何がきっかけで始めた？",
    choices: ["ダイエット", "筋トレ大会出場", "友人に誘われた", "健康診断の再検査"],
    answerIndex: 0,
    explain: "『ダイエットで始めたけど最近はストレス解消になって習慣』と書かれています。",
  },
  {
    id: "sauna-fav",
    q: "サウナの『お気に入り』として挙げているのは？",
    choices: ["サウナシアター名古屋（ウェルビー栄）のショーアウフグース", "草加健康センター", "しきじ", "かるまる"],
    answerIndex: 0,
    explain: "サウナの段落で『お気に入りはサウナシアター名古屋（ウェルビー栄）のショーアウフグース』とあります。",
  },
  {
    id: "cooking",
    q: "料理は何を見ながら作るのが好きだと書いている？",
    choices: ["料理研究家リュウジさんなどのYouTube動画", "クックパッドだけ", "テレビ番組のレシピ", "外食チェーンの再現レシピ本"],
    answerIndex: 0,
    explain: "料理の段落に『料理研究家リュウジさんなどのYouTube動画を見ながら…』とあります。",
  },
  {
    id: "puzzle-arg",
    q: "謎解きの最近のハマりとして書かれているものは？",
    choices: ["ARG", "TRPG", "ボードゲーム", "麻雀"],
    answerIndex: 0,
    explain: "謎解きの段落で『最近はARGにはまり中。』と書かれています。",
  },
  {
    id: "daiyon",
    q: "『第四境界交錯員』はどの文脈で出てくる？",
    choices: ["謎解き（ARG）", "サウナ", "VRデバイス", "資格"],
    answerIndex: 0,
    explain: "謎解きの段落が『最近はARGにはまり中。第四境界交錯員です。』と続きます。",
  },
  {
    id: "vtubers",
    q: "VTuberの欄で『特によく見てます』に含まれるのは？",
    choices: ["ぽこピー", "宝鐘マリン", "兎田ぺこら", "葛葉"],
    answerIndex: 0,
    explain: "VTuberの段落で『ぽこピーさん、おめシスさん、富士葵さん・キクノジョーさんは特によく見てます』とあります。",
  },
  {
    id: "expo-pass",
    q: "万博について、今年買ったと書いているものは？",
    choices: ["大阪・関西万博の通期パス", "1日券だけ", "海外パビリオンの年間会員", "公式グッズの福袋"],
    answerIndex: 0,
    explain: "万博の段落で『通期パスを買って暇さえあれば大阪まで足を伸ばしています！』と書かれています。",
  },
  {
    id: "hosiimo-score",
    q: "『干し芋のリストゲーム』は何でスコアを競うミニゲーム？",
    choices: ["干し芋をカートに入れた金額", "干し芋の品種数", "クリック回数", "制限時間内の移動距離"],
    answerIndex: 0,
    explain: "作品紹介で『干し芋をカートに入れた金額でスコア競う…』と説明されています。",
  },
  {
    id: "weekcal",
    q: "『週間スケジュール画像メーカー』は何ができるツール？",
    choices: ["1週間の予定を書いてXに投稿できる", "買い物リストを自動生成する", "VRアバターを改変する", "サウナの混雑状況を予測する"],
    answerIndex: 0,
    explain: "作品紹介で『1週間の予定を書いてxに投稿できるツール』と書かれています。",
  },
];

function $(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element: ${id}`);
  return el;
}

function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function rankLabel(score, total) {
  const pct = total === 0 ? 0 : score / total;
  if (pct === 1) return "称号：りょうまマスター（全問正解）";
  if (pct >= 0.85) return "称号：VR推進エンジニア";
  if (pct >= 0.7) return "称号：好奇心旺盛ガジェット民";
  if (pct >= 0.5) return "称号：プロフィール見習い";
  return "称号：まずは記事を読んでみよう";
}

/**
 * @param {Question[]} bank
 * @param {number} count
 * @param {boolean} doShuffle
 */
function buildQuiz(bank, count, doShuffle) {
  const src = doShuffle ? shuffleInPlace([...bank]) : [...bank];
  return src.slice(0, clamp(count, 1, bank.length));
}

const screenStart = $("screen-start");
const screenQuiz = $("screen-quiz");
const screenResult = $("screen-result");

const questionCountEl = $("questionCount");
const shuffleEl = $("shuffle");

const startBtn = $("startBtn");
const quitBtn = $("quitBtn");
const retryBtn = $("retryBtn");

const progressText = $("progressText");
const scoreText = $("scoreText");
const barFill = $("barFill");

const questionEl = $("question");
const choicesEl = $("choices");

const feedback = $("feedback");
const feedbackBadge = $("feedbackBadge");
const feedbackAnswer = $("feedbackAnswer");
const explainEl = $("explain");
const nextBtn = $("nextBtn");

const finalScoreEl = $("finalScore");
const finalRankEl = $("finalRank");
const missedEl = $("missed");

/** @type {{ quiz: Question[], idx: number, score: number, answered: boolean, picked: number|null, wrong: Array<{q: Question, picked: number}> }} */
let state = {
  quiz: [],
  idx: 0,
  score: 0,
  answered: false,
  picked: null,
  wrong: [],
};

function show(el) {
  el.classList.remove("hidden");
}

function hide(el) {
  el.classList.add("hidden");
}

function goStart() {
  show(screenStart);
  hide(screenQuiz);
  hide(screenResult);

  feedback.classList.add("hidden");
  state = { quiz: [], idx: 0, score: 0, answered: false, picked: null, wrong: [] };
}

function goQuiz() {
  hide(screenStart);
  show(screenQuiz);
  hide(screenResult);
}

function goResult() {
  hide(screenStart);
  hide(screenQuiz);
  show(screenResult);
}

function setProgress() {
  const total = state.quiz.length;
  const current = state.idx + 1;
  progressText.textContent = `${current} / ${total}`;
  scoreText.textContent = `Score: ${state.score}`;

  const pct = total === 0 ? 0 : (state.idx / total) * 100;
  const pctClamped = clamp(pct, 0, 100);
  barFill.style.width = `${pctClamped}%`;
  const bar = barFill.parentElement;
  if (bar) bar.setAttribute("aria-valuenow", String(Math.round(pctClamped)));
}

function clearChoices() {
  choicesEl.innerHTML = "";
}

function renderQuestion() {
  const q = state.quiz[state.idx];
  if (!q) return;

  state.answered = false;
  state.picked = null;

  feedback.classList.add("hidden");
  feedbackBadge.classList.remove("bad");

  setProgress();
  questionEl.textContent = q.q;
  clearChoices();

  q.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "choiceBtn";
    btn.type = "button";
    btn.setAttribute("role", "listitem");

    const key = document.createElement("span");
    key.className = "choiceKey";
    key.textContent = String(i + 1);

    const text = document.createElement("span");
    text.className = "choiceText";
    text.textContent = choice;

    btn.appendChild(key);
    btn.appendChild(text);

    btn.addEventListener("click", () => onPick(i));
    choicesEl.appendChild(btn);
  });
}

function lockChoices() {
  Array.from(choicesEl.querySelectorAll("button")).forEach((b) => {
    b.disabled = true;
  });
}

function markChoices() {
  const q = state.quiz[state.idx];
  const buttons = Array.from(choicesEl.querySelectorAll("button"));
  buttons.forEach((btn, i) => {
    btn.classList.remove("correct", "wrong");
    if (i === q.answerIndex) btn.classList.add("correct");
    if (state.picked === i && i !== q.answerIndex) btn.classList.add("wrong");
  });
}

function onPick(i) {
  const q = state.quiz[state.idx];
  if (!q || state.answered) return;

  state.answered = true;
  state.picked = i;

  const isCorrect = i === q.answerIndex;
  if (isCorrect) {
    state.score += 1;
  } else {
    state.wrong.push({ q, picked: i });
  }

  lockChoices();
  markChoices();

  feedbackBadge.textContent = isCorrect ? "正解" : "不正解";
  feedbackBadge.classList.toggle("bad", !isCorrect);
  feedbackAnswer.textContent = `正解: ${q.choices[q.answerIndex]}`;
  explainEl.textContent = q.explain;
  feedback.classList.remove("hidden");

  setProgress();
  nextBtn.focus();
}

function next() {
  if (!state.answered) return;

  if (state.idx + 1 >= state.quiz.length) {
    renderResult();
    return;
  }

  state.idx += 1;
  renderQuestion();
}

function renderResult() {
  const total = state.quiz.length;
  goResult();

  finalScoreEl.textContent = `${state.score} / ${total}`;
  finalRankEl.textContent = rankLabel(state.score, total);

  if (state.wrong.length === 0) {
    missedEl.innerHTML = `<div class="missedItem"><p class="missedQ">全問正解！</p><p class="missedA">さすがです。記事もぜひ読んでみてください。</p><p class="missedE"><a href="${SOURCE_URL}" target="_blank" rel="noopener">${SOURCE_URL}</a></p></div>`;
    return;
  }

  missedEl.innerHTML = "";
  state.wrong.forEach(({ q, picked }) => {
    const item = document.createElement("div");
    item.className = "missedItem";

    const mq = document.createElement("p");
    mq.className = "missedQ";
    mq.textContent = q.q;

    const ma = document.createElement("p");
    ma.className = "missedA";
    ma.textContent = `あなたの回答: ${q.choices[picked]} / 正解: ${q.choices[q.answerIndex]}`;

    const me = document.createElement("p");
    me.className = "missedE";
    me.textContent = q.explain;

    item.appendChild(mq);
    item.appendChild(ma);
    item.appendChild(me);
    missedEl.appendChild(item);
  });
}

function start() {
  const count = Number(questionCountEl.value || "10");
  const doShuffle = Boolean(shuffleEl.checked);
  state.quiz = buildQuiz(QUESTION_BANK, count, doShuffle);
  state.idx = 0;
  state.score = 0;
  state.wrong = [];

  goQuiz();
  renderQuestion();
}

startBtn.addEventListener("click", start);
nextBtn.addEventListener("click", next);
quitBtn.addEventListener("click", goStart);
retryBtn.addEventListener("click", () => {
  goStart();
  start();
});

// キーボード操作（1-4で選択、Enterで次へ）
document.addEventListener("keydown", (e) => {
  if (!screenQuiz || screenQuiz.classList.contains("hidden")) return;

  const key = e.key;
  if (key >= "1" && key <= "4") {
    const i = Number(key) - 1;
    onPick(i);
    return;
  }

  if (key === "Enter") {
    if (state.answered) next();
  }
});

// 初期表示
goStart();
