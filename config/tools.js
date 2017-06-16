const confidence = require('confidence');

// editor specific tool config 
// label and icon are used for item overview page
const map_editor_config = {
  label_locales: {
    de: 'Karte',
    en: 'map',
  },
  icon: '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M16 12l-2-1-14 9 16 12 16-11-12-7v6.002A1.994 1.994 0 0 1 18 22c-1.105 0-2-.887-2-2v-8z"/><ellipse cx="18" cy="4" rx="3" ry="3"/><path d="M19 8v12.164c0 .556-.444 1.007-1 1.007-.552 0-1-.45-1-1.007V8a2.995 2.995 0 0 0 2 0z"/></g></svg>'
}

const quiz_editor_config = {
  label_locales: {
    de: 'Quiz',
    en: 'quiz',
  },
  icon: '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M7.689 27.076l.658.397C10.554 28.803 13.172 29.5 16 29.5c8.145 0 14.5-5.875 14.5-13.5 0-7.846-6.582-14.5-14.5-14.5S1.5 8.154 1.5 16c0 2.772.814 5.068 2.565 7.52l.464.65-1.896 5.07 5.056-2.164zM0 16C0 7.416 7.163 0 16 0s16 7.416 16 16-7.163 15-16 15c-3.092 0-5.98-.767-8.427-2.242L0 32l2.844-7.608C1.051 21.88 0 19.288 0 16z" fill-rule="nonzero"/><path d="M11 9.754c.281-.422.6-.803.955-1.143a5.91 5.91 0 0 1 1.16-.867c.418-.238.86-.422 1.324-.55A5.39 5.39 0 0 1 15.887 7c.687 0 1.308.115 1.863.346.555.23 1.023.545 1.406.943.383.399.678.86.885 1.383.207.523.31 1.078.31 1.664 0 .453-.06.857-.181 1.213a3.88 3.88 0 0 1-.504.99 5.723 5.723 0 0 1-.773.879c-.301.281-.631.566-.99.855-.18.141-.323.29-.428.446a1.797 1.797 0 0 0-.235.486c-.05.168-.084.348-.1.54a7.582 7.582 0 0 0-.023.614v1.325h-2.379v-1.325c0-.336.012-.64.035-.914.024-.273.088-.549.194-.826.105-.277.267-.566.486-.867.219-.3.524-.647.914-1.037.485-.485.822-.924 1.014-1.319a2.68 2.68 0 0 0 .287-1.177c0-.29-.047-.56-.14-.815a2.039 2.039 0 0 0-.393-.662 1.87 1.87 0 0 0-.598-.445 1.713 1.713 0 0 0-.744-.164c-.297 0-.58.056-.85.17-.27.113-.529.271-.779.474-.25.203-.49.448-.72.733-.231.285-.448.603-.651.955L11 9.754zM15.992 20.219c.211 0 .42.043.627.129.207.086.397.203.569.351.171.149.31.324.416.528.105.203.158.421.158.656 0 .21-.047.414-.14.61a1.7 1.7 0 0 1-.382.515 1.829 1.829 0 0 1-1.248.48 1.906 1.906 0 0 1-1.277-.48 1.657 1.657 0 0 1-.387-.516 1.392 1.392 0 0 1-.14-.61c0-.218.046-.429.14-.632.094-.203.223-.38.387-.533a1.89 1.89 0 0 1 1.277-.498z"/></g></svg>'
}

