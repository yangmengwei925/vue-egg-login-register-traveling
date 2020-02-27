/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1582526804220_6280';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {   
    security : {csrf: false},
    mysql : {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'rootroot',
        database: 'web',
      },
      app: true,
      agent: false
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
