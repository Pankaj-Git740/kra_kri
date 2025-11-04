const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const { resolve } = require('path');

/**
 * Metro configuration for React Native
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-css-transformer'),
  },
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'css'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'css'],
  },
  watchFolders: [resolve(__dirname, 'src')],
};

// Merge default config with custom config
let mergedConfig = mergeConfig(defaultConfig, config);

// Apply NativeWind wrapper
module.exports = withNativeWind(mergedConfig, { input: './global.css' });
