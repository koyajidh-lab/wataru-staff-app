import React from "react";

export default function WataruStaffApp() {
  const logo = "わたる";

  const prepData = {
    海鮮類: ["サーモン仕込み", "イカ下処理", "ホタテ保存方法"],
    肉類: ["ねぎま仕込み", "せせり仕込み", "豚バラカット"],
    野菜類: ["玉ねぎカット", "ししとう串打ち", "白ネギ仕込み"],
    その他: ["タレ補充", "炭準備", "薬味準備"],
  };

  const grillData = {
    海鮮類: [
      "ホタテ炙り焼き",
      "まぐろわさび山かけ",
      "車海老塩焼き",
      "サーモン炙り焼き",
      "ハラス塩焼き",
      "真鯛しそ焼き",
      "真鯛トマトチーズ",
      "真ダコ塩焼き",
      "ゲソ塩焼き",
      "ゲソ醤油焼き",
    ],

    肉類: [
      "六白黒豚塩焼き",
      "アスパラ豚巻き",
      "おくら豚巻き",
      "奴ネギ豚巻き",
      "トントロ塩焼き",
      "トントロタレ焼き",
    ],

    野菜類: ["ししとう焼き", "エリンギ焼き", "白ネギ焼き"],

    その他: ["炭管理", "盛り付け", "提供チェック"],
  };

  const recipes = [
    "出汁巻き",
    "唐揚げ",
    "ポテサラ",
    "鶏スープ",
    "つくね",
    "漬け込みタレ",
    "枝豆ペペロン",
  ];

  const [page, setPage] = React.useState("home");
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedMenu, setSelectedMenu] = React.useState(null);
  const [search, setSearch] = React.useState("");

  const renderCategoryPage = (title, data) => (
    <div className="space-y-4">
      <button
        onClick={() => {
          setPage("home");
          setSelectedCategory("");
          setSelectedMenu(null);
        }}
        className="bg-gray-200 px-4 py-2 rounded-xl"
      >
        ← 戻る
      </button>

      <h1 className="text-2xl font-bold">{title}</h1>

      {!selectedCategory ? (
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(data).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="bg-white text-gray-800 rounded-[28px] p-6 text-lg shadow-xl border border-gray-100 active:scale-95 transition"
            >
              {category}
            </button>
          ))}
        </div>
      ) : selectedMenu ? (
        <div className="space-y-4">
          <button
            onClick={() => setSelectedMenu(null)}
            className="bg-gray-100 px-4 py-2 rounded-xl"
          >
            ← メニュー一覧へ戻る
          </button>

          <div className="bg-white rounded-[28px] shadow-xl overflow-hidden border border-gray-100">
            <div className="relative h-56 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent)]"></div>

              <div className="text-center space-y-2 z-10">
                <div className="text-5xl">🍢</div>

                <div className="text-gray-700 font-semibold">
                  完成イメージ
                </div>

                <div className="text-sm text-gray-500">
                  写真・動画は後日追加予定
                </div>
              </div>
            </div>

            <div className="p-5 space-y-5">
              <h2 className="text-2xl font-bold">{selectedMenu}</h2>

              <div className="space-y-3">
                <div className="bg-slate-50 rounded-2xl p-4">
                  <h3 className="font-bold mb-2">火加減</h3>

                  <p className="text-gray-600">メニューごとに調整</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4">
                  <h3 className="font-bold mb-2">焼き方</h3>

                  <p className="text-gray-600">
                    両面を均等に焼き、香ばしく仕上げる。
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4">
                  <h3 className="font-bold mb-2">仕上げ</h3>

                  <p className="text-gray-600">
                    提供前に最終確認して盛り付け。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <button
            onClick={() => setSelectedCategory("")}
            className="bg-gray-100 px-4 py-2 rounded-xl"
          >
            ← カテゴリーへ戻る
          </button>

          <h2 className="text-xl font-semibold">{selectedCategory}</h2>

          <div className="space-y-2">
            {data[selectedCategory].map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedMenu(item)}
                className="bg-white rounded-[24px] shadow-lg p-4 border border-gray-100 text-left w-full active:scale-95 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white p-4 text-gray-800">
      <div className="max-w-sm mx-auto space-y-5">
        <div className="bg-[#0b1d51] rounded-[32px] p-8 shadow-2xl text-center text-white space-y-3">
          <div className="text-5xl font-bold tracking-widest">{logo}</div>

          <p className="text-white/70 text-sm">
            備長串屋わたる スタッフ専用
          </p>
        </div>

        {page === "home" && (
          <div className="space-y-4">
            <button
              onClick={() => setPage("prep")}
              className="w-full bg-white text-gray-800 p-5 rounded-[28px] text-xl shadow-xl border border-gray-100 active:scale-95 transition"
            >
              仕込みマニュアル
            </button>

            <button
              onClick={() => setPage("grill")}
              className="w-full bg-white text-gray-800 p-5 rounded-[28px] text-xl shadow-xl border border-gray-100 active:scale-95 transition"
            >
              串焼きマニュアル
            </button>

            <button
              onClick={() => setPage("recipes")}
              className="w-full bg-white text-gray-800 p-5 rounded-[28px] text-xl shadow-xl border border-gray-100 active:scale-95 transition"
            >
              レシピ一覧
            </button>
          </div>
        )}

        {page === "prep" &&
          renderCategoryPage("仕込みマニュアル", prepData)}

        {page === "grill" &&
          renderCategoryPage("串焼きマニュアル", grillData)}

        {page === "recipes" && (
          <div className="space-y-4">
            <button
              onClick={() => setPage("home")}
              className="bg-gray-200 px-4 py-2 rounded-xl"
            >
              ← 戻る
            </button>

            <h1 className="text-2xl font-bold">レシピ一覧</h1>

            <input
              type="text"
              placeholder="レシピ検索..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-[24px] p-4 shadow-sm bg-white"
            />

            <div className="space-y-2">
              {filteredRecipes.map((recipe, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[24px] shadow-lg p-4 border border-gray-100"
                >
                  {recipe}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
