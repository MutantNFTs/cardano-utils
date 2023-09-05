module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  workerThreads: true, // to handle bigint
  collectCoverageFrom: ["./src/*.ts", "!./src/index.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/__utils__/"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
