const path = require('path');
const { DefinePlugin } = require('webpack');
const configs = require('sp-build-tasks/dist/webpack/config');

require('dotenv').load();

const defineOptions = {
  APP_CONFIG: JSON.stringify(
    require(path.join(process.cwd(), process.env.APP_JSON || './config/app.json'))
  )
};

configs.forEach(conf => {
  conf.plugins = conf.plugins || [];
  conf.plugins.push(new DefinePlugin(defineOptions));
});

module.exports = configs;