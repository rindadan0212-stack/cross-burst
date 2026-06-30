// Combat tuning values — externalized per combat_prototype_spec_v0.md §10.
// Brave Frontier 本家の戦闘構造に寄せたパラメータ。値だけで挙動を調整できる。
// 参照: docs/research/brave_frontier_system_research_20260630.md
//   - 属性: 弱点 x1.5 / 耐性 x0.5 / 等倍 x1.0（本家準拠。耐性は旧0.75→0.5）
//   - ダメージ: [(ATK+imp) x (1+Σ%)] - DEF*defFactor, その後 Spark/属性/クリ を乗算
//   - BCゲージ: 各ヒットで bcDropRate 抽選 → 成功で bcValue 充填（ドロップチェック式）
//   - クリティカル: 基礎発生 critRate, クリ倍率 critBase
window.COMBAT = {
  // --- 属性補正 (element) ---
  elementAdvantage: 1.5, // 弱点を突いたとき
  elementNeutral: 1.0, // 等倍
  elementResist: 0.5, // 不利属性 (本家準拠で 0.5。旧プロト値は 0.75)
  fieldAtkBonus: 0.15, // 属性フィールド一致時の ATK% 加算 (加算ブロックへ)

  // --- スパーク / 同期 (spark) ---
  syncWindowMs: 100, // Chain Sync 判定幅 (ms)。state 初期値と一致
  sparkBase: 1.5, // Spark 成立ヒットの基礎倍率 (1.5 + sparkMod)。本家準拠で上限なし

  // --- クリティカル (critical) ---
  critRate: 0.1, // 基礎クリティカル発生率 (本家準拠 10%)
  critBase: 1.5, // 基礎クリティカル倍率 (本家準拠 x1.5)

  // --- BCゲージ経済 (drop-check 式) ---
  bcDropRate: 0.35, // 各ヒットの BC ドロップ率 (本家準拠 35%)
  sparkBcBonus: 0.25, // Spark 成立ヒットはドロップ率 +25% (本家 on-spark BC 相当)
  bcValue: 20, // BC 1個がゲージを満たす量 (burstGainMultiplier レリック=BC効率が乗算)
  fillOnAttack: 6, // 通常攻撃宣言時の基礎ゲージ充填 (本家 "BB fill when attacking" 相当)
  syncCountBonusBc: 8, // 1ターンに Spark 3回以上でパーティ全員に付与する BC

  // --- ダメージ計算 (damage) ---
  defFactor: 0.45, // DEF の減算係数 (afterDef = atkBlock - DEF*defFactor)
  varianceMin: 0.95, // 非クリ時のダメージ乱数下限
  varianceMax: 1.05, // 非クリ時のダメージ乱数上限
  minorAdditiveDiv: [25, 32], // 本家の微少加算項 + ATK / rand(25,32)

  // --- 崩し / バリア (break / barrier) ---
  breakBonus: 1.35, // Break 脆弱中の与ダメージ倍率
  barrierMatch: 1.22, // ボスバリアの対応属性ヒット
  barrierMiss: 0.62, // ボスバリアの非対応属性ヒット
};
