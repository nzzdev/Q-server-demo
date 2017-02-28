const init = require('@nzz/q-server').init;
const start = require('@nzz/q-server').start;

const tools = require('./config/tools.js');
const misc = require('./config/misc.js');
const targets = require('./config/targets.js');
const editorConfig = require('./config/editorConfig.js');

init(
  {
    hapi: {
    },
    config: {
      tools: tools,
      misc: misc,
      targets: targets,
      editorConfig: editorConfig
    }
  },
  {    
    onAfterRoutes: (server) => {
      return new Promise((resolve, reject) => {
        start();
        resolve();
      })
    }
  }
);
