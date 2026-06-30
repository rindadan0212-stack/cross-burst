const ELEMENT_LABELS = {
  flame: "焔",
  tide: "潮",
  grove: "樹",
  volt: "雷",
  star: "星",
  shade: "影",
};

const ELEMENT_ADVANTAGE = {
  flame: "grove",
  grove: "volt",
  volt: "tide",
  tide: "flame",
  star: "shade",
  shade: "star",
};

const roleLabels = {
  attack: "攻撃",
  heal: "回復",
  guard: "守護",
  charge: "充填",
  sync: "同期",
};

const PARTY_SIZE = 6;

const statusLabels = {
  burn: "炎傷",
  poison: "毒蝕",
  shock: "感電",
  curse: "呪縛",
};

const materialLabels = {
  "Grove Core": "樹核",
  "Volt Claw": "雷爪",
  "Warden Sigil": "番人の印",
  "Burst Tome": "バースト秘本",
  "Relic Ore": "レリック鉱",
  "Minor Core": "小核",
  "Volt Feather": "雷羽",
  "Thunder Horn": "雷角",
  "Judge Crest": "審判の紋",
  "Siren Scale": "歌姫の鱗",
  "Reef Plate": "礁甲板",
  "Abyss Pearl": "深淵珠",
  "Thorn Seed": "棘種",
  "Moss Scale": "苔竜鱗",
  "Elder Sap": "古樹液",
  "Star Sigil": "星印",
  "Reaper Chain": "死神鎖",
  "Eclipse Core": "蝕核",
};

const xbbDefinitions = [
  {
    id: "twin-inferno",
    name: "双焔インフェルノ",
    unitIds: ["flame-sword", "shade-friend"],
    element: "flame",
    multiplier: 1.42,
    hitFrames: [190, 280, 370, 520, 650, 780],
    breakDamage: 16,
  },
  {
    id: "verdant-tide",
    name: "翠潮ヴェルダ",
    unitIds: ["tide-mage", "grove-guard"],
    element: "tide",
    multiplier: 1.06,
    hitFrames: [260, 420, 580, 740],
    heal: 145,
    breakDamage: 10,
  },
  {
    id: "astral-rail",
    name: "星軌アストラル",
    unitIds: ["volt-archer", "star-seer"],
    element: "star",
    multiplier: 1.18,
    hitFrames: [150, 240, 330, 420, 510, 600, 690, 780],
    syncWindowBonus: 1,
    breakDamage: 18,
  },
];

const leaderSkills = {
  "flame-vanguard": {
    label: "焔の先陣",
    description: "攻撃+10% / 同期ダメージ+10%",
    atkMultiplier: 1.1,
    syncMultiplier: 1.1,
  },
  "friend-shadow-link": {
    label: "影の連携",
    description: "XBBダメージ+15% / 崩し削り+20%",
    xbbMultiplier: 1.15,
    breakMultiplier: 1.2,
  },
};

const relicDefinitions = {
  syncLens: {
    label: "同期レンズ",
    syncWindowBonusMs: 16,
    syncMultiplier: 1.08,
  },
  burstCore: {
    label: "バースト核",
    burstGainMultiplier: 1.18,
  },
  breakBrand: {
    label: "崩牙の刻印",
    breakDamageMultiplier: 1.25,
  },
  aegisCharm: {
    label: "守護の護符",
    damageTakenMultiplier: 0.92,
  },
  relicBlade: {
    label: "遺剣",
    damageMultiplier: 1.08,
  },
  mercyBell: {
    label: "慈愛の鈴",
    healingMultiplier: 1.18,
  },
};

const recruitableUnits = [
  {
    id: "star-lancer",
    name: "星槍士",
    element: "star",
    role: "attack",
    maxHp: 500,
    hp: 500,
    level: 6,
    exp: 0,
    atk: 112,
    def: 46,
    rec: 50,
    burst: 50,
    hitFrames: [210, 330, 470, 690],
    multiplier: 0.66,
    burstName: "星槍突き",
    burstType: "damage",
    relicIds: ["syncLens", "relicBlade"],
    rarity: 1,
    maxRarity: 3,
    cost: { "Warden Sigil": 1, "Burst Tome": 1 },
  },
  {
    id: "grove-apothecary",
    name: "樹薬師",
    element: "grove",
    role: "heal",
    maxHp: 455,
    hp: 455,
    level: 6,
    exp: 0,
    atk: 72,
    def: 48,
    rec: 126,
    burst: 60,
    hitFrames: [410, 680],
    multiplier: 0.58,
    burstName: "翠の手当",
    burstType: "heal",
    relicIds: ["mercyBell", "aegisCharm"],
    rarity: 1,
    maxRarity: 3,
    cost: { "Grove Core": 2, "Relic Ore": 1 },
  },
  {
    id: "volt-engineer",
    name: "雷技師",
    element: "volt",
    role: "charge",
    maxHp: 475,
    hp: 475,
    level: 6,
    exp: 0,
    atk: 88,
    def: 52,
    rec: 72,
    burst: 65,
    hitFrames: [200, 320, 440, 560],
    multiplier: 0.5,
    burstName: "雷機加速",
    burstType: "charge",
    relicIds: ["burstCore", "syncLens"],
    rarity: 1,
    maxRarity: 3,
    cost: { "Volt Claw": 2, "Burst Tome": 1 },
  },
  {
    id: "tide-oracle",
    name: "潮巫女",
    element: "tide",
    role: "sync",
    maxHp: 448,
    hp: 448,
    level: 6,
    exp: 0,
    atk: 84,
    def: 44,
    rec: 108,
    burst: 72,
    hitFrames: [380, 500, 620],
    multiplier: 0.55,
    burstName: "潮の予兆",
    burstType: "sync",
    relicIds: ["syncLens", "mercyBell"],
    rarity: 1,
    maxRarity: 3,
    cost: { "Siren Scale": 1, "Reef Plate": 1 },
  },
  {
    id: "flame-berserker",
    name: "焔狂戦士",
    element: "flame",
    role: "attack",
    maxHp: 640,
    hp: 640,
    level: 7,
    exp: 0,
    atk: 136,
    def: 34,
    rec: 24,
    burst: 30,
    hitFrames: [280, 470],
    multiplier: 1.05,
    burstName: "紅蓮裂き",
    burstType: "damage",
    relicIds: ["relicBlade", "breakBrand"],
    rarity: 1,
    maxRarity: 3,
    cost: { "Thunder Horn": 1, "Minor Core": 3 },
  },
  {
    id: "star-archivist",
    name: "星書記",
    element: "star",
    role: "guard",
    maxHp: 520,
    hp: 520,
    level: 7,
    exp: 0,
    atk: 82,
    def: 78,
    rec: 92,
    burst: 58,
    hitFrames: [460],
    multiplier: 1.08,
    burstName: "星書の防壁",
    burstType: "guard",
    relicIds: ["aegisCharm", "burstCore"],
    rarity: 1,
    maxRarity: 3,
    cost: { "Judge Crest": 1, "Star Sigil": 1 },
  },
  {
    id: "shade-executioner",
    name: "影執行者",
    element: "shade",
    role: "attack",
    maxHp: 560,
    hp: 560,
    level: 8,
    exp: 0,
    atk: 128,
    def: 46,
    rec: 34,
    burst: 48,
    hitFrames: [210, 390, 610],
    multiplier: 0.82,
    burstName: "夜刑",
    burstType: "damage",
    relicIds: ["relicBlade", "syncLens"],
    rarity: 1,
    maxRarity: 3,
    cost: { "Reaper Chain": 1, "Abyss Pearl": 1 },
  },
  {
    id: "grove-titan",
    name: "樹巨人",
    element: "grove",
    role: "guard",
    maxHp: 760,
    hp: 760,
    level: 8,
    exp: 0,
    atk: 92,
    def: 94,
    rec: 28,
    burst: 44,
    hitFrames: [520],
    multiplier: 1.18,
    burstName: "巨樹の咆哮",
    burstType: "guard",
    relicIds: ["aegisCharm", "breakBrand"],
    rarity: 1,
    maxRarity: 3,
    cost: { "Moss Scale": 1, "Elder Sap": 1 },
  },
  {
    id: "eclipse-child",
    name: "蝕の子",
    element: "shade",
    role: "charge",
    maxHp: 500,
    hp: 500,
    level: 9,
    exp: 0,
    atk: 105,
    def: 52,
    rec: 70,
    burst: 100,
    hitFrames: [250, 370, 490, 610, 730],
    multiplier: 0.5,
    burstName: "蝕脈動",
    burstType: "charge",
    relicIds: ["burstCore", "relicBlade"],
    rarity: 1,
    maxRarity: 3,
    cost: { "Eclipse Core": 1, "Minor Core": 5 },
  },
];

