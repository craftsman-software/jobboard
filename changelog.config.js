module.exports = {
  disableEmoji: false,
  list: ["open", "close", "fix", "update", "style", "docs", "chore"],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    "type",
    "scope",
    "subject",
    "body",
    "breaking",
    "issues",
    "lerna",
  ],
  scopes: [],
  types: {
    open: {
      description: "新しい募集の追加",
      emoji: "✨",
      value: "open",
    },
    close: {
      description: "募集の終了",
      emoji: "👋",
      value: "close",
    },
    fix: {
      description: "誤字などの修正",
      emoji: "🐛",
      value: "fix",
    },
    update: {
      description: "募集内容の変更",
      emoji: "🔀",
      value: "update",
    },
    style: {
      description: "マークアップ、空白文字等の変更",
      emoji: "💄",
      value: "style",
    },
    docs: {
      description: "募集要項以外のドキュメントの追加や変更",
      emoji: "✏️",
      value: "docs",
    },
    chore: {
      description: "ツール、設定、その他雑多な変更",
      emoji: "🤖",
      value: "chore",
    },
  },
};
