/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: '../../config/jest.preset.js',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: [],
  rootDir: __dirname,
};
