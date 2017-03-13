const Confidence = require('confidence');

const editorConfig = {
  languages: [
    {
      key: 'de',
      label: 'de'
    },
    {
      key: 'en',
      label: 'en'
    }
  ],
  departments: [
    "Storytelling"
  ],
  lowNewItems: {
    threshold: 21,
    days: 7
  },
  itemList: {
    itemsPerLoad: 18
  },
  browserLoaderUrl: {
    $filter: 'env',
    local: 'http://localhost:8080',
    staging: 'https://q.nzz.ch/Q-loader-staging/v1/loader.js',
    production: 'https://q.nzz.ch/Q-loader/v1/loader.js'
  },
  help: {
    intro: 'Some introductory notes',
    faq: [
      {
        question: 'Wer oder was ist Q?',
        answer: 'Mit Q könnt ihr schnell und einfach selber Karten, Diagramme und andere grafische Elemente erstellen und in Artikel einbinden.'
      },
      {
        question: 'Was kann Q?',
        answer: 'Auf der Übersichtsseite seht ihr alle Tools, die aktuell zur Verfügung stehen. Neue Tools werden laufend hinzugefügt.'
      }
    ]
  },
  eastereggs: {
    sounds: {
      m: 'https://storytelling.nzz.ch/m.mp3',
      q: 'https://storytelling.nzz.ch/q.mp3',
      bondTheme: 'https://storytelling.nzz.ch/bond-theme.mp3'
    }
  }
}

const env = process.env.APP_ENV || 'local';
const store = new Confidence.Store(editorConfig);

module.exports.get = (key, criteria = {}) => {
  criteria = Object.assign({ env: env }, criteria)
  return store.get(key, criteria)
}

module.exports.meta = (key, criteria = {}) => {
  criteria = Object.assign({ env: env }, criteria)
  return store.meta(key, criteria)
}