const baseUnits = [
  {
    id: "flame-sword",
    name: "焔剣士",
    element: "flame",
    role: "attack",
    maxHp: 520,
    hp: 520,
    level: 8,
    exp: 30,
    atk: 116,
    def: 52,
    rec: 42,
    burst: 46,
    hitFrames: [240, 430, 610],
    multiplier: 0.74,
    burstName: "焔十字",
    burstType: "damage",
    leaderSkillId: "flame-vanguard",
    relicIds: ["relicBlade", "breakBrand"],
  },
  {
    id: "tide-mage",
    name: "潮術師",
    element: "tide",
    role: "heal",
    maxHp: 430,
    hp: 430,
    level: 7,
    exp: 80,
    atk: 82,
    def: 46,
    rec: 102,
    burst: 82,
    hitFrames: [420, 720],
    multiplier: 0.7,
    burstName: "潮癒し",
    burstType: "heal",
    relicIds: ["mercyBell", "burstCore"],
  },
  {
    id: "grove-guard",
    name: "樹守り",
    element: "grove",
    role: "guard",
    maxHp: 610,
    hp: 610,
    level: 7,
    exp: 10,
    atk: 88,
    def: 78,
    rec: 35,
    burst: 58,
    hitFrames: [300],
    multiplier: 1.15,
    burstName: "根護り",
    burstType: "guard",
    relicIds: ["aegisCharm"],
  },
  {
    id: "volt-archer",
    name: "雷射手",
    element: "volt",
    role: "charge",
    maxHp: 470,
    hp: 470,
    level: 8,
    exp: 60,
    atk: 95,
    def: 42,
    rec: 55,
    burst: 36,
    hitFrames: [170, 260, 350, 440, 530, 620],
    multiplier: 0.42,
    burstName: "雷連射",
    burstType: "charge",
    relicIds: ["burstCore", "syncLens"],
  },
  {
    id: "star-seer",
    name: "星詠み",
    element: "star",
    role: "sync",
    maxHp: 455,
    hp: 455,
    level: 7,
    exp: 95,
    atk: 90,
    def: 50,
    rec: 68,
    burst: 72,
    hitFrames: [390, 500, 610, 720],
    multiplier: 0.5,
    burstName: "星詠の拍子",
    burstType: "sync",
    relicIds: ["syncLens"],
  },
  {
    id: "shade-friend",
    name: "影助っ人",
    element: "shade",
    role: "attack",
    maxHp: 545,
    hp: 545,
    level: 9,
    exp: 40,
    atk: 108,
    def: 48,
    rec: 44,
    burst: 100,
    hitFrames: [250, 380, 520, 780],
    multiplier: 0.62,
    burstName: "影裂き",
    burstType: "damage",
    guest: true,
    friendSkillId: "friend-shadow-link",
    relicIds: ["breakBrand", "relicBlade"],
  },
  {
    id: "flame-priest",
    name: "焔導師",
    element: "flame",
    role: "heal",
    maxHp: 410,
    hp: 410,
    level: 6,
    exp: 20,
    atk: 76,
    def: 40,
    rec: 118,
    burst: 64,
    hitFrames: [360, 620],
    multiplier: 0.62,
    burstName: "焔の祝福",
    burstType: "heal",
    relicIds: ["mercyBell", "syncLens"],
  },
  {
    id: "shade-knight",
    name: "影騎士",
    element: "shade",
    role: "guard",
    maxHp: 590,
    hp: 590,
    level: 6,
    exp: 65,
    atk: 94,
    def: 72,
    rec: 32,
    burst: 54,
    hitFrames: [250, 560],
    multiplier: 0.88,
    burstName: "黒盾",
    burstType: "guard",
    relicIds: ["aegisCharm", "breakBrand"],
  },
  {
    id: "tide-duelist",
    name: "潮剣客",
    element: "tide",
    role: "attack",
    maxHp: 505,
    hp: 505,
    level: 6,
    exp: 35,
    atk: 106,
    def: 48,
    rec: 58,
    burst: 44,
    hitFrames: [220, 360, 580],
    multiplier: 0.7,
    burstName: "波断ち",
    burstType: "damage",
    relicIds: ["relicBlade", "burstCore"],
  },
  {
    id: "grove-ranger",
    name: "樹弓士",
    element: "grove",
    role: "sync",
    maxHp: 462,
    hp: 462,
    level: 6,
    exp: 15,
    atk: 91,
    def: 45,
    rec: 66,
    burst: 52,
    hitFrames: [180, 300, 420, 540, 660],
    multiplier: 0.46,
    burstName: "棘の拍子",
    burstType: "sync",
    relicIds: ["syncLens", "breakBrand"],
  },
  {
    id: "volt-monk",
    name: "雷拳士",
    element: "volt",
    role: "attack",
    maxHp: 535,
    hp: 535,
    level: 7,
    exp: 5,
    atk: 114,
    def: 50,
    rec: 42,
    burst: 38,
    hitFrames: [120, 210, 300, 470, 640],
    multiplier: 0.52,
    burstName: "雷鳴拳",
    burstType: "damage",
    relicIds: ["relicBlade", "syncLens"],
  },
  {
    id: "star-saint",
    name: "星聖女",
    element: "star",
    role: "heal",
    maxHp: 440,
    hp: 440,
    level: 7,
    exp: 55,
    atk: 78,
    def: 48,
    rec: 132,
    burst: 70,
    hitFrames: [500, 760],
    multiplier: 0.54,
    burstName: "聖光",
    burstType: "heal",
    relicIds: ["mercyBell", "burstCore"],
  },
  {
    id: "flame-gunner",
    name: "焔銃士",
    element: "flame",
    role: "charge",
    maxHp: 470,
    hp: 470,
    level: 6,
    exp: 45,
    atk: 101,
    def: 42,
    rec: 54,
    burst: 48,
    hitFrames: [140, 230, 320, 410, 500, 590],
    multiplier: 0.4,
    burstName: "焔装填",
    burstType: "charge",
    relicIds: ["burstCore", "breakBrand"],
  },
  {
    id: "shade-warlock",
    name: "影呪士",
    element: "shade",
    role: "sync",
    maxHp: 430,
    hp: 430,
    level: 8,
    exp: 25,
    atk: 98,
    def: 38,
    rec: 74,
    burst: 84,
    hitFrames: [340, 460, 580, 700],
    multiplier: 0.56,
    burstName: "呪奏",
    burstType: "sync",
    relicIds: ["syncLens", "mercyBell"],
  },
];

const questDefinitions = {
  shrine: {
  area: "AREA 1-4",
  name: "崩れた神殿",
  energyCost: 8,
  baseGold: 1240,
  baseKarma: 360,
  missions: [
    { id: "clear", label: "クエストをクリア" },
    { id: "sync8", label: "連携同期を8回発生" },
    { id: "noKo", label: "戦闘不能なしでクリア" },
  ],
  waves: [
    {
      id: "grove-golem",
      name: "翠門のゴーレム",
      element: "grove",
      maxHp: 4200,
      atk: 92,
      def: 44,
      maxBreak: 76,
      drop: "Grove Core",
    },
    {
      id: "volt-wolf",
      name: "雷牙の群れ",
      element: "volt",
      maxHp: 6100,
      atk: 118,
      def: 38,
      maxBreak: 86,
      drop: "Volt Claw",
    },
    {
      id: "shadow-warden",
      name: "影試練の番人",
      element: "shade",
      maxHp: 10800,
      atk: 132,
      def: 60,
      maxBreak: 100,
      drop: "Warden Sigil",
    },
  ],
  },
  material: {
    area: "裂界 1",
    name: "素材の裂け目",
    energyCost: 6,
    baseGold: 680,
    baseKarma: 520,
    missions: [
      { id: "clear", label: "クエストをクリア" },
      { id: "sync5", label: "連携同期を5回発生" },
      { id: "break1", label: "敵を1回崩す" },
    ],
    waves: [
      {
        id: "crystal-mite",
        name: "晶石虫",
        element: "star",
        maxHp: 3600,
        atk: 82,
        def: 30,
        maxBreak: 64,
        drop: "Burst Tome",
      },
      {
        id: "ore-guardian",
        name: "鉱石の守護者",
        element: "grove",
        maxHp: 5400,
        atk: 104,
        def: 54,
        maxBreak: 82,
        drop: "Relic Ore",
      },
    ],
  },
  highlands: {
    area: "AREA 2-1",
    name: "雷鳴の高地",
    energyCost: 9,
    baseGold: 1480,
    baseKarma: 430,
    unlockAfter: "shrine",
    missions: [
      { id: "clear", label: "クエストをクリア" },
      { id: "sync8", label: "連携同期を8回発生" },
      { id: "break1", label: "敵を1回崩す" },
    ],
    waves: [
      { id: "volt-hawk", name: "雷刃鳥", element: "volt", maxHp: 5200, atk: 126, def: 34, maxBreak: 78, drop: "Volt Feather" },
      { id: "storm-ogre", name: "嵐皮の巨人", element: "volt", maxHp: 7600, atk: 142, def: 56, maxBreak: 94, drop: "Thunder Horn" },
      { id: "sky-judge", name: "空審アズロン", element: "star", maxHp: 11600, atk: 150, def: 62, maxBreak: 112, drop: "Judge Crest" },
    ],
  },
  waterway: {
    area: "AREA 2-2",
    name: "潮硝子の水路",
    energyCost: 9,
    baseGold: 1520,
    baseKarma: 450,
    unlockAfter: "highlands",
    missions: [
      { id: "clear", label: "クエストをクリア" },
      { id: "sync5", label: "連携同期を5回発生" },
      { id: "noKo", label: "戦闘不能なしでクリア" },
    ],
    waves: [
      { id: "tide-siren", name: "潮硝子の歌姫", element: "tide", maxHp: 5800, atk: 118, def: 44, maxBreak: 82, drop: "Siren Scale" },
      { id: "reef-armor", name: "礁甲の守護者", element: "tide", maxHp: 8600, atk: 128, def: 72, maxBreak: 98, drop: "Reef Plate" },
      { id: "abyss-lord", name: "深淵王メロウ", element: "shade", maxHp: 12200, atk: 156, def: 58, maxBreak: 118, drop: "Abyss Pearl" },
    ],
  },
  groveDepths: {
    area: "AREA 2-3",
    name: "深樹の底",
    energyCost: 10,
    baseGold: 1620,
    baseKarma: 480,
    unlockAfter: "waterway",
    missions: [
      { id: "clear", label: "クエストをクリア" },
      { id: "break1", label: "敵を1回崩す" },
      { id: "noKo", label: "戦闘不能なしでクリア" },
    ],
    waves: [
      { id: "thorn-imp", name: "棘小鬼の群れ", element: "grove", maxHp: 6100, atk: 122, def: 42, maxBreak: 80, drop: "Thorn Seed" },
      { id: "moss-drake", name: "苔背の竜", element: "grove", maxHp: 9300, atk: 138, def: 68, maxBreak: 106, drop: "Moss Scale" },
      { id: "elder-root", name: "古根の母樹", element: "grove", maxHp: 13200, atk: 146, def: 78, maxBreak: 124, drop: "Elder Sap" },
    ],
  },
  eclipseGate: {
    area: "AREA 3-1",
    name: "蝕の門",
    energyCost: 12,
    baseGold: 1880,
    baseKarma: 560,
    unlockAfter: "groveDepths",
    missions: [
      { id: "clear", label: "クエストをクリア" },
      { id: "sync8", label: "連携同期を8回発生" },
      { id: "noKo", label: "戦闘不能なしでクリア" },
    ],
    waves: [
      { id: "star-oracle", name: "堕星の神託者", element: "star", maxHp: 8200, atk: 150, def: 54, maxBreak: 96, drop: "Star Sigil" },
      { id: "shade-reaper", name: "影縛りの死神", element: "shade", maxHp: 9800, atk: 164, def: 48, maxBreak: 104, drop: "Reaper Chain" },
      { id: "eclipse-twin", name: "双蝕核", element: "shade", maxHp: 15400, atk: 176, def: 70, maxBreak: 136, drop: "Eclipse Core" },
    ],
  },
};

const state = {
  currentView: "homeView",
  activeQuestId: "shrine",
  unlockedQuests: ["shrine"],
  roster: [],
  partyIds: [],
  rank: 12,
  energy: 24,
  maxEnergy: 30,
  questRecords: {},
  gold: 1600,
  karma: 420,
  materials: {},
  phase: "player",
  turn: 1,
  waveIndex: 0,
  speed: 1,
  syncWindowMs: 100,
  syncBonusTurns: 0,
  guardTurns: 0,
  fullGuardQueued: false,
  queuedXbbName: "",
  elementalField: null,
  items: {
    cure: 10,
    fujin: 5,
    shield: 3,
    revive: 1,
  },
  rewards: {
    gold: 0,
    karma: 0,
    exp: 0,
    drops: [],
  },
  battleStats: {
    koCount: 0,
    breaks: 0,
  },
  totalSyncs: 0,
  actionQueue: [],
  actedUnitIds: new Set(),
  party: [],
  enemy: null,
  sideEnemy: null,
  targetSlot: "main",
};