const election_executive_editor_config = {
  label_locales: {
    de: 'Exekutivwahl',
    en: 'executive election',
  },
  icon: '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M6.687 20.286a10.546 10.546 0 0 0 5.949.497c-.273-.319-.579-.745-.956-1.298a36.205 36.205 0 0 1-.35-.525 8.49 8.49 0 0 1-3.554-.406 110.3 110.3 0 0 0-1.09 1.732zM18.48 3.676A10.459 10.459 0 0 1 21 10.5c0 3.206-1.437 6.077-3.703 8.003l-.113-.278-.287-.675-.427-1A8.474 8.474 0 0 0 19 10.5c0-1.95-.657-3.747-1.761-5.181.411-.546.825-1.094 1.241-1.643zM8.344.222A10.545 10.545 0 0 1 10.5 0c1.314 0 2.572.241 3.732.683-.372.43-.82.972-1.373 1.649a8.504 8.504 0 0 0-3.295-.281C9.1 1.126 8.73.542 8.344.221zM1.876 16.49A10.452 10.452 0 0 1 0 10.5c0-3.263 1.489-6.18 3.824-8.105l.084.26c.205.634.403 1.241.594 1.822A8.474 8.474 0 0 0 2 10.5c0 1.54.41 2.984 1.125 4.23-.453.624-.87 1.211-1.25 1.76z" /><path d="M19 1.341a603.738 603.738 0 0 0-3.324 4.393 346.504 346.504 0 0 0-3.226 4.377 223.155 223.155 0 0 1 1.723 3.714 190.658 190.658 0 0 1 1.804 4.116l-.471.402.032.353a2.331 2.331 0 0 1-.699.503l.179.553a1.64 1.64 0 0 1-.455.545 1.48 1.48 0 0 1-.601.276c-.228-.01-.713-.561-1.455-1.651-.742-1.09-1.726-2.691-2.95-4.804a108.444 108.444 0 0 0-3.373 5.08 111.288 111.288 0 0 0-3.16 5.4 3.57 3.57 0 0 1-.814.301c-.281.067-.574.101-.877.101h-.195a4.113 4.113 0 0 1-.756-.964c-.19-.341-.284-.612-.284-.813 0-.112.016-.246.048-.403.033-.156.082-.352.147-.587L0 21.68c.39-1.017 1.216-2.45 2.479-4.3 1.262-1.85 2.977-4.162 5.144-6.934-.434-1.185-.87-2.42-1.309-3.706-.438-1.285-.923-2.75-1.454-4.393a3.15 3.15 0 0 1 .455-.754c.162-.19.309-.285.439-.285.086 0 .173.025.26.075.086.05.178.132.276.243a.735.735 0 0 1 .228-.159.664.664 0 0 1 .276-.059h.13c.076-.111.157-.206.244-.285.086-.078.184-.15.292-.218h.033c.314 0 .91.962 1.788 2.884.53 1.163.975 2.113 1.332 2.85.64-.76 1.463-1.76 2.47-3 1.93-2.37 2.991-3.555 3.186-3.555.12 0 .274.053.464.16.19.105.414.265.674.477L18.14 0c.173.19.333.397.479.62.146.224.274.464.382.721z"/><path d="M26 32v-6h1v6h3l-1-1 1-8h2l-1.759-7.035c-.133-.533-.684-.965-1.24-.965H27l.5 7-1 1-1-1 .5-7h-2.001c-.552 0-1.107.43-1.24.965L21 23h2l1 8-1 1h3z"/><circle cx="26.5" cy="11.5" r="2.5"/></g></svg>'
}

