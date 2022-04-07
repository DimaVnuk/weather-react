const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
      '@/containers': path.resolve(__dirname, 'src/containers'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@/store': path.resolve(__dirname, 'src/store'),
      '@/styled-components': path.resolve(__dirname, 'src/styled-components'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
    },
  };
  return config;
};

