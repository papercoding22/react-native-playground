module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          '@': './src',
        },
      },
    ],
    'inline-dotenv',
    'nativewind/babel',
    'react-native-reanimated/plugin', // needs to be last
  ],
};
