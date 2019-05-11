import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  model() {
    return fetch('/about.json').then(response => response.json());
  },

  afterModel() {
    this.set('headData.title', 'Stanislav Romanov');
    this.set('headData.description', 'Personal website of Stanislav Romanov');
  }
});
