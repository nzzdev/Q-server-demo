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
  help: {
    intro: 'This help text is part of config/editorConfig in Q server demo. Just change it according to your needs. An introductory text can be defined as well as some detailed information in FAQ style.',
    faq: [
      {
        question: 'What is Q?',
        answer: 'Q is a toolbox that allows editors and reporters to create simple graphics and interactive elements for their articles or other forms of online content.'
      },
      {
        question: 'What can I do with Q?',
        answer: 'All available tools for this demo instance are shown on the index page.'
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
