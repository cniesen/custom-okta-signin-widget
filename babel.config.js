module.exports = function (api) {
  if (process.env.NODE_ENV === 'production') {
    api.cache(true);
  } else {
    api.cache(false);
  }

  const presets = [[
    "@babel/preset-env"
  ]];

  return {
    presets
  };
};
