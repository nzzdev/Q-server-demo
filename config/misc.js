const Confidence = require('confidence');

const misc = {
  qServerBaseUrl: {
    $filter: 'env',
    local: 'http://localhost:3001',
    production: 'https://q-server-demo.st.nzz.ch',
  },
  toolBaseUrl: {
    $filter: 'env',
    local: {
      protocol: 'http',
      host: 'localhost:3001'
    },
    production: {
      protocol: 'https',
      host: 'q-server-demo.st-cdn.nzz.ch'
    }
  },
  db: {
    host: process.env.COUCH_HOST,
    database: process.env.COUCH_DB,
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
      couchdbHost: process.env.COUCH_HOST,
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
