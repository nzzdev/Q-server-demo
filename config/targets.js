const Confidence = require('confidence');

const targets = [
  {
    key: 'demo',
    label: 'Demo',
    preview: {
      stylesheets: [
        /*{
          url: 'url to stylesheet specific for target'
        }*/
      ]
    }
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
