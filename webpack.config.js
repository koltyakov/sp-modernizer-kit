const path = require('path');
const { DefinePlugin } = require('webpack');
const configs = require('sp-build-tasks/dist/webpack/config');

require('dotenv').load();

const defineOptions = {
  APP_CONFIG: JSON.stringify(
    require(path.join(process.cwd(), process.env.APP_JSON || './config/app.json'))
  ),
  HUB_SITE_URL: `"${require(path.join(process.cwd(), process.env.PRIVATE_JSON || './config/private.json')).siteUrl}"`
};

configs.forEach(conf => {

  // Add define plugin dynamic variables
  conf.plugins = conf.plugins || [];
  conf.plugins.push(new DefinePlugin(defineOptions));

  // Exclude "heavy" 3rd parties
  conf.externals = Object.assign(conf.externals || {}, {
    '@pnp/sp': 'pnp',
    'react': 'React',
    'react-dom': 'ReactDOM'
  });

});

module.exports = configs;