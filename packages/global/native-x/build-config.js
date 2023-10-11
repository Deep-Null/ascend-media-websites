const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');
const { asObject } = require('@parameter1/base-cms-utils');

module.exports = ({
  uri = 'https://delivery.mindfulcms.com/ascend/default/compat/native-website',
  enabled = true,
  placements,
} = {}) => {
  const aliases = Object.keys(asObject(placements));
  const config = new NativeXConfiguration(uri, {
    enabled: aliases.length ? enabled : false,
    tenantKey: 'ascend',
  });
  aliases.forEach((alias) => {
    const id = placements[alias];
    config.setAliasPlacements(alias, [
      { name: 'default', id },
    ]);
  });
  return config;
};