const els = {
  partyGrid: document.querySelector("#partyGrid"),
  enemyHpFill: document.querySelector("#enemyHpFill"),
  enemyBreakFill: document.querySelector("#enemyBreakFill"),
  breakBanner: document.querySelector("#breakBanner"),
  enemyName: document.querySelector("#enemyName"),
  enemyElement: document.querySelector("#enemyElement"),
  enemyIntent: document.querySelector("#enemyIntent"),
  areaLabel: document.querySelector("#areaLabel"),
  statusRail: document.querySelector("#statusRail"),
  battlefield: document.querySelector(".battlefield"),
  enemySprite: document.querySelector("#enemySprite"),
  sideEnemyButton: document.querySelector("#sideEnemyButton"),
  damageLayer: document.querySelector("#damageLayer"),
  messageLog: document.querySelector("#messageLog"),
  leaderSkillLabel: document.querySelector("#leaderSkillLabel"),
  friendSkillLabel: document.querySelector("#friendSkillLabel"),
  turnLabel: document.querySelector("#turnLabel"),
  phaseLabel: document.querySelector("#phaseLabel"),
  fieldLabel: document.querySelector("#fieldLabel"),
  syncCount: document.querySelector("#syncCount"),
  restartButton: document.querySelector("#restartButton"),
  speedButton: document.querySelector("#speedButton"),
  guardButton: document.querySelector("#guardButton"),
  autoButton: document.querySelector("#autoButton"),
  itemButtons: document.querySelectorAll("[data-item]"),
  waveLabel: document.querySelector("#waveLabel"),
  navButtons: document.querySelectorAll("[data-view-target]"),
  views: document.querySelectorAll(".app-view"),
  homeRank: document.querySelector("#homeRank"),
  homeEnergy: document.querySelector("#homeEnergy"),
  homeGold: document.querySelector("#homeGold"),
  saveStatus: document.querySelector("#saveStatus"),
  materialQuestCard: document.querySelector("#materialQuestCard"),
  materialQuestHint: document.querySelector("#materialQuestHint"),
  shrineMissionHint: document.querySelector("#shrineMissionHint"),
  materialMissionHint: document.querySelector("#materialMissionHint"),
  materialQuestButton: document.querySelector("#materialQuestButton"),
  unitList: document.querySelector("#unitList"),
  powerList: document.querySelector("#powerList"),
  materialWallet: document.querySelector("#materialWallet"),
  exchangeList: document.querySelector("#exchangeList"),
  extraQuestList: document.querySelector("#extraQuestList"),
  startQuestButton: document.querySelector("#startQuestButton"),
  resultOverlay: document.querySelector("#resultOverlay"),
  resultTitle: document.querySelector("#resultTitle"),
  resultGold: document.querySelector("#resultGold"),
  resultKarma: document.querySelector("#resultKarma"),
  resultExp: document.querySelector("#resultExp"),
  resultSync: document.querySelector("#resultSync"),
  dropList: document.querySelector("#dropList"),
  missionList: document.querySelector("#missionList"),
  resultRestartButton: document.querySelector("#resultRestartButton"),
};

function activeQuest() {
  return questDefinitions[state.activeQuestId];
}

function cloneUnit(unit) {
  return {
    ...unit,
    hp: unit.maxHp,
    burst: Math.max(unit.burst || 0, 36),
    ready: true,
  };
}

function initializeRoster() {
  if (state.roster.length === 0) {
    state.roster = baseUnits.map((unit) => ({
      ...unit,
      rarity: unit.rarity || 1,
      maxRarity: 3,
    }));
  } else {
    baseUnits.forEach((unit) => {
      if (!state.roster.some((entry) => entry.id === unit.id)) {
        state.roster.push({
          ...unit,
          rarity: unit.rarity || 1,
          maxRarity: 3,
        });
      }
    });
  }
  repairPartyIds();
}

function repairPartyIds() {
  const rosterIds = new Set(state.roster.map((unit) => unit.id));
  const repaired = [];
  state.partyIds.forEach((id) => {
    if (rosterIds.has(id) && !repaired.includes(id)) repaired.push(id);
  });
  state.roster.forEach((unit) => {
    if (repaired.length < PARTY_SIZE && !repaired.includes(unit.id)) repaired.push(unit.id);
  });
  state.partyIds = repaired.slice(0, PARTY_SIZE);
}

function saveGame() {
  const payload = {
    roster: state.roster,
    partyIds: state.partyIds,
    rank: state.rank,
    energy: state.energy,
    maxEnergy: state.maxEnergy,
    questRecords: state.questRecords,
    gold: state.gold,
    karma: state.karma,
    materials: state.materials,
    unlockedQuests: state.unlockedQuests,
  };
  try {
    localStorage.setItem("chain-burst-save", JSON.stringify(payload));
    if (els.saveStatus) els.saveStatus.textContent = "自動記録済み";
  } catch {
    if (els.saveStatus) els.saveStatus.textContent = "自動記録できません";
  }
}

function loadGame() {
  try {
    const raw = localStorage.getItem("chain-burst-save");
    if (!raw) return false;
    const payload = JSON.parse(raw);
    state.roster = payload.roster || [];
    state.partyIds = payload.partyIds || state.roster.slice(0, 6).map((unit) => unit.id);
    state.rank = payload.rank ?? state.rank;
    state.energy = payload.energy ?? state.energy;
    state.maxEnergy = payload.maxEnergy ?? state.maxEnergy;
    state.questRecords = payload.questRecords || {};
    state.gold = payload.gold ?? state.gold;
    state.karma = payload.karma ?? state.karma;
    state.materials = payload.materials || {};
    state.unlockedQuests = payload.unlockedQuests || ["shrine"];
    if (els.saveStatus) els.saveStatus.textContent = "記録を読み込みました";
    return true;
  } catch {
    if (els.saveStatus) els.saveStatus.textContent = "記録の読み込み失敗";
    return false;
  }
}

function showView(viewId) {
  state.currentView = viewId;
  els.views.forEach((view) => {
    view.hidden = view.id !== viewId;
  });
  els.navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewTarget === viewId);
  });
  document.body.classList.toggle("in-battle", viewId === "battleView");
  if (viewId === "homeView") renderHome();
  if (viewId === "questView") renderQuestUnlocks();
  if (viewId === "unitsView") renderUnitList();
  if (viewId === "powerView") renderPowerList();
  if (viewId === "exchangeView") renderExchange();
}

function renderHome() {
  els.homeRank.textContent = state.rank;
  els.homeEnergy.textContent = `${state.energy}/${state.maxEnergy}`;
  els.homeGold.textContent = state.gold;
  renderQuestUnlocks();
}

function renderQuestUnlocks() {
  const materialUnlocked = state.unlockedQuests.includes("material");
  els.materialQuestCard.classList.toggle("quest-card--locked", !materialUnlocked);
  els.materialQuestHint.textContent = materialUnlocked ? "2戦 / 星・樹 / バースト秘本とレリック素材" : "AREA 1-4 クリアで解放";
  els.materialQuestButton.disabled = !materialUnlocked;
  els.materialQuestButton.textContent = materialUnlocked ? "出撃" : "未解放";
  els.shrineMissionHint.textContent = missionSummary("shrine");
  els.materialMissionHint.textContent = materialUnlocked ? missionSummary("material") : "達成条件: -";
  renderExtraQuests();
}

function renderExtraQuests() {
  const questIds = ["highlands", "waterway", "groveDepths", "eclipseGate"];
  els.extraQuestList.innerHTML = questIds
    .map((questId) => {
      const quest = questDefinitions[questId];
      const unlocked = state.unlockedQuests.includes(questId);
      const elements = [...new Set(quest.waves.map((wave) => ELEMENT_LABELS[wave.element]))].join("・");
      return `
        <article class="quest-card ${unlocked ? "" : "quest-card--locked"}">
          <div>
            <strong>${quest.area}: ${quest.name}</strong>
            <span>${quest.waves.length}戦 / ${elements} / 体力 ${quest.energyCost}</span>
            <small>${unlocked ? missionSummary(questId) : `${questDefinitions[quest.unlockAfter]?.name || "前のクエスト"} クリアで解放`}</small>
          </div>
          <button type="button" data-start-quest="${questId}" ${unlocked ? "" : "disabled"}>${unlocked ? "出撃" : "未解放"}</button>
        </article>
      `;
    })
    .join("");
}

function missionSummary(questId) {
  const quest = questDefinitions[questId];
  const record = state.questRecords[questId] || {};
  const done = quest.missions.filter((mission) => record[mission.id]).length;
  return `達成条件: ${done}/${quest.missions.length}`;
}

function unitSummary(unit) {
  return `Lv ${unit.level} / 星${unit.rarity || 1} / 体力 ${unit.maxHp} / 攻撃 ${unit.atk} / レリック ${(unit.relicIds || []).length}`;
}

function renderUnitList() {
  els.unitList.innerHTML = state.roster
    .map(
      (unit) => {
        const inSquad = isInSquad(unit.id);
        return `
        <article class="unit-list__card">
          <span class="unit-list__icon element--${unit.element}">${ELEMENT_LABELS[unit.element]}</span>
          <div>
            <span class="unit-list__name">${unit.name}</span>
            <span class="unit-list__meta">${inSquad ? "出撃中" : "控え"} / ${unitSummary(unit)}</span>
            <span class="unit-list__meta">${partnerNameForRoster(unit.id)}</span>
          </div>
          <div class="unit-list__actions">
            <button type="button" data-squad-unit="${unit.id}" ${inSquad ? "disabled" : ""}>${inSquad ? "編成中" : "入替"}</button>
            <button type="button" data-view-target="powerView">強化</button>
          </div>
        </article>
      `;
      },
    )
    .join("");
  wireSquadButtons();
}

function isInSquad(unitId) {
  return state.partyIds.includes(unitId);
}

function wireSquadButtons() {
  document.querySelectorAll("[data-squad-unit]").forEach((button) => {
    button.addEventListener("click", () => toggleSquadUnit(button.dataset.squadUnit));
  });
}

function toggleSquadUnit(unitId) {
  if (isInSquad(unitId)) return;
  if (state.partyIds.length < PARTY_SIZE) {
    state.partyIds.push(unitId);
  } else {
    const replaceIndex = Math.max(0, state.partyIds.findIndex((id) => id !== "shade-friend"));
    state.partyIds[replaceIndex] = unitId;
  }
  repairPartyIds();
  saveGame();
  renderUnitList();
}

function renderPowerList() {
  els.powerList.innerHTML = state.roster
    .map(
      (unit) => {
        const training = trainingState(unit);
        const evolution = evolutionState(unit);
        return `
        <article class="unit-list__card">
          <span class="unit-list__icon element--${unit.element}">${ELEMENT_LABELS[unit.element]}</span>
          <div>
            <span class="unit-list__name">${unit.name}</span>
            <span class="unit-list__meta">${unitSummary(unit)}</span>
            <span class="unit-list__meta">経験 ${unit.exp}/${expToNext(unit.level)} / ${(unit.relicIds || []).map((id) => relicDefinitions[id]?.label).join(" / ")}</span>
            <span class="unit-list__cost">${training.detail}</span>
            <span class="unit-list__cost ${evolution.ready ? "" : "is-missing"}">${evolution.detail}</span>
          </div>
          <div class="unit-list__actions">
            <button type="button" data-train-unit="${unit.id}" ${training.ready ? "" : "disabled"} title="${training.detail}">訓練</button>
            <button type="button" data-evolve-unit="${unit.id}" ${evolution.ready ? "" : "disabled"} title="${evolution.detail}">進化</button>
            <button type="button" data-relic-unit="${unit.id}">レリック</button>
          </div>
        </article>
      `;
      },
    )
    .join("");
  wirePowerButtons();
}

function trainingState() {
  const hasTome = materialCount("Burst Tome") > 0;
  const hasGold = state.gold >= 120;
  return {
    ready: hasTome || hasGold,
    detail: hasTome ? `${materialLabel("Burst Tome")} x1 / 経験+180` : `ゼル120 / 経験+90 (${state.gold}/120)`,
  };
}

