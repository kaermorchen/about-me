import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  breadcrumb: 'Projects',
  title: 'Projects',

  model() {
    return fetch('/data/projects/all.json')
      .then(response => response.json())
      .then(response => response.data);
  }
});