const election_seats_editor_config = {
  label_locales: {
    de: 'Sitzverteilung',
    en: 'seats in parliament',
  },
  icon: '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M29.267 21L30 10h2l-1 15H20v-2.99c0-.558.445-1.01.996-1.01h8.27zM20 25h1v7h-1v-7zm10 0h1v7h-1v-7z"/><path d="M6.687 20.286a10.546 10.546 0 0 0 5.949.497c-.273-.319-.579-.745-.956-1.298a36.205 36.205 0 0 1-.35-.525 8.49 8.49 0 0 1-3.554-.406 110.3 110.3 0 0 0-1.09 1.732zM18.48 3.676A10.459 10.459 0 0 1 21 10.5c0 3.206-1.437 6.077-3.703 8.003l-.113-.278-.287-.675-.427-1A8.474 8.474 0 0 0 19 10.5c0-1.95-.657-3.747-1.761-5.181.411-.546.825-1.094 1.241-1.643zM8.344.222A10.545 10.545 0 0 1 10.5 0c1.314 0 2.572.241 3.732.683-.372.43-.82.972-1.373 1.649a8.504 8.504 0 0 0-3.295-.281C9.1 1.126 8.73.542 8.344.221zM1.876 16.49A10.452 10.452 0 0 1 0 10.5c0-3.263 1.489-6.18 3.824-8.105l.084.26c.205.634.403 1.241.594 1.822A8.474 8.474 0 0 0 2 10.5c0 1.54.41 2.984 1.125 4.23-.453.624-.87 1.211-1.25 1.76z"/><path d="M19 1.341a603.738 603.738 0 0 0-3.324 4.393 346.504 346.504 0 0 0-3.226 4.377 223.155 223.155 0 0 1 1.723 3.714 190.658 190.658 0 0 1 1.804 4.116l-.471.402.032.353a2.331 2.331 0 0 1-.699.503l.179.553a1.64 1.64 0 0 1-.455.545 1.48 1.48 0 0 1-.601.276c-.228-.01-.713-.561-1.455-1.651-.742-1.09-1.726-2.691-2.95-4.804a108.444 108.444 0 0 0-3.373 5.08 111.288 111.288 0 0 0-3.16 5.4 3.57 3.57 0 0 1-.814.301c-.281.067-.574.101-.877.101h-.195a4.113 4.113 0 0 1-.756-.964c-.19-.341-.284-.612-.284-.813 0-.112.016-.246.048-.403.033-.156.082-.352.147-.587L0 21.68c.39-1.017 1.216-2.45 2.479-4.3 1.262-1.85 2.977-4.162 5.144-6.934-.434-1.185-.87-2.42-1.309-3.706-.438-1.285-.923-2.75-1.454-4.393a3.15 3.15 0 0 1 .455-.754c.162-.19.309-.285.439-.285.086 0 .173.025.26.075.086.05.178.132.276.243a.735.735 0 0 1 .228-.159.664.664 0 0 1 .276-.059h.13c.076-.111.157-.206.244-.285.086-.078.184-.15.292-.218.347 0 .943.962 1.82 2.884.532 1.163.976 2.113 1.333 2.85.64-.76 1.463-1.76 2.47-3 1.93-2.37 2.991-3.555 3.186-3.555.12 0 .274.053.464.16.19.105.414.265.674.477L18.14 0c.173.19.333.397.479.62.146.224.274.464.382.721z"/></svg>'
}

const election_votes_editor_config = {
  label_locales: {
    de: 'Parlamentswahl',
    en: 'parliament election',
  },
  icon: '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M29 30.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-6-10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill-rule="nonzero"/><path fill="#0A0A0A" d="M29 17h2l-8 15h-2z"/><path d="M6.687 20.286a10.546 10.546 0 0 0 5.949.497c-.273-.319-.579-.745-.956-1.298a36.205 36.205 0 0 1-.35-.525 8.49 8.49 0 0 1-3.554-.406 110.3 110.3 0 0 0-1.09 1.732zM18.48 3.676A10.459 10.459 0 0 1 21 10.5c0 3.206-1.437 6.077-3.703 8.003l-.113-.278-.287-.675-.427-1A8.474 8.474 0 0 0 19 10.5c0-1.95-.657-3.747-1.761-5.181.411-.546.825-1.094 1.241-1.643zM8.344.222A10.545 10.545 0 0 1 10.5 0c1.314 0 2.572.241 3.732.683-.372.43-.82.972-1.373 1.649a8.504 8.504 0 0 0-3.295-.281C9.1 1.126 8.73.542 8.344.221zM1.876 16.49A10.452 10.452 0 0 1 0 10.5a10.48 10.48 0 0 1 3.824-8.105l.084.26c.205.634.403 1.241.594 1.822A8.474 8.474 0 0 0 2 10.5c0 1.54.41 2.984 1.125 4.23-.453.624-.87 1.211-1.25 1.76z"/><path d="M19 1.341a603.738 603.738 0 0 0-3.324 4.393 346.504 346.504 0 0 0-3.226 4.377 223.155 223.155 0 0 1 1.723 3.714 190.658 190.658 0 0 1 1.804 4.116l-.471.402.032.353a2.331 2.331 0 0 1-.699.503l.179.553a1.64 1.64 0 0 1-.455.545 1.48 1.48 0 0 1-.601.276c-.228-.01-.713-.561-1.455-1.651-.742-1.09-1.726-2.691-2.95-4.804a108.444 108.444 0 0 0-3.373 5.08 111.288 111.288 0 0 0-3.16 5.4 3.57 3.57 0 0 1-.814.301 3.773 3.773 0 0 1-.877.101h-.195a4.113 4.113 0 0 1-.756-.964c-.19-.341-.284-.612-.284-.813 0-.112.016-.246.048-.403.033-.156.082-.352.147-.587L0 21.68c.39-1.017 1.216-2.45 2.479-4.3 1.262-1.85 2.977-4.162 5.144-6.934-.434-1.185-.87-2.42-1.309-3.706-.438-1.285-.923-2.75-1.454-4.393a3.15 3.15 0 0 1 .455-.754c.162-.19.309-.285.439-.285a.52.52 0 0 1 .26.075c.086.05.178.132.276.243a.735.735 0 0 1 .228-.159.664.664 0 0 1 .276-.059h.13c.076-.111.157-.206.244-.285.086-.078.184-.15.292-.218h.033c.314 0 .91.962 1.788 2.884.53 1.163.975 2.113 1.332 2.85.64-.76 1.463-1.76 2.47-3 1.93-2.37 2.991-3.555 3.186-3.555.12 0 .274.053.464.16.19.105.414.265.674.477L18.14 0c.173.19.333.397.479.62.146.224.274.464.382.721z"/></g></svg>'
}