function evolutionMaterialName(unit) {
  return unit.rarity === 1 ? "Warden Sigil" : "Relic Ore";
}

function evolutionState(unit) {
  const materialName = evolutionMaterialName(unit);
  const needsLevel = unit.level < 10;
  const atCap = unit.rarity >= unit.maxRarity;
  const hasMaterial = materialCount(materialName) > 0;
  const hasKarma = state.karma >= 80;
  const missing = [];
  if (atCap) missing.push("最大進化");
  if (needsLevel) missing.push("Lv10必要");
  if (!hasMaterial) missing.push(`${materialLabel(materialName)} x1`);
  if (!hasKarma) missing.push(`カルマ ${state.karma}/80`);
  return {
    ready: !atCap && !needsLevel && hasMaterial && hasKarma,
    detail: atCap ? "進化: 最大" : `${materialLabel(materialName)} x1 / カルマ80${missing.length ? ` / 不足 ${missing.join("、")}` : ""}`,
  };
}

function materialCount(name) {
  return state.materials[name] || 0;
}

function materialLabel(name) {
  return materialLabels[name] || name;
}

function addMaterial(name, amount = 1) {
  state.materials[name] = materialCount(name) + amount;
}

function canPay(cost) {
  return Object.entries(cost).every(([name, amount]) => materialCount(name) >= amount);
}

function payCost(cost) {
  Object.entries(cost).forEach(([name, amount]) => {
    state.materials[name] = Math.max(0, materialCount(name) - amount);
  });
}

function costText(cost) {
  return Object.entries(cost)
    .map(([name, amount]) => `${materialLabel(name)} x${amount}`)
    .join(" / ");
}

function renderExchange() {
  const knownMaterials = [
    "Grove Core",
    "Volt Claw",
    "Warden Sigil",
    "Burst Tome",
    "Relic Ore",
    "Minor Core",
    "Volt Feather",
    "Thunder Horn",
    "Judge Crest",
    "Siren Scale",
    "Reef Plate",
    "Abyss Pearl",
    "Thorn Seed",
    "Moss Scale",
    "Elder Sap",
    "Star Sigil",
    "Reaper Chain",
    "Eclipse Core",
  ];
  els.materialWallet.innerHTML = knownMaterials.map((name) => `<span>${materialLabel(name)}<br>x${materialCount(name)}</span>`).join("");
  els.exchangeList.innerHTML = recruitableUnits
    .map((unit) => {
      const owned = state.roster.some((entry) => entry.id === unit.id);
      const affordable = canPay(unit.cost);
      return `
        <article class="unit-list__card">
          <span class="unit-list__icon element--${unit.element}">${ELEMENT_LABELS[unit.element]}</span>
          <div>
            <span class="unit-list__name">${unit.name}</span>
            <span class="unit-list__meta">${roleLabels[unit.role]} / ${unit.burstName}</span>
            <span class="unit-list__meta">${costText(unit.cost)}</span>
          </div>
          <div class="unit-list__actions">
            <button type="button" data-recruit-unit="${unit.id}" ${owned || !affordable ? "disabled" : ""}>${owned ? "契約済" : "契約"}</button>
          </div>
        </article>
      `;
    })
    .join("");
  document.querySelectorAll("[data-recruit-unit]").forEach((button) => {
    button.addEventListener("click", () => recruitUnit(button.dataset.recruitUnit));
  });
}

function recruitUnit(unitId) {
  const unit = recruitableUnits.find((entry) => entry.id === unitId);
  if (!unit || state.roster.some((entry) => entry.id === unitId) || !canPay(unit.cost)) return;
  payCost(unit.cost);
  const { cost, ...unitData } = unit;
  state.roster.push(unitData);
  if (state.partyIds.length < PARTY_SIZE) state.partyIds.push(unit.id);
  repairPartyIds();
  saveGame();
  renderExchange();
}

function wirePowerButtons() {
  document.querySelectorAll("[data-train-unit]").forEach((button) => {
    button.addEventListener("click", () => trainUnit(button.dataset.trainUnit));
  });
  document.querySelectorAll("[data-evolve-unit]").forEach((button) => {
    button.addEventListener("click", () => evolveUnit(button.dataset.evolveUnit));
  });
  document.querySelectorAll("[data-relic-unit]").forEach((button) => {
    button.addEventListener("click", () => cycleRelic(button.dataset.relicUnit));
  });
}

function trainUnit(unitId) {
  const unit = state.roster.find((entry) => entry.id === unitId);
  if (!unit) return;
  if (materialCount("Burst Tome") > 0) {
    state.materials["Burst Tome"] -= 1;
    unit.exp += 180;
    unit.burst = Math.min(200, unit.burst + 12);
  } else {
    if (state.gold < 120) return;
    state.gold -= 120;
    unit.exp += 90;
  }
  applyLevelUps(unit);
  saveGame();
  renderHome();
  renderPowerList();
}

function evolveUnit(unitId) {
  const unit = state.roster.find((entry) => entry.id === unitId);
  if (!unit || !evolutionState(unit).ready) return;
  const materialName = evolutionMaterialName(unit);
  if (materialCount(materialName) <= 0) return;
  state.materials[materialName] -= 1;
  state.karma -= 80;
  unit.rarity += 1;
  unit.maxHp = Math.floor(unit.maxHp * 1.16);
  unit.hp = unit.maxHp;
  unit.atk = Math.floor(unit.atk * 1.12);
  unit.def = Math.floor(unit.def * 1.1);
  unit.rec = Math.floor(unit.rec * 1.1);
  unit.burst = Math.min(200, unit.burst + 35);
  saveGame();
  renderHome();
  renderPowerList();
}

function cycleRelic(unitId) {
  const unit = state.roster.find((entry) => entry.id === unitId);
  if (!unit) return;
  const relicKeys = Object.keys(relicDefinitions);
  const currentFirst = unit.relicIds?.[0] || relicKeys[0];
  const next = relicKeys[(relicKeys.indexOf(currentFirst) + 1) % relicKeys.length];
  unit.relicIds = [next, ...(unit.relicIds || []).slice(1, 2)];
  saveGame();
  renderPowerList();
}

function applyLevelUps(unit) {
  let needed = expToNext(unit.level);
  while (unit.exp >= needed) {
    unit.exp -= needed;
    unit.level += 1;
    unit.maxHp = Math.floor(unit.maxHp * 1.035);
    unit.hp = Math.min(unit.maxHp, (unit.hp || unit.maxHp) + Math.floor(unit.maxHp * 0.18));
    unit.atk = Math.floor(unit.atk * 1.025);
    unit.def = Math.floor(unit.def * 1.02);
    unit.rec = Math.floor(unit.rec * 1.02);
    needed = expToNext(unit.level);
  }
}

function partnerNameForRoster(unitId) {
  const xbb = xbbDefinitions.find((definition) => definition.unitIds.includes(unitId));
  if (!xbb) return "No XBB pair";
  const partnerId = xbb.unitIds.find((id) => id !== unitId);
  const partner = state.roster.find((unit) => unit.id === partnerId);
  return partner ? `${xbb.name}: ${partner.name}` : xbb.name;
}

function createEnemyForWave(waveIndex) {
  const wave = activeQuest().waves[waveIndex];
  const isBoss = waveIndex === activeQuest().waves.length - 1 || wave.maxHp >= 7000;
  return {
    ...wave,
    hp: wave.maxHp,
    break: wave.maxBreak,
    breakVulnerableTurns: 0,
    statuses: [],
    triggerFlags: {},
    isBoss,
    barrierElement: null,
    barrierTurns: 0,
    atkMultiplier: 1,
    charged: false,
    turn: 0,
  };
}

function createSideEnemyForWave(waveIndex) {
  const wave = activeQuest().waves[waveIndex];
  return {
    id: `${wave.id}-add`,
    name: `${wave.name}の影`,
    element: wave.element === "shade" ? "star" : "shade",
    maxHp: Math.floor(wave.maxHp * 0.34),
    hp: Math.floor(wave.maxHp * 0.34),
    atk: Math.floor(wave.atk * 0.72),
    def: Math.floor(wave.def * 0.7),
    drop: "Minor Core",
  };
}

function currentTarget() {
  if (state.targetSlot === "side" && state.sideEnemy && state.sideEnemy.hp > 0) return state.sideEnemy;
  return state.enemy;
}

function spendQuestEnergy() {
  const quest = activeQuest();
  if (state.energy < quest.energyCost) {
    if (els.saveStatus) els.saveStatus.textContent = `体力不足: ${quest.energyCost}必要`;
    showView("homeView");
    return false;
  }
  state.energy -= quest.energyCost;
  renderHome();
  return true;
}

function startQuest(questId) {
  state.activeQuestId = questId;
  if (!spendQuestEnergy()) return;
  showView("battleView");
  resetBattle();
  saveGame();
}

function resetBattle() {
  repairPartyIds();
  state.phase = "player";
  state.turn = 1;
  state.waveIndex = 0;
  state.syncWindowMs = window.COMBAT.syncWindowMs;
  state.syncBonusTurns = 0;
  state.guardTurns = 0;
  state.fullGuardQueued = false;
  state.queuedXbbName = "";
  state.elementalField = null;
  state.items = {
    cure: 10,
    fujin: 5,
    shield: 3,
    revive: 1,
  };
  state.rewards = {
    gold: 0,
    karma: 0,
    exp: 0,
    drops: [],
  };
  state.battleStats = {
    koCount: 0,
    breaks: 0,
  };
  state.totalSyncs = 0;
  state.actionQueue = [];
  state.actedUnitIds = new Set();
  state.party = state.partyIds
    .map((id) => state.roster.find((unit) => unit.id === id))
    .filter(Boolean)
    .map(cloneUnit);
  state.enemy = createEnemyForWave(0);
  state.sideEnemy = createSideEnemyForWave(0);
  state.targetSlot = "main";
  els.resultOverlay.hidden = true;
  log(`${activeQuest().waves.length}戦クエスト開始。連携同期、XBB、崩しで押し切りましょう。`);
  render();
}

function log(message) {
  els.messageLog.textContent = message;
}

function elementMultiplier(attackerElement, defenderElement) {
  const cfg = window.COMBAT;
  if (ELEMENT_ADVANTAGE[attackerElement] === defenderElement) return cfg.elementAdvantage;
  if (ELEMENT_ADVANTAGE[defenderElement] === attackerElement) return cfg.elementResist;
  return cfg.elementNeutral;
}

function weaknessElementFor(element) {
  return Object.entries(ELEMENT_ADVANTAGE).find(([, defender]) => defender === element)?.[0] || element;
}

function activeLeaderSkill() {
  const leader = state.party.find((unit) => unit.leaderSkillId);
  return leader ? leaderSkills[leader.leaderSkillId] : null;
}

function activeFriendSkill() {
  const friend = state.party.find((unit) => unit.friendSkillId);
  return friend ? leaderSkills[friend.friendSkillId] : null;
}

function unitRelics(unit) {
  if (!unit) return [];
  return (unit.relicIds || []).map((id) => relicDefinitions[id]).filter(Boolean);
}

function relicProduct(unit, key) {
  return unitRelics(unit).reduce((value, relic) => value * (relic[key] || 1), 1);
}

function relicSum(unit, key) {
  return unitRelics(unit).reduce((value, relic) => value + (relic[key] || 0), 0);
}

