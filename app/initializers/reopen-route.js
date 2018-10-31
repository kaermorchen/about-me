import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export function initialize() {
  Route.reopen({
    router: service(),

    breadcrumb: null,

    activate() {
      this._super(...arguments);

      if (!this.router.activeRoutes) {
        this.router.set('activeRoutes', []);
      }

      this.router.activeRoutes.addObject(this);
    },

    deactivate() {
      this._super(...arguments);

      this.router.activeRoutes.removeObject(this);
    },
  });
}

export default {
  initialize
};
