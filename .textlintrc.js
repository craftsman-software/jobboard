module.exports = {
  filters: {
    comments: true,
    allowlist: {
      allow: [],
    },
  },
  rules: {
    // 日本語周りにおけるスペースの有無を決定する
    "preset-ja-spacing": {
      // インラインコードの周りをスペースで囲まない
      "ja-space-around-code": true,
      // 文末に疑問符を使用し、後に別の文が続く場合は、直後に全角スペースを挿入します。 → しない
      "ja-space-after-question": false,
    },
    // 技術文書向けのルール
    "preset-ja-technical-writing": {
      // 冗長な表現をチェックする
      "ja-no-redundant-expression": {
        dictOptions: {
          // "すること[助詞]できる"
          // https://github.com/textlint-ja/textlint-rule-ja-no-redundant-expression#dict2
          dict2: {
            disabled: true,
          },
          dict5: {
            allows: [
              "/読み書き/",
              "/通信/",
              // デフォルトの許可リストは上書きされるので、維持したい場合は追加する
              "/^処理を行[ぁ-ん]/",
              "/^[ァ-ヶ]+を.?行[ぁ-ん]/",
              "/^[a-zA-Z]+を.?行[ぁ-ん]/",
            ],
          },
        },
      },
      // 1文の長さを制限する → しない
      "sentence-length": false,
      // 感嘆符!！、感嘆符?？を使用しない
      "no-exclamation-question-mark": {
        allowFullWidthQuestion: true,
        allowFullWidthExclamation: true,
      },
      // 助詞の繰り返しを禁止する → 普通に読めると感じる文章でも警告されてしまうので停止
      "no-doubled-joshi": false,
      // 読点は1文中に3つまで
      // <名詞>、<名詞> のように名詞に挟まれた読点はカウントしません。 箇条書きとしての区切り文字として使われているため無視します。
      "max-ten": {
        max: 3,
      },
      "max-comma": false,
      // 弱い日本語表現の利用を禁止するtextlintルール
      // 〜かもしれない
      // 〜と思う
      // 〜と思います
      // 可能性を示唆する
      // などを禁止するルールです。
      // → 禁止しない
      "ja-no-weak-phrase": false,
      // 不必要な制御文字を使用しない
      "no-invalid-control-character": {
        checkCode: true,
        checkImage: true,
      },
      // 漢字が連続する最大文字数を制限する
      "max-kanji-continuous-len": {
        max: 6,
        allow: [
          "所定時間外労働",
          "月間所定労働日数",
          "年間所定労働日数",
          "源泉所得税控除前",
        ],
      },
    },
    // 文章中の同義語を表記ゆれをチェックする(Sudachi同義語辞書を利用)
    "@textlint-ja/no-synonyms": true,
    // 年月日と曜日の不一致をチェックする
    "date-weekday-mismatch": true,
    // 略語と非略語の位置関係をチェックする
    // NG:「略語(非略語)」「JS(JavaScript)」
    // OK:「非略語(略語)」「JavaScript(JS)」
    "abbr-within-parentheses": true,
    prh: {
      rulePaths: ["prh.yml"],
    },
  },
};