// Brave Frontier 構造のダメージ式:
//   [(ATK+imp) x (1 + Σ加算%)] - DEF*defFactor   ← 加算ブロック
//     x Spark x 属性 x クリティカル x Break x バリア  ← 乗算条件項
//     + ATK/rand(25,32)                              ← 微少加算
// 戻り値: { damage, crit, weak } (表示色の出し分けに使う)
function calculateDamage(unit, multiplier, opts = {}) {
  const cfg = window.COMBAT;
  const isSync = !!opts.isSync;
  const leader = activeLeaderSkill();
  const friend = activeFriendSkill();
  const target = currentTarget();

  // --- 加算ブロック: ATK x (1 + Σ%) x skillMultiplier ---
  let atkPct = 0;
  atkPct += (leader?.atkMultiplier || 1) - 1; // リーダーの ATK%
  atkPct += relicProduct(unit, "damageMultiplier") - 1; // レリックの与ダメ%
  if (state.elementalField?.element === unit.element) atkPct += cfg.fieldAtkBonus; // 属性フィールド
  if (state.queuedXbbName && friend?.xbbMultiplier) atkPct += friend.xbbMultiplier - 1; // XBB連携
  const atkBlock = (unit.atk + (unit.atkImp || 0)) * (1 + atkPct) * multiplier;

  // --- DEF 減算 (本家は減算式) ---
  const afterDef = Math.max(1, atkBlock - target.def * cfg.defFactor);

  // --- 乗算条件項 ---
  // Spark (本家準拠で上限なし。リーダー/レリックの同期ボーナスは加算で寄与)
  let sparkTerm = 1;
  if (isSync) {
    let sparkMod = opts.sparkMod || 0;
    sparkMod += (leader?.syncMultiplier || 1) - 1;
    sparkMod += relicProduct(unit, "syncMultiplier") - 1;
    sparkTerm = cfg.sparkBase + sparkMod;
  }
  // 属性
  const elemMult = elementMultiplier(unit.element, target.element);
  const weak = elemMult > cfg.elementNeutral;
  // クリティカル (基礎10%。非クリは乱数 0.95-1.05)
  const critRate = cfg.critRate + relicSum(unit, "critRateBonus");
  const crit = Math.random() < critRate;
  const critTerm = crit
    ? cfg.critBase + relicSum(unit, "critDamageBonus")
    : cfg.varianceMin + Math.random() * (cfg.varianceMax - cfg.varianceMin);
  // Break 脆弱
  const breakTerm = state.enemy.breakVulnerableTurns > 0 ? cfg.breakBonus : 1;
  // ボスの属性バリア
  let barrierTerm = 1;
  if (target === state.enemy && state.enemy.barrierElement) {
    barrierTerm = unit.element === state.enemy.barrierElement ? cfg.barrierMatch : cfg.barrierMiss;
  }

  // --- 微少加算項: + ATK / rand(25,32) ---
  const [dMin, dMax] = cfg.minorAdditiveDiv;
  const minor = unit.atk / (dMin + Math.floor(Math.random() * (dMax - dMin + 1)));

  const damage = Math.floor(afterDef * sparkTerm * elemMult * critTerm * breakTerm * barrierTerm + minor);
  return { damage: Math.max(1, damage), crit, weak };
}

function addEnemyStatus(type, turns, power = 1) {
  const existing = state.enemy.statuses.find((status) => status.type === type);
  if (existing) {
    existing.turns = Math.max(existing.turns, turns);
    existing.power = Math.max(existing.power, power);
  } else {
    state.enemy.statuses.push({ type, turns, power });
  }
}

function tickEnemyStatuses() {
  let totalDot = 0;
  state.enemy.statuses.forEach((status) => {
    if (status.type === "burn") totalDot += Math.floor(state.enemy.maxHp * 0.018 * status.power);
    if (status.type === "poison") totalDot += Math.floor(state.enemy.maxHp * 0.025 * status.power);
    status.turns -= 1;
  });
  state.enemy.statuses = state.enemy.statuses.filter((status) => status.turns > 0);
  if (totalDot > 0) {
    state.enemy.hp = Math.max(0, state.enemy.hp - totalDot);
    showDamage(totalDot, "weak");
    log(`状態異常で敵に${totalDot}ダメージ。`);
  }
}

function applyHitStatus(unit, isSync, source) {
  const isSpecial = isSync || source === "xbb" || source === "sbb";
  if (unit.element === "flame" && isSpecial) addEnemyStatus("burn", 3, source === "xbb" || source === "sbb" ? 1.4 : 1);
  if (unit.element === "grove" && isSpecial) addEnemyStatus("poison", 3, source === "sbb" ? 1.3 : 1);
  if (unit.element === "volt" && isSpecial) addEnemyStatus("shock", 2, 1);
  if (unit.element === "shade" && source === "xbb") addEnemyStatus("curse", 2, 1);
  if (unit.element === "shade" && source === "sbb") addEnemyStatus("curse", 2, 1);
}

function createElementalField(element) {
  state.elementalField = { element, turns: 3 };
}

function checkEnemyHpTriggers() {
  const enemy = state.enemy;
  if (!enemy || !enemy.isBoss || enemy.hp <= 0) return;
  const hpRatio = enemy.hp / enemy.maxHp;

  if (hpRatio <= 0.7 && !enemy.triggerFlags.barrier) {
    enemy.triggerFlags.barrier = true;
    enemy.barrierElement = weaknessElementFor(enemy.element);
    enemy.barrierTurns = 2;
    log(`${enemy.name}が${ELEMENT_LABELS[enemy.barrierElement]}属性バリアを展開。対応属性以外のダメージが落ちます。`);
  }

  if (hpRatio <= 0.5 && !enemy.triggerFlags.rage) {
    enemy.triggerFlags.rage = true;
    enemy.atkMultiplier = 1.22;
    enemy.break = Math.min(enemy.maxBreak, enemy.break + 28);
    if (!state.sideEnemy || state.sideEnemy.hp <= 0) state.sideEnemy = createSideEnemyForWave(state.waveIndex);
    log(`${enemy.name}が怒り状態へ移行。攻撃力とBreak耐性が上昇。`);
  }

  if (hpRatio <= 0.25 && !enemy.triggerFlags.overdrive) {
    enemy.triggerFlags.overdrive = true;
    enemy.charged = true;
    enemy.barrierElement = null;
    enemy.barrierTurns = 0;
    log(`${enemy.name}が奥義を詠唱。次の敵ターンは全体大技です。`);
  }
}

function queueNormalAttack(unit) {
  const offset = state.actionQueue.length * 95;
  unit.hitFrames.forEach((frame, index) => {
    state.actionQueue.push({
      attackerId: unit.id,
      attackerName: unit.name,
      element: unit.element,
      hitTimeMs: frame + offset,
      multiplier: unit.multiplier,
      source: "normal",
      hitIndex: index,
    });
  });
  unit.ready = false;
  state.actedUnitIds.add(unit.id);
  gainBurst(unit, window.COMBAT.fillOnAttack);
  log(`${unit.name}が攻撃準備。順番を変えると同期タイミングが変わります。`);
}

function burstTier(unit) {
  return unit.burst >= 200 ? "SBB" : "BB";
}

function queueBurst(unit) {
  if (unit.burst < 100) {
    log(`${unit.name}のBBゲージが足りません。`);
    return;
  }

  const tier = burstTier(unit);
  const isSbb = tier === "SBB";
  unit.burst -= isSbb ? 200 : 100;
  unit.ready = false;
  state.actedUnitIds.add(unit.id);

  if (unit.burstType === "damage") {
    const frames = isSbb ? [150, 240, 330, 420, 510, 600, 690, 820] : [210, 330, 450, 570, 690];
    frames.forEach((frame, index) => {
      state.actionQueue.push({
        attackerId: unit.id,
        attackerName: unit.name,
        element: unit.element,
        hitTimeMs: frame + state.actionQueue.length * 34,
        multiplier: isSbb ? 1.18 : 0.98,
        source: isSbb ? "sbb" : "burst",
        hitIndex: index,
      });
    });
    if (isSbb) {
      state.enemy.break = Math.max(0, state.enemy.break - 18 * relicProduct(unit, "breakDamageMultiplier"));
    }
    log(`${unit.name}が${tier}: ${unit.burstName}を放つ。`);
  }

  if (unit.burstType === "heal") {
    const amount = Math.floor(unit.rec * (isSbb ? 2.8 : 1.9) * relicProduct(unit, "healingMultiplier"));
    state.party.forEach((ally) => {
      if (ally.hp > 0) ally.hp = Math.min(ally.maxHp, ally.hp + amount);
      if (isSbb && ally.hp > 0) gainBurst(ally, 12);
    });
    showDamage(`+${amount}`, "heal");
    log(`${unit.name}が${tier}で全体を回復。`);
  }

  if (unit.burstType === "guard") {
    state.guardTurns = isSbb ? 3 : 2;
    if (isSbb) livingParty().forEach((ally) => gainBurst(ally, 10));
    log(`${unit.name}が${tier}で守りを固めた。敵の攻撃を軽減します。`);
  }

  if (unit.burstType === "charge") {
    state.party.forEach((ally) => {
      if (ally.hp > 0 && ally.id !== unit.id) gainBurst(ally, isSbb ? 42 : 25);
    });
    if (isSbb) createElementalField(unit.element);
    log(`${unit.name}が${tier}で全体のBurstゲージを押し上げた。`);
  }

  if (unit.burstType === "sync") {
    state.syncWindowMs = isSbb ? 175 : 140;
    state.syncBonusTurns = isSbb ? 3 : 2;
    if (isSbb) gainBurst(unit, 55);
    log(`${unit.name}が${tier}で連携同期の判定幅を広げた。`);
  }
}

function gainBurst(unit, amount) {
  unit.burst = Math.min(200, unit.burst + amount * relicProduct(unit, "burstGainMultiplier"));
}

// 本家の BC ドロップチェック式ゲージ充填:
//   各ヒットごとに bcDropRate で抽選し、成功したら BC 1個分 (bcValue) を充填する。
//   Spark 成立ヒットは sparkBcBonus ぶんドロップ率が上がる (本家 on-spark BC 相当)。
//   ヒット数が多いユニットほどゲージが回るので、ヒット数=ゲージ回転という本家の手触りになる。
function rollHitBc(unit, isSync) {
  const cfg = window.COMBAT;
  let rate = cfg.bcDropRate + relicSum(unit, "bcDropBonus");
  if (isSync) rate += cfg.sparkBcBonus;
  if (Math.random() < rate) gainBurst(unit, cfg.bcValue);
}

function handleUnitClick(unitId, useBurst) {
  if (state.phase !== "player") return;
  const unit = state.party.find((entry) => entry.id === unitId);
  if (!unit || unit.hp <= 0 || !unit.ready) return;

  if (useBurst) {
    if (unit.burst < 100) return; // ゲージ不足の長押し/スワイプは不発 (本家と同じ)
    queueBurst(unit);
  } else {
    queueNormalAttack(unit);
  }

  render();
  if (state.actedUnitIds.size === livingParty().length) {
    resolvePlayerActions();
  }
}

