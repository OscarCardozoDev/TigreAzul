const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Habilitar TypeScript
config.resolver.sourceExts.push('ts', 'tsx');

// Habilitar path mapping
config.resolver.alias = {
  '@': './src',
  '@components': './src/views/components',
  '@screens': './src/views/screens',
  '@controllers': './src/controllers',
  '@models': './src/models',
  '@services': './src/services',
  '@hooks': './src/hooks',
  '@utils': './src/utils',
  '@config': './src/config',
};

module.exports = config;