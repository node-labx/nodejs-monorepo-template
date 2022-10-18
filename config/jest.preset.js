/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'json',
    'json-summary',
    'lcov',
    'text',
    'clover',
    'text-summary',
    'cobertura',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/fixtures/'],
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '\\.[jt]sx?$': 'esbuild-jest',
  },
  verbose: true,
  testTimeout: 15000,
};