// スマホ向けタッチジェスチャ: タップ=通常攻撃 / 長押し・上スワイプ=Brave Burst。
// PC は右クリック(contextmenu)/Shift+クリックでも Burst を発動できる。
function wireUnitGesture(button, unitId) {
  const LONG_MS = 300;
  const SWIPE_PX = 26;
  let timer = null;
  let startY = 0;
  let fired = false;
  let longPressed = false;

  const fire = (useBurst) => {
    if (fired) return;
    fired = true;
    button.classList.remove("is-pressing", "is-charging");
    handleUnitClick(unitId, useBurst);
  };

  button.addEventListener("pointerdown", (event) => {
    if (button.disabled) return;
    fired = false;
    longPressed = false;
    startY = event.clientY;
    button.classList.add("is-pressing");
    timer = setTimeout(() => {
      longPressed = true;
      button.classList.add("is-charging");
      fire(true); // 長押し → Burst
    }, LONG_MS);
  });

  button.addEventListener("pointermove", (event) => {
    if (fired) return;
    if (startY - event.clientY > SWIPE_PX) {
      clearTimeout(timer);
      fire(true); // 上スワイプ → Burst
    }
  });

  button.addEventListener("pointerup", (event) => {
    clearTimeout(timer);
    button.classList.remove("is-pressing");
    if (!fired && !longPressed) fire(Boolean(event.shiftKey)); // タップ=通常 / Shift+クリック=Burst
  });

  const cancel = () => {
    clearTimeout(timer);
    button.classList.remove("is-pressing", "is-charging");
  };
  button.addEventListener("pointercancel", cancel);
  button.addEventListener("pointerleave", cancel);
  button.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    fire(true); // 右クリック → Burst
  });
}

// クリティカル/大Sync時の演出: ヒットストップ(敵スプライトのパンチ)と画面シェイク。
function triggerHitstop() {
  const sprite = els.enemySprite;
  if (!sprite) return;
  sprite.classList.remove("is-hitstop");
  void sprite.offsetWidth; // アニメ再起動のためリフロー
  sprite.classList.add("is-hitstop");
  setTimeout(() => sprite.classList.remove("is-hitstop"), 180);
}

function shakeScreen(strong) {
  const field = els.battlefield;
  if (!field) return;
  field.classList.remove("is-shake-sm", "is-shake-lg");
  void field.offsetWidth;
  field.classList.add(strong ? "is-shake-lg" : "is-shake-sm");
  setTimeout(() => field.classList.remove("is-shake-sm", "is-shake-lg"), 400);
}

function livingParty() {
  return state.party.filter((unit) => unit.hp > 0);
}

function detectSyncClusters(hits) {
  const sorted = [...hits].sort((a, b) => a.hitTimeMs - b.hitTimeMs);
  const clusters = [];

  sorted.forEach((hit) => {
    const cluster = clusters.find((entry) => {
      const attacker = state.party.find((unit) => unit.id === hit.attackerId);
      const bonus = attacker ? relicSum(attacker, "syncWindowBonusMs") : 0;
      return entry.some((clusterHit) => Math.abs(clusterHit.hitTimeMs - hit.hitTimeMs) <= state.syncWindowMs + bonus);
    });
    if (cluster) cluster.push(hit);
    else clusters.push([hit]);
  });

  return clusters.filter((cluster) => cluster.length >= 2);
}

function resolvePlayerActions() {
  if (state.phase !== "player") return;
  state.phase = "resolve";
  render();

  if (state.actionQueue.length === 0) {
    startEnemyTurn();
    return;
  }

  const hits = [...state.actionQueue].sort((a, b) => a.hitTimeMs - b.hitTimeMs);
  const syncHits = new Set();
  const syncClusters = detectSyncClusters(hits);
  syncClusters.forEach((cluster) => cluster.forEach((hit) => syncHits.add(hit)));
  state.totalSyncs += syncClusters.length;
  if (syncClusters.length > 0) {
    const friendBreak = activeFriendSkill()?.breakMultiplier || 1;
    const breakDamage = syncClusters.reduce((sum, cluster) => {
      const attacker = state.party.find((unit) => unit.id === cluster[0].attackerId);
      return sum + 12 * relicProduct(attacker, "breakDamageMultiplier") * friendBreak;
    }, 0);
    state.enemy.break = Math.max(0, state.enemy.break - breakDamage);
  }

  if (syncClusters.length >= 3) {
    const bonus = livingParty();
    bonus.forEach((unit) => gainBurst(unit, window.COMBAT.syncCountBonusBc));
  }

  const dominantSync = syncClusters
    .flat()
    .map((hit) => state.party.find((unit) => unit.id === hit.attackerId)?.element)
    .filter(Boolean)
    .reduce((counts, element) => {
      counts[element] = (counts[element] || 0) + 1;
      return counts;
    }, {});
  const fieldElement = Object.entries(dominantSync).sort((a, b) => b[1] - a[1])[0]?.[0];
  if (fieldElement && dominantSync[fieldElement] >= 3) {
    createElementalField(fieldElement);
  }

  syncClusters.forEach((cluster, index) => {
    setTimeout(() => showSync(cluster.length), scaleDelay(cluster[0].hitTimeMs + index * 40));
  });

  hits.forEach((hit) => {
    setTimeout(() => {
      const unit = state.party.find((entry) => entry.id === hit.attackerId);
      const target = currentTarget();
      if (!unit || !target || target.hp <= 0) return;
      const isSync = syncHits.has(hit);
      const result = calculateDamage(unit, hit.multiplier, { isSync });
      target.hp = Math.max(0, target.hp - result.damage);
      rollHitBc(unit, isSync);
      if (target === state.enemy) applyHitStatus(unit, isSync, hit.source);
      flashEnemy();
      showHitEffect(isSync);
      showDamage(result.damage, result.crit ? "crit" : isSync ? "sync" : result.weak ? "weak" : "normal");
      if (result.crit) {
        triggerHitstop();
        shakeScreen(false);
      }
      if (target === state.enemy) checkEnemyHpTriggers();
      render();

      if (target === state.sideEnemy && state.sideEnemy.hp <= 0) {
        collectDrop(state.sideEnemy.drop);
        state.targetSlot = "main";
        log("サブ敵を撃破。ターゲットをボスへ戻します。");
        render();
      }

      if (state.enemy.hp <= 0) {
        handleEnemyDefeated("attack");
      }
    }, scaleDelay(hit.hitTimeMs));
  });

  const endDelay = Math.max(...hits.map((hit) => hit.hitTimeMs)) + 760;
  setTimeout(() => {
    if (state.enemy.hp > 0) startEnemyTurn();
  }, scaleDelay(endDelay));
}

function handleEnemyDefeated(source) {
  if (state.phase === "waveClear" || state.phase === "win") return;
  collectDrop(state.enemy.drop);

  if (state.waveIndex >= activeQuest().waves.length - 1) {
    completeQuest(source);
    return;
  }

  state.phase = "waveClear";
  log(`${state.enemy.name}を撃破。次の戦闘へ進みます。`);
  render();
  setTimeout(advanceWave, scaleDelay(900));
}

function collectDrop(dropName) {
  state.rewards.drops.push(dropName);
  addMaterial(dropName, 1);
}

function advanceWave() {
  state.waveIndex += 1;
  state.phase = "player";
  state.actionQueue = [];
  state.actedUnitIds = new Set();
  state.enemy = createEnemyForWave(state.waveIndex);
  state.sideEnemy = createSideEnemyForWave(state.waveIndex);
  state.targetSlot = "main";
  livingParty().forEach((unit) => {
    unit.ready = true;
    gainBurst(unit, 10);
  });
  log(`第${state.waveIndex + 1}戦/${activeQuest().waves.length}: ${state.enemy.name} 出現。`);
  render();
}

function completeQuest(source) {
  state.phase = "win";
  const quest = activeQuest();
  state.rewards.gold = quest.baseGold + state.totalSyncs * 18 + state.waveIndex * 120;
  state.rewards.karma = quest.baseKarma + state.totalSyncs * 7;
  state.rewards.exp = 160 + state.totalSyncs * 5 + quest.waves.length * 40;
  state.gold += state.rewards.gold;
  state.karma += state.rewards.karma;
  state.rank += 1;
  state.maxEnergy = 30 + Math.floor(state.rank / 3) * 2;
  state.energy = Math.min(state.maxEnergy, state.energy + 4);
  if (state.activeQuestId === "shrine" && !state.unlockedQuests.includes("material")) {
    state.unlockedQuests.push("material");
  }
  unlockNextQuests(state.activeQuestId);
  const missionResults = evaluateMissions(state.activeQuestId);
  const missionRewards = awardMissionRewards(state.activeQuestId, missionResults);
  state.rewards.gold += missionRewards.gold;
  state.rewards.karma += missionRewards.karma;
  state.rewards.drops.push(...missionRewards.drops);
  const levelUps = grantPartyExp(state.rewards.exp);
  log(source === "status" ? "状態異常でクエストクリア。" : "クエストクリア。報酬を獲得しました。");
  if (levelUps.length > 0) {
    log(`${levelUps.join(" / ")} がLvアップ。`);
  }
  render();
  renderResult();
  saveGame();
}

function unlockNextQuests(completedQuestId) {
  Object.entries(questDefinitions).forEach(([questId, quest]) => {
    if (quest.unlockAfter === completedQuestId && !state.unlockedQuests.includes(questId)) {
      state.unlockedQuests.push(questId);
    }
  });
}

function grantPartyExp(amount) {
  const levelUps = [];
  state.party.forEach((unit) => {
    unit.exp += amount;
    const beforeLevel = unit.level;
    applyLevelUps(unit);
    if (unit.level > beforeLevel) levelUps.push(`${unit.name} Lv${unit.level}`);
    syncRosterUnit(unit);
  });
  return levelUps;
}

function syncRosterUnit(battleUnit) {
  const unit = state.roster.find((entry) => entry.id === battleUnit.id);
  if (!unit) return;
  ["level", "exp", "maxHp", "atk", "def", "rec", "rarity", "relicIds"].forEach((key) => {
    unit[key] = Array.isArray(battleUnit[key]) ? [...battleUnit[key]] : battleUnit[key];
  });
}

function expToNext(level) {
  return 120 + level * 24;
}

function renderResult() {
  els.resultTitle.textContent = activeQuest().name;
  els.resultGold.textContent = state.rewards.gold;
  els.resultKarma.textContent = state.rewards.karma;
  els.resultExp.textContent = state.rewards.exp;
  els.resultSync.textContent = state.totalSyncs;
  els.dropList.innerHTML = state.rewards.drops.map((drop) => `<span>${dropLabel(drop)}</span>`).join("");
  els.missionList.innerHTML = renderMissionResults(state.activeQuestId);
  els.resultOverlay.hidden = false;
}

function dropLabel(drop) {
  if (drop.startsWith("達成報酬: ")) return drop;
  return materialLabel(drop);
}

function evaluateMissions(questId) {
  const results = {};
  questDefinitions[questId].missions.forEach((mission) => {
    if (mission.id === "clear") results[mission.id] = true;
    if (mission.id === "sync8") results[mission.id] = state.totalSyncs >= 8;
    if (mission.id === "sync5") results[mission.id] = state.totalSyncs >= 5;
    if (mission.id === "noKo") results[mission.id] = state.battleStats.koCount === 0;
    if (mission.id === "break1") results[mission.id] = state.battleStats.breaks >= 1;
  });
  return results;
}

