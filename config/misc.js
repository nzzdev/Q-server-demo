const Confidence = require('confidence');

const misc = {
  qServerBaseUrl: {
    $filter: 'env',
    local: 'http://localhost:3001',
    production: 'http://q-server-demo.st-cdn.nzz.ch',
  },
  db: {
    host: 'https://d23f3571-f77d-410e-b0a4-b99a60fb1415-bluemix.cloudant.com',
    database: {
      $filter: 'env',
      local: 'q-items-local',
      production: 'q-items',
    },
    user: process.env.COUCH_USER,
    pass: process.env.COUCH_PASS 
  },
  port: {
    $filter: 'env',
    local: 3001,
    production: 3001,
    $default: 3001
  },
  authStrategy: {
    couchdb_cookie: {
      couchdbHost: 'https://d23f3571-f77d-410e-b0a4-b99a60fb1415-bluemix.cloudant.com',
      state: {
        $filter: 'env',
        local: {
          isSecure: false,
        },
        $default: {
          isSecure: true
        }
      }
    }
  },
  cache: {
    serverCacheTime: {
      $filter: 'env',
      local: 1,
      $default: 60 * 1000
    },
    cacheControl: {
      maxAge: {
        $filter: 'env',
        local: 1,
        $default: 60
      }
    }
  },
  toolRuntimeConfig: {}
}

const env = process.env.APP_ENV || 'local';
const store = new Confidence.Store(misc);

module.exports.get = (key, criteria = {}) => {
  criteria = Object.assign({ env: env }, criteria)
  return store.get(key, criteria)
}

module.exports.meta = (key, criteria = {}) => {
  criteria = Object.assign({ env: env }, criteria)
  return store.meta(key, criteria)
}
