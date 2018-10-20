/* global Siema */
import Component from '@ember/component';
import { bind, next } from '@ember/runloop';

export default Component.extend({
  init() {
    this._super(...arguments);

    this.set('actions', {
      openPhotoswipe: this.openPhotoswipe.bind(this)
    });
  },

  didInsertElement() {
    this._super(...arguments);

    const instance = new Siema({
      selector: this.element,
      onChange: bind(this, this.onChange),
    });

    this.set('instance', instance);
  },

  willDestroyElement() {
    this.instance.destroy();

    this._super(...arguments);
  },

  onChange() {
    this.set('isDragged', true);

    next(this, function () {
      this.set('isDragged', false);
    });
  },

  openPhotoswipe(photoswipe, index) {
    if (!this.isDragged) {
      photoswipe.actions.open({ index });
    }
  }
});