function awardMissionRewards(questId, missionResults) {
  const record = state.questRecords[questId] || {};
  const rewards = {
    gold: 0,
    karma: 0,
    drops: [],
  };
  Object.entries(missionResults).forEach(([missionId, complete]) => {
    if (!complete || record[missionId]) return;
    record[missionId] = true;
    state.gold += 180;
    state.karma += 60;
    addMaterial("Minor Core", 1);
    rewards.gold += 180;
    rewards.karma += 60;
    rewards.drops.push(`達成報酬: ${materialLabel("Minor Core")}`);
  });
  state.questRecords[questId] = record;
  return rewards;
}

function renderMissionResults(questId) {
  const record = state.questRecords[questId] || {};
  return questDefinitions[questId].missions
    .map((mission) => `<span class="${record[mission.id] ? "is-complete" : ""}">${record[mission.id] ? "★" : "☆"} ${mission.label}</span>`)
    .join("");
}

function scaleDelay(ms) {
  return Math.max(16, ms / state.speed);
}

function startEnemyTurn() {
  state.phase = "enemy";
  state.enemy.turn += 1;
  render();
  log("敵のターン。");

  setTimeout(() => {
    if (state.enemy.hp <= 0) return;
    tickEnemyStatuses();
    if (state.enemy.hp <= 0) {
      handleEnemyDefeated("status");
      return;
    }
    if (state.enemy.breakVulnerableTurns > 0) {
      state.enemy.breakVulnerableTurns = 0;
    }
    if (state.enemy.break <= 0) {
      const cursed = state.enemy.statuses.some((status) => status.type === "curse");
      state.enemy.break = cursed ? Math.floor(state.enemy.maxBreak * 0.65) : state.enemy.maxBreak;
      state.enemy.breakVulnerableTurns = 1;
      state.battleStats.breaks += 1;
      log("敵を崩した。敵は行動不能、味方全体のBBゲージが上昇。");
      livingParty().forEach((unit) => gainBurst(unit, 18));
      setTimeout(startNextPlayerTurn, scaleDelay(760));
      render();
      return;
    }
    const targets = livingParty();
    if (targets.length === 0) return;
    const pattern = bossPatternForTurn(state.enemy.turn);
    const target = targets[Math.floor(Math.random() * targets.length)];
    const guardMultiplier = state.fullGuardQueued ? 0.35 : state.guardTurns > 0 ? 0.62 : 1;
    const shockMultiplier = state.enemy.statuses.some((status) => status.type === "shock") ? 0.78 : 1;
    const enemyAtk = state.enemy.atk * (state.enemy.atkMultiplier || 1);
    let logMessage = "";

    if (pattern.id === "overdrive") {
      let totalDamage = 0;
      targets.forEach((ally) => {
        const damage = Math.max(
          1,
          Math.floor((enemyAtk * 1.12 * shockMultiplier - ally.def * 0.18) * guardMultiplier * relicProduct(ally, "damageTakenMultiplier")),
        );
        const beforeHp = ally.hp;
        ally.hp = Math.max(0, ally.hp - damage);
        if (beforeHp > 0 && ally.hp <= 0) state.battleStats.koCount += 1;
        gainBurst(ally, 18);
        totalDamage += damage;
      });
      state.enemy.charged = false;
      logMessage = `奥義発動。味方全体に合計${totalDamage}ダメージ。`;
    } else if (pattern.id === "allBurst") {
      let totalDamage = 0;
      targets.forEach((ally) => {
        const damage = Math.max(
          1,
          Math.floor((enemyAtk * 0.82 * shockMultiplier - ally.def * 0.28) * guardMultiplier * relicProduct(ally, "damageTakenMultiplier")),
        );
        const beforeHp = ally.hp;
        ally.hp = Math.max(0, ally.hp - damage);
        if (beforeHp > 0 && ally.hp <= 0) state.battleStats.koCount += 1;
        gainBurst(ally, 13);
        totalDamage += damage;
      });
      logMessage = `敵の全体攻撃。合計${totalDamage}ダメージ。`;
    } else if (pattern.id === "curse") {
      const damage = Math.max(
        1,
        Math.floor((enemyAtk * 0.74 * shockMultiplier - target.def * 0.24) * guardMultiplier * relicProduct(target, "damageTakenMultiplier")),
      );
      const beforeHp = target.hp;
      target.hp = Math.max(0, target.hp - damage);
      if (beforeHp > 0 && target.hp <= 0) state.battleStats.koCount += 1;
      target.burst = Math.max(0, target.burst - 24);
      logMessage = `${target.name}が呪いを受け、${damage}ダメージとBurst減少。`;
    } else if (pattern.id === "pierce") {
      const damage = Math.max(1, Math.floor(enemyAtk * 0.95 * shockMultiplier * guardMultiplier * relicProduct(target, "damageTakenMultiplier")));
      const beforeHp = target.hp;
      target.hp = Math.max(0, target.hp - damage);
      if (beforeHp > 0 && target.hp <= 0) state.battleStats.koCount += 1;
      gainBurst(target, 8);
      logMessage = `${target.name}が防御無視の${damage}ダメージを受けた。`;
    } else {
      const damage = Math.max(
        1,
        Math.floor((enemyAtk * 0.92 * shockMultiplier - target.def * 0.35) * guardMultiplier * relicProduct(target, "damageTakenMultiplier")),
      );
      const beforeHp = target.hp;
      target.hp = Math.max(0, target.hp - damage);
      if (beforeHp > 0 && target.hp <= 0) state.battleStats.koCount += 1;
      gainBurst(target, 8);
      logMessage = `${target.name}が${damage}ダメージを受けた。`;
    }

    log(logMessage);
    state.fullGuardQueued = false;
    render();

    if (livingParty().length === 0) {
      state.phase = "lose";
      log("敗北。Burstのタイミングを変えると耐えられるかもしれません。");
      render();
      return;
    }

    setTimeout(startNextPlayerTurn, scaleDelay(660));
  }, scaleDelay(640));
}

function startNextPlayerTurn() {
  state.phase = "player";
  state.turn += 1;
  state.actionQueue = [];
  state.fullGuardQueued = false;
  state.queuedXbbName = "";
  state.actedUnitIds = new Set();
  livingParty().forEach((unit) => {
    unit.ready = true;
  });

  if (state.guardTurns > 0) state.guardTurns -= 1;
  if (state.syncBonusTurns > 0) {
    state.syncBonusTurns -= 1;
    if (state.syncBonusTurns === 0) state.syncWindowMs = window.COMBAT.syncWindowMs;
  }
  if (state.elementalField) {
    state.elementalField.turns -= 1;
    if (state.elementalField.turns <= 0) state.elementalField = null;
  }
  if (state.enemy?.barrierTurns > 0) {
    state.enemy.barrierTurns -= 1;
    if (state.enemy.barrierTurns <= 0) state.enemy.barrierElement = null;
  }

  log("味方ターン。Shift+クリックでBB/SBB、通常クリックで攻撃。");
  render();
}

function showDamage(value, type) {
  const node = document.createElement("div");
  node.className = "damage-number";
  if (type === "weak") node.classList.add("is-weak");
  if (type === "sync") node.classList.add("is-sync");
  if (type === "crit") node.classList.add("is-crit");
  if (type === "heal") node.style.color = "#78f1a2";
  node.textContent = value;
  node.style.left = `${44 + Math.random() * 18}%`;
  node.style.top = `${38 + Math.random() * 16}%`;
  els.damageLayer.appendChild(node);
  setTimeout(() => node.remove(), 820);
}

function showHitEffect(isSync) {
  const slash = document.createElement("div");
  slash.className = `slash-effect ${isSync ? "is-sync" : ""}`;
  slash.style.left = `${28 + Math.random() * 20}%`;
  slash.style.top = `${34 + Math.random() * 20}%`;
  els.damageLayer.appendChild(slash);
  setTimeout(() => slash.remove(), 320);

  if (isSync) {
    for (let index = 0; index < 2; index += 1) {
      const crystal = document.createElement("div");
      crystal.className = "crystal-drop";
      crystal.style.setProperty("--x", `${-44 + Math.random() * 88}px`);
      crystal.style.left = `${42 + Math.random() * 18}%`;
      crystal.style.top = `${42 + Math.random() * 12}%`;
      els.damageLayer.appendChild(crystal);
      setTimeout(() => crystal.remove(), 820);
    }
  }
}

function showSync(count) {
  const node = document.createElement("div");
  node.className = "sync-callout";
  node.textContent = count >= 4 ? `完全同期 x${count}` : `同期 x${count}`;
  els.damageLayer.appendChild(node);
  setTimeout(() => node.remove(), 980);
  if (count >= 3) shakeScreen(count >= 4);
}

function flashEnemy() {
  els.enemySprite.classList.add("is-hit", "flash");
  setTimeout(() => els.enemySprite.classList.remove("is-hit", "flash"), 170);
}

function render() {
  renderEnemy();
  renderParty();
  renderSkillLabels();
  renderItems();
  els.areaLabel.textContent = activeQuest().area;
  els.waveLabel.textContent = `第${state.waveIndex + 1}戦/${activeQuest().waves.length}`;
  els.turnLabel.textContent = `${state.turn}`;
  els.phaseLabel.textContent = phaseLabel();
  els.syncCount.textContent = state.totalSyncs;
}

function renderItems() {
  els.itemButtons.forEach((button) => {
    const item = button.dataset.item;
    const count = state.items[item] || 0;
    const label = button.firstChild.textContent.trim();
    button.querySelector("span").textContent = `x${count}`;
    button.disabled = state.phase !== "player" || count <= 0;
    button.firstChild.textContent = `${label} `;
  });
}

function renderSkillLabels() {
  const leader = activeLeaderSkill();
  const friend = activeFriendSkill();
  els.leaderSkillLabel.textContent = leader ? `隊長: ${leader.label} - ${leader.description}` : "隊長: -";
  els.friendSkillLabel.textContent = friend ? `助っ人: ${friend.label} - ${friend.description}` : "助っ人: -";
}

function phaseLabel() {
  if (state.phase === "player") return "味方ターン";
  if (state.phase === "resolve") return "連携中";
  if (state.phase === "enemy") return "敵ターン";
  if (state.phase === "waveClear") return "戦闘突破";
  if (state.phase === "win") return "勝利";
  if (state.phase === "lose") return "敗北";
  return state.phase;
}

function renderEnemy() {
  els.enemyName.textContent = state.enemy.name;
  els.enemyElement.textContent = ELEMENT_LABELS[state.enemy.element];
  els.enemyElement.className = `element element--${state.enemy.element}`;
  const enemyChips = state.enemy.statuses.map((status) => `<span class="status-chip status-chip--${status.type}">${statusLabels[status.type]} ${status.turns}</span>`);
  if (state.enemy.barrierElement) enemyChips.push(`<span class="status-chip">${ELEMENT_LABELS[state.enemy.barrierElement]}障壁 ${state.enemy.barrierTurns}</span>`);
  if (state.enemy.atkMultiplier > 1) enemyChips.push(`<span class="status-chip status-chip--burn">怒り</span>`);
  if (state.enemy.charged) enemyChips.push(`<span class="status-chip status-chip--curse">奥義詠唱</span>`);
  els.statusRail.innerHTML = enemyChips.join("");
  const hpRatio = Math.max(0, state.enemy.hp / state.enemy.maxHp);
  els.enemyHpFill.style.width = `${hpRatio * 100}%`;
  els.enemyBreakFill.style.width = `${Math.max(0, state.enemy.break / state.enemy.maxBreak) * 100}%`;
  els.sideEnemyButton.hidden = !state.sideEnemy || state.sideEnemy.hp <= 0;
  els.sideEnemyButton.classList.toggle("is-targeted", state.targetSlot === "side");
  els.enemySprite.classList.toggle("is-targeted", state.targetSlot === "main");
  els.breakBanner.classList.toggle("is-active", state.enemy.breakVulnerableTurns > 0);
  const nextPattern = bossPatternForTurn(state.enemy.turn + 1);
  const bigAttackNext = nextPattern.danger;
  els.enemyIntent.textContent = `次: ${nextPattern.label}`;
  els.enemyIntent.classList.toggle("is-danger", bigAttackNext);
  renderElementalField();
}

