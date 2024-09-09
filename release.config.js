module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalCommits",
        releaseRules: [
          { type: "revert", scope: "*", release: "patch" },
          { type: "docs", scope: "*", release: "patch" },
          { type: "style", scope: "*", release: "patch" },
          { type: "chore", scope: "*", release: "patch" },
          { type: "refactor", scope: "*", release: "patch" },
          { type: "test", scope: "*", release: "patch" },
          { type: "build", scope: "*", release: "patch" },
          { type: "ci", scope: "*", release: "patch" },
          { type: "improvement", scope: "*", release: "patch" },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalCommits",
        presetConfig: {
          types: [
            { type: "feat", section: "Features" },
            { type: "fix", section: "Bug Fixes" },
            { type: "perf", section: "Performance Improvements" },
            { type: "revert", section: "Reverts" },
            { type: "docs", section: "Documentation", hidden: false },
            { type: "style", section: "Styles", hidden: false },
            { type: "chore", section: "Miscellaneous Chores", hidden: false },
            { type: "refactor", section: "Code Refactors", hidden: false },
            { type: "test", section: "Tests", hidden: false },
            { type: "build", section: "Build System", hidden: false },
            { type: "ci", section: "CI/CD", hidden: false },
            { type: "improvement", section: "Improvements", hidden: false },
          ],
        },
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: true,
        npmAccess: "public",
      },
    ],
    "@semantic-release/git",
    "@semantic-release/github",
  ],
};