// additional styles for specific targets can be configured here 
// they will be merged with stylesheets of rendering info
const demo2Styles = `
  .s-font-note {
    color: black;
    font-size: 14px;
  }
  .s-font-note-s {
    color: black;
    font-size: 12px;
  }
  .s-font-title-xs {
    color: black;
    font-weight: bold;
    font-size: 12px;
  }
  .s-q-item__title {
    font-family: serif;
    font-size: 16px;
    color: black;
  }
  .s-q-item__footer {
    font-family: serif;
    font-size: 12px;
    color: black;
  }
`;

// configuration of tools has two filters: env and target
// this example contains 'local' and 'production' as env and 'demo1' and 'demo2' as targets
const tools = {
  $filter: 'env',
  local: {
    map: {
      baseUrl: 'http://localhost:3000',
      editor: map_editor_config,
      endpoint: {
        $filter: 'target',
        $default: false,
        demo1: {
          path: '/rendering-info/html-js', // endpoint path to get rendering info for this specific target
          stylesheets: [ // target specific stylesheets to load
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-q@^1,sophie-color@^1.css',
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            }
          ]
        },
        demo2: {
          path: '/rendering-info/html-js',
          stylesheets: [
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-color@^1.css'
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            },
            {
              content: demo2Styles
            }
          ]
        }
      }
    },
    quiz: {
      baseUrl: 'http://localhost:3000',
      editor: quiz_editor_config,
      endpoint: {
        $filter: 'target',
        $default: false,
        demo1: {
          path: '/rendering-info/html-js', // endpoint path to get rendering info for this specific target
          stylesheets: [ // target specific stylesheets to load
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-q@^1,sophie-font@^1,sophie-color@^1,sophie-viz-color@^1,sophie-input@^1[range].css' 
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            }
          ]
        },
        demo2: {
          path: '/rendering-info/html-js',
          stylesheets: [
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-color@^1,sophie-viz-color@^1,sophie-input@^1[range].css'
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            },
            {
              content: demo2Styles
            }
          ]
        }
      }
    },
    election_executive: {
      baseUrl: 'http://localhost:3000', // base url to access the tool
      editor: election_executive_editor_config, 
      endpoint: {
        $filter: 'target',
        $default: false,
        demo1: {
          path: '/rendering-info/html-static', // endpoint path to get rendering info for this specific target
          stylesheets: [ // target specific stylesheets to load
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-q@^1,sophie-font@^1,sophie-color@^1.css' 
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            }
          ]
        },
        demo2: {
          path: '/rendering-info/html-static',
          stylesheets: [
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-color@^1.css'
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            },
            {
              content: demo2Styles
            }
          ]
        }
      }
    },
    election_seats: {
      baseUrl: 'http://localhost:3000',
      editor: election_seats_editor_config,
      endpoint: {
        $filter: 'target',
        $default: false,
        demo1: {
          path: '/rendering-info/html-static',
          stylesheets: [
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-q@^1,sophie-font@^1,sophie-color@^1.css'
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            }
          ]
        },
        demo2: {
          path: '/rendering-info/html-static',
          stylesheets: [
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-color@^1.css'
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            },
            {
              content: demo2Styles
            }
          ]
        }
      }
    },
    election_votes: {
      baseUrl: 'http://localhost:3000',
      editor: election_votes_editor_config,
      endpoint: {
        $filter: 'target',
        $default: false,
        demo1: {
          path: '/rendering-info/html-static',
          stylesheets: [
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-q@^1,sophie-font@^1,sophie-color@^1.css'
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            }
          ]
        },
        demo2: {
          path: '/rendering-info/html-static',
          stylesheets: [
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-color@^1.css'
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            },
            {
              content: demo2Styles
            }
          ]
        }
      }
    }
  },
  production: {
    map: {
      baseUrl: 'http://q-map:3000',
      editor: map_editor_config,
      endpoint: {
        $filter: 'target',
        $default: false,
        demo1: {
          path: '/rendering-info/html-js', // endpoint path to get rendering info for this specific target
          stylesheets: [ // target specific stylesheets to load
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-q@^1,sophie-color@^1.css',
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            }
          ]
        },
        demo2: {
          path: '/rendering-info/html-js',
          stylesheets: [
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-color@^1.css'
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            },
            {
              content: demo2Styles
            }
          ]
        }
      }
    },
    quiz: {
      baseUrl: 'http://q-quiz:3000',
      editor: quiz_editor_config,
      endpoint: {
        $filter: 'target',
        $default: false,
        demo1: {
          path: '/rendering-info/html-js', // endpoint path to get rendering info for this specific target
          stylesheets: [ // target specific stylesheets to load
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-q@^1,sophie-font@^1,sophie-color@^1,sophie-viz-color@^1,sophie-input@^1[range].css' 
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            }
          ]
        },
        demo2: {
          path: '/rendering-info/html-js',
          stylesheets: [
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-color@^1,sophie-viz-color@^1,sophie-input@^1[range].css'
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            },
            {
              content: demo2Styles
            }
          ]
        }
      }
    },
    election_executive: {
      baseUrl: 'http://q-election-executive:3000', // base url to access the tool
      editor: election_executive_editor_config, 
      endpoint: {
        $filter: 'target',
        $default: false,
        demo1: {
          path: '/rendering-info/html-static', // endpoint path to get rendering info for this specific target
          stylesheets: [ // target specific stylesheets to load
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-q@^1,sophie-font@^1,sophie-color@^1.css' 
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            }
          ]
        },
        demo2: {
          path: '/rendering-info/html-static',
          stylesheets: [
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-color@^1.css'
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            },
            {
              content: demo2Styles
            }
          ]
        }
      }
    },
    election_seats: {
      baseUrl: 'http://q-election-seats:3000',
      editor: election_seats_editor_config,
      endpoint: {
        $filter: 'target',
        $default: false,
        demo1: {
          path: '/rendering-info/html-static',
          stylesheets: [
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-q@^1,sophie-font@^1,sophie-color@^1.css'
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            }
          ]
        },
        demo2: {
          path: '/rendering-info/html-static',
          stylesheets: [
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-color@^1.css'
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            },
            {
              content: demo2Styles
            }
          ]
        }
      }
    },
    election_votes: {
      baseUrl: 'http://q-election-votes:3000',
      editor: election_votes_editor_config,
      endpoint: {
        $filter: 'target',
        $default: false,
        demo1: {
          path: '/rendering-info/html-static',
          stylesheets: [
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-q@^1,sophie-font@^1,sophie-color@^1.css'
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            }
          ]
        },
        demo2: {
          path: '/rendering-info/html-static',
          stylesheets: [
            {
              url: 'https://service.sophie.nzz.ch/bundle/sophie-color@^1.css'
            },
            {
              content: '.q-item { color: #f5f5f5; background-color: #f5f5f5; }'
            },
            {
              content: demo2Styles
            }
          ]
        }
      }
    }
  }
};

const env = process.env.APP_ENV || 'local';
const store = new confidence.Store(tools);

module.exports.get = (key, criteria = {}) => {
  criteria = Object.assign({ env: env }, criteria)
  return store.get(key, criteria)
}

module.exports.meta = (key, criteria = {}) => {
  criteria = Object.assign({ env: env }, criteria)
  return store.meta(key, criteria)
}
