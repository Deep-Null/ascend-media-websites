const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

module.exports = ({
  uri = 'https://ascend.native-x.parameter1.com',
  enabled = false,
} = {}) => new NativeXConfiguration(uri, { enabled });
