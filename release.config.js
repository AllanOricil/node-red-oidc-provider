module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
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
