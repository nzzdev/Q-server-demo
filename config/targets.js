const Confidence = require('confidence');

const targets = [
  {
    key: 'demo1',
    label: 'Demo 1',
    preview: {
      stylesheets: [
        /*{
          url: 'url to stylesheet specific for target'
        }*/
      ]
    },
    browserLoaderUrl: 'https://q.nzz.ch/Q-demo-loader/loader1.js' // used to generate embed code to graphic
  },
  {
    key: 'demo2',
    label: 'Demo 2',
    preview: {
      stylesheets: [
        /*{
          url: 'url to stylesheet specific for target'
        }*/
      ]
    },
    browserLoaderUrl: 'https://q.nzz.ch/Q-demo-loader/loader2.js' // used to generate embed code to graphic
  }
]

const env = process.env.APP_ENV || 'local';
const store = new Confidence.Store(targets);

module.exports.get = (key, criteria = {}) => {
  criteria = Object.assign({ env: env }, criteria)
  return store.get(key, criteria)
}

module.exports.meta = (key, criteria = {}) => {
  criteria = Object.assign({ env: env }, criteria)
  return store.meta(key, criteria)
}
