const Confidence = require('confidence');

const editorConfig = {
  languages: [ // an array of languages, if more that one is configured, Q editor will show a language switcher
    {
      key: 'de',
      label: 'de'
    },
    {
      key: 'en',
      label: 'en'
    }
  ],
  departments: [ // every item is assigned to one department. These are used for the filtering on item overview.
    "International",
    "Economics",
    "Storytelling"
  ],
  lowNewItems: {   // if there are not enough graphics, M will appear instead of Q. This is used to configure 'not enough'.
    threshold: 21, // less than that many new items..
    days: 7        // in the last days are considered 'not enough'
  },
  itemList: {
    itemsPerLoad: 18 // how many items to load per step (load more) on item overview
  },
  schemaEditor: {
    latLngLayerConfig: { // if you use schema-editor-lat-lng this is the layer config for Leaflet
      url: 'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',
      config: {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
      }
    }
  },
  help: { // configuration for the help dialog. this has no localization support for now :-(
    intro: 'This help text is part of config/editorConfig in Q server demo. Just change it according to your needs. An introductory text can be defined as well as some detailed information in FAQ style.', // shown on top of the dialog
    faq: [ // a list of questions and answers shown below the intro
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
  stylesheets: [ // a list of stylesheets to load in addition to the default styles. Use this to load your theme if you do not like our design
    {
      url: ''
    },
  ],
  eastereggs: { // there are some eastereggs in Q. provide the urls to the soundfiles here. We do not distribute them because we do not have the copyright for the tunes we use at NZZ.
    sounds: {
      m: '', // played if M is visible and user hovers her
      q: '', // played/paused if user types Shift+Q
      bondTheme: '' // played if user types Shift+0 Shift+0 Shift+7
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
