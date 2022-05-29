module.exports = {
  setupFilesAfterEnv: ['./setupTests.js'],
  testPathIgnorePatterns: ['./node_modules/', './.next/'],
  transform: {
    '^.+\\.(ts|tsx)$': './node_modules/babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': './styles/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['./setupTests.js'],
};
