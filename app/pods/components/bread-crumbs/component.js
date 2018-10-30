import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  breadcrumbs: service(),

  tagName: 'ol',
  classNames: ['breadcrumb'],
});
