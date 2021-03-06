/**
 * Jest configuration file
 */

module.exports = {
    preset: 'react-native',
    collectCoverage: true,
    testEnvironment: 'node',
    coverageDirectory: './coverage/',
    testRegex: '[/\S|*\S]*/__tests__/[^setup].*.js$',
    transformIgnorePatterns: ['node_modules/(?!react-native|native-base|react-navigation|react-native-fabric|@fortawesome\\react-native-fontawesome|@fortawesome/react-native-fontawesome)'],
    setupFiles: ['./jest.setup.js']
}