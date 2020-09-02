module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'api/**/models',
    'api/**/middlewares',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testEnvironment: 'node',
};
