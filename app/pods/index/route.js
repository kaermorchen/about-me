import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  request: service(),

  model() {
    return this.get('request').fetch('/about.json').then(response => response.json());
  }
});
