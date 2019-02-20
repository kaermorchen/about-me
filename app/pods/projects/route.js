import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  request: service(),

  breadcrumb: 'Projects',

  model() {
    return this.request.fetch('/data/projects/all.json')
      .then(response => response.json())
      .then(response => response.data);
  }
});
