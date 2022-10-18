/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: './config/jest.preset.js',
  projects: ['./packages-group-1/*/jest.config.js', './packages-group-2/*/jest.config.js'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
};
