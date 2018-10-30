import Route from '@ember/routing/route';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export function initialize() {
  Route.reopen({
    breadcrumbs: service(),

    breadcrumbTitle: null,
    breadcrumbPath: readOnly('routeName'),

    activate() {
      this._super(...arguments);

      this.breadcrumbs.activeRoutes.addObject(this);
    },

    deactivate() {
      this._super(...arguments);

      this.breadcrumbs.activeRoutes.removeObject(this);
    }
  });
}

export default {
  initialize
};
