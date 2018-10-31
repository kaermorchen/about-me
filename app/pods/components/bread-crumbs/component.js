import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  router: service(),

  tagName: 'ol',
  classNames: ['breadcrumb'],

  filteredRoutes: computed('router.activeRoutes.@each.breadcrumb', function () {
    return this.get('router.activeRoutes').filterBy('breadcrumb');
  })
});
