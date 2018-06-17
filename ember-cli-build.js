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

  let projectsJson = new StaticSiteJson('data/projects', {
    attributes: ['name', 'type', 'url', 'createdAt', 'client', 'clientUrl', 'logo', 'screenshots', 'tags'],
    contentTypes: ['html'],
    contentFolder: 'data/projects',
    type: 'projects',
    collections: [{
      src: `data/projects`,
      output: `all.json`,
    }]
  });

  return new BroccoliMergeTrees([app.toTree(), projectsJson]);
};
