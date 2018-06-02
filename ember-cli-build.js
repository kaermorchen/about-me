'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const BroccoliMergeTrees = require('broccoli-merge-trees');
const StaticSiteJson = require('broccoli-static-site-json');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-bootstrap-4': {
      js: null
    },

    'ember-mdi': {
      icons: ['email-outline', 'skype-business', 'github-circle'],
    }
  });

  let worksJson = new StaticSiteJson('work');

  return new BroccoliMergeTrees([app.toTree(), worksJson]);
};
