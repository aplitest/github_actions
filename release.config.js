module.exports = {
  branches: ['master', {name:"stage",prerelease:true}],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/npm'
  ]
};