function renderElementalField() {
  Object.keys(ELEMENT_LABELS).forEach((element) => {
    els.battlefield.classList.remove(`field-${element}`);
  });
  if (state.elementalField) {
    els.battlefield.classList.add(`field-${state.elementalField.element}`);
    els.fieldLabel.textContent = `${ELEMENT_LABELS[state.elementalField.element]}場 ${state.elementalField.turns}`;
  } else {
    els.fieldLabel.textContent = "場効果なし";
  }
}

function bossPatternForTurn(turn, enemy = state.enemy) {
  if (enemy?.charged) return { id: "overdrive", label: "奥義", danger: true };
  if (turn % 5 === 0) return { id: "curse", label: "呪撃", danger: true };
  if (turn % 3 === 0) return { id: "allBurst", label: "全体攻撃", danger: true };
  if (turn % 2 === 0) return { id: "pierce", label: "貫通", danger: false };
  return { id: "slash", label: "斬撃", danger: false };
}

function findReadyXbb() {
  const partyById = new Map(state.party.map((unit) => [unit.id, unit]));
  const totalBurst = state.party.reduce((sum, unit) => sum + Math.min(unit.burst, 100), 0);
  const xbbPercent = Math.floor((totalBurst / Math.max(1, state.party.length * 100)) * 100);
  if (xbbPercent < 75) return null;

  return xbbDefinitions.find((xbb) =>
    xbb.unitIds.every((unitId) => {
      const unit = partyById.get(unitId);
      return unit && unit.hp > 0 && unit.burst >= 100 && unit.ready;
    }),
  );
}

function partnerNameFor(unitId) {
  const xbb = xbbDefinitions.find((definition) => definition.unitIds.includes(unitId));
  if (!xbb) return "";
  const partnerId = xbb.unitIds.find((id) => id !== unitId);
  const partner = state.party.find((unit) => unit.id === partnerId);
  return partner ? `${xbb.name}: ${partner.name}` : xbb.name;
}

function renderParty() {
  els.partyGrid.innerHTML = "";
  const totalBurst = state.party.reduce((sum, unit) => sum + Math.min(unit.burst, 100), 0);
  const xbbPercent = Math.floor((totalBurst / Math.max(1, state.party.length * 100)) * 100);

  const xbbGauge = document.createElement("div");
  const readyXbb = findReadyXbb();
  const xbbReady = Boolean(readyXbb);
  xbbGauge.className = `xbb-gauge ${xbbReady ? "is-ready" : ""}`;
  xbbGauge.innerHTML = `
    <div class="xbb-gauge__crystal">
      <div class="xbb-gauge__fill" style="height: ${xbbPercent}%"></div>
    </div>
    <div class="xbb-gauge__label">${xbbReady ? readyXbb.name : `XBB ${xbbPercent}%`}</div>
  `;
  xbbGauge.title = xbbReady ? `${readyXbb.name} 発動可能` : "連携相手のBBゲージを満たすとXBBが発動できます";
  xbbGauge.addEventListener("click", () => {
    const activeXbb = findReadyXbb();
    if (!activeXbb || state.phase !== "player") return;
    const readyUnits = activeXbb.unitIds.map((id) => state.party.find((unit) => unit.id === id));
    readyUnits.forEach((unit) => {
      unit.burst -= 100;
      unit.ready = false;
      state.actedUnitIds.add(unit.id);
      activeXbb.hitFrames.forEach((frame, index) => {
        state.actionQueue.push({
          attackerId: unit.id,
          attackerName: unit.name,
          element: activeXbb.element,
          hitTimeMs: frame + index * 28,
          multiplier: activeXbb.multiplier,
          source: "xbb",
          hitIndex: index,
        });
      });
    });
    if (activeXbb.heal) {
      const healingBonus = readyUnits.reduce((value, unit) => value * relicProduct(unit, "healingMultiplier"), 1);
      const healAmount = Math.floor(activeXbb.heal * healingBonus);
      state.party.forEach((unit) => {
        if (unit.hp > 0) unit.hp = Math.min(unit.maxHp, unit.hp + healAmount);
      });
      showDamage(`+${healAmount}`, "heal");
    }
    if (activeXbb.syncWindowBonus) {
      state.syncWindowMs = 150;
      state.syncBonusTurns = Math.max(state.syncBonusTurns, activeXbb.syncWindowBonus);
    }
    const friendBreak = activeFriendSkill()?.breakMultiplier || 1;
    const relicBreak = readyUnits.reduce((value, unit) => value * relicProduct(unit, "breakDamageMultiplier"), 1);
    state.enemy.break = Math.max(0, state.enemy.break - activeXbb.breakDamage * friendBreak * relicBreak);
    state.queuedXbbName = activeXbb.name;
    log(`${readyUnits.map((unit) => unit.name).join(" + ")} が ${activeXbb.name} を構えた。`);
    render();
    if (state.actedUnitIds.size === livingParty().length) {
      resolvePlayerActions();
    }
  });
  els.partyGrid.appendChild(xbbGauge);

  state.party.forEach((unit, index) => {
    const isRight = index % 2 === 1;
    const button = document.createElement("button");
    button.className = `unit-card ${isRight ? "unit-card--right" : "unit-card--left"} ${unit.guest ? "is-guest" : ""}`;
    button.type = "button";
    button.style.gridColumn = isRight ? "3" : "1";
    button.style.gridRow = `${Math.floor(index / 2) + 1}`;
    button.disabled = state.phase !== "player" || !unit.ready || unit.hp <= 0;
    if (unit.ready && unit.hp > 0) {
      if (unit.burst >= 200) button.classList.add("is-ready-burst", "is-sbb-ready");
      else if (unit.burst >= 100) button.classList.add("is-ready-burst");
    }
    wireUnitGesture(button, unit.id);

    button.innerHTML = `
      <div class="unit-card__top">
        <span class="unit-card__name">${unit.name}</span>
        <span class="unit-card__portrait element--${unit.element}">${ELEMENT_LABELS[unit.element]}</span>
      </div>
      <span class="unit-card__level">Lv ${unit.level}</span>
      <span class="unit-card__hptext">${unit.hp}/${unit.maxHp}</span>
      <div class="unit-card__role">${roleLabels[unit.role]}</div>
      <div class="bar bar--hp"><span style="width: ${(unit.hp / unit.maxHp) * 100}%"></span></div>
      <div class="bar bar--burst"><span style="width: ${Math.min(100, unit.burst)}%"></span></div>
      <span class="alt-chip">技 3/3</span>
      <span class="relic-chip">${unitRelics(unit).map((relic) => relic.label).join(" / ")}</span>
      <span class="pair-chip">${partnerNameFor(unit.id)}</span>
      <div class="unit-card__hint">${unit.burst >= 200 ? "長押しでSBB" : unit.burst >= 100 ? "長押し/上スワイプでBB" : `BB ${Math.floor(unit.burst)}% / 経験 ${Math.floor((unit.exp / expToNext(unit.level)) * 100)}%`}</div>
    `;

    els.partyGrid.appendChild(button);
  });
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-view-target]");
  if (target) {
    showView(target.dataset.viewTarget);
    return;
  }
  const questTarget = event.target.closest("[data-start-quest]");
  if (questTarget) {
    const questId = questTarget.dataset.startQuest;
    if (!state.unlockedQuests.includes(questId)) return;
    startQuest(questId);
  }
});
els.startQuestButton.addEventListener("click", () => {
  startQuest("shrine");
});
els.materialQuestButton.addEventListener("click", () => {
  if (!state.unlockedQuests.includes("material")) return;
  startQuest("material");
});
els.restartButton.addEventListener("click", resetBattle);
els.resultRestartButton.addEventListener("click", () => {
  startQuest(state.activeQuestId);
});
els.guardButton.addEventListener("click", () => {
  if (state.phase !== "player") return;
  state.fullGuardQueued = true;
  state.party.forEach((unit) => {
    if (unit.hp > 0) unit.ready = false;
  });
  log("全員防御。敵ターンのダメージを大きく軽減します。");
  render();
  setTimeout(resolvePlayerActions, 260);
});
els.autoButton.addEventListener("click", () => {
  if (state.phase !== "player") return;
  livingParty().forEach((unit) => {
    if (unit.ready) queueNormalAttack(unit);
  });
  render();
  resolvePlayerActions();
});
els.itemButtons.forEach((button) => {
  button.addEventListener("click", () => useItem(button.dataset.item));
});
els.sideEnemyButton.addEventListener("click", () => {
  if (!state.sideEnemy || state.sideEnemy.hp <= 0 || state.phase !== "player") return;
  state.targetSlot = "side";
  log(`${state.sideEnemy.name}をターゲット。`);
  render();
});
els.enemySprite.addEventListener("click", () => {
  if (state.phase !== "player") return;
  state.targetSlot = "main";
  log(`${state.enemy.name}をターゲット。`);
  render();
});
els.speedButton.addEventListener("click", () => {
  state.speed = state.speed === 1 ? 1.5 : state.speed === 1.5 ? 2 : 1;
  els.speedButton.textContent = `${state.speed}x`;
});

function initApp() {
  if (!loadGame()) initializeRoster();
  else initializeRoster();
  showView("homeView");
}

initApp();

function useItem(item) {
  if (state.phase !== "player" || !state.items[item]) return;
  const alive = livingParty();
  if (item === "cure") {
    const target = alive.sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
    if (!target || target.hp === target.maxHp) {
      log("回復薬を使う対象がいません。");
      return;
    }
    target.hp = Math.min(target.maxHp, target.hp + 260);
    showDamage("+260", "heal");
    state.items.cure -= 1;
    log(`${target.name}に回復薬を使用。`);
  }

  if (item === "fujin") {
    const target = alive.sort((a, b) => a.burst - b.burst)[0];
    if (!target) return;
    gainBurst(target, 70);
    state.items.fujin -= 1;
    log(`${target.name}のBBゲージが上昇。`);
  }

  if (item === "shield") {
    state.guardTurns = Math.max(state.guardTurns, 2);
    state.items.shield -= 1;
    log("護盾薬を使用。2ターン防御効果。");
  }

  if (item === "revive") {
    const target = state.party.find((unit) => unit.hp <= 0);
    if (!target) {
      log("蘇生薬を使う対象がいません。");
      return;
    }
    target.hp = Math.floor(target.maxHp * 0.5);
    target.ready = state.phase === "player";
    state.items.revive -= 1;
    log(`${target.name}を復活させた。`);
  }

  render();
}
