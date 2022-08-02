module.exports = {
  presets: ['next/babel'],
  plugins: [ ['nativewind/babel', { mode: 'transformOnly' }], ['react-native-web', { commonjs: true }]],
}
