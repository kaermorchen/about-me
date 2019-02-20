import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  attributeBindings: ['style'],

  project: null,

  style: computed ('project.attributes.logo', function () {
    return htmlSafe(`backgroud-image: ${this.get('project.attributes.logo')}`);
  })
});
