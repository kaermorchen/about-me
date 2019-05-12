import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  metrics: service(),
  router: service(),

  breadcrumb: 'Home',

  init() {
    this._super(...arguments);

    this.router.on('routeDidChange', () => {

      if (typeof FastBoot === 'undefined') {
        const page = this.router.currentURL;
        const title = this.router.currentRouteName || 'unknown';

        this.metrics.trackPage({ page, title });
      }
    });
  }
});
