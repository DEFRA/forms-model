const { CI } = process.env

/**
 * Jest config
 * @type {Config}
 */
export default {
  displayName: '@defra/forms-model',
  maxWorkers: '50%',
  workerIdleMemoryLimit: '512MB',
  reporters: CI
    ? [['github-actions', { silent: false }], 'summary']
    : ['default', 'summary'],
  silent: true,
  extensionsToTreatAsEsm: ['.ts'],
  clearMocks: true,

  // Configure test files and coverage
  testMatch: ['<rootDir>/**/*.test.{cjs,js,mjs,ts}'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{cjs,js,mjs,ts}'],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/test/'
  ],
  modulePathIgnorePatterns: ['<rootDir>/coverage/', '<rootDir>/dist/'],
  resetModules: true,
  restoreMocks: true,
  transform: {
    '^.+\\.(cjs|js|mjs|ts)$': [
      'babel-jest',
      {
        browserslistEnv: 'node',
        plugins: ['transform-import-meta']
      }
    ]
  },

  // Enable Babel transforms for node_modules
  // See: https://jestjs.io/docs/ecmascript-modules
  transformIgnorePatterns: [
    `node_modules/(?!${[
      '@joi/date', // Supports ESM only
      'nanoid', // Supports ESM only
      'slug' // Supports ESM only
    ].join('|')}/)`
  ]
}

/**
 * @import { Config } from 'jest'
 */
