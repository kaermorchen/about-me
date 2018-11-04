import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  request: service(),

  model() {
    return RSVP.hash({
      model: this.request.fetch('/about.json').then(response => response.json()),
      projects: this.store.findAll('project', { reload: true }).then(projects => projects.sortBy('createdAt').reverse())
    });
  },

  setupController(controller, hash) {
    controller.setProperties(hash);
  }
});
