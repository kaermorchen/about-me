'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const fs = require('fs');
const projectUrls = fs.readdirSync('./data/projects').map(item => `/projects/${item.slice(0, -3)}`);
const urls = ['/', '/projects'].concat(projectUrls);

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    prember: {
      urls
    },

    fingerprint: {
      extensions: ['js', 'css', 'svg']
    },

    'ember-cli-bootstrap-4': {
      js: null
    },

    'ember-mdi': {
      icons: [
        'email-outline',
        'skype-business',
        'github-circle',
        'magnify-plus-outline'
      ],
    },

    'ember-fetch': {
      preferNative: true
    }
  });

  return app.toTree();
};
