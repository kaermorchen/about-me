import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  activeRoutes: [], // eslint-disable-line

  filteredRoutes: computed('activeRoutes.@each.breadcrumbTitle', function () {
    return this.get('activeRoutes').filterBy('breadcrumbTitle');
  })
});
