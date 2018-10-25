/* global Siema */
import Component from '@ember/component';
import { bind, next, scheduleOnce, run } from '@ember/runloop';

export default Component.extend({
  init() {
    this._super(...arguments);

    this.set('actions', {
      openPhotoswipe: this.openPhotoswipe.bind(this)
    });
  },

  didReceiveAttrs() {
    if (this.instance) {
      this.instance.goTo(this.currentSlide);
    }
  },

  didInsertElement() {
    this._super(...arguments);

    const instance = new Siema({
      selector: this.element,
      onChange: bind(this, this.onChange),
      startIndex: this.currentSlide,
    });

    // console.log(this.element.firstChild);
    // this.element.firstChild.addEventListener('dragstart', bind(this, this.dragStart));

    this.element.addEventListener('transitionstart', bind(this, this.transitionStart));
    this.element.addEventListener('transitionend', bind(this, this.transitionEnd));

    this.set('instance', instance);
  },

  willDestroyElement() {
    this.instance.destroy();

    this.element.removeEventListener('transitionstart', bind(this, this.transitionStart));
    this.element.removeEventListener('transitionend', bind(this, this.transitionEnd));

    this._super(...arguments);
  },

  onChange() {
    this.set('currentSlide', this.instance.currentSlide);
    this.set('isDragged', true);

    next(this, function () {
      this.set('isDragged', false);
    });
  },

  dragStart() {
    console.log('dragStart');
  },

  transitionStart() {
    console.log('transitionStart');
    this.set('isAnimated', true);
  },

  transitionEnd() {
    console.log('transitionEnd');
    this.set('isAnimated', false);
  },

  click(e) {
    console.log('click', e.target);
  },

  mouseUp() {
    console.log('mouseUp');
  },

  dragStart() {
    console.log('dragStart');
  },

  openPhotoswipe(photoswipe, index) {
    run(this, function() {
      console.log('openPhotoswipe', this.isAnimated);
    });

    // if (!this.isAnimated) {
    //   photoswipe.actions.open({ index });
    // }
  }
});
