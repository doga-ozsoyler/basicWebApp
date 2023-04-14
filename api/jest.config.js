module.exports = {
  testEnvironment: "jest-environment-node",
  setupFiles: ["dotenv/config"],
  collectCoverage: true,
  coverageReporters: ["text", "html"],
  coverageDirectory: "<rootDir>/coverage/",
  cacheDirectory: "./tmp/",
};
