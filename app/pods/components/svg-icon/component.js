import Component from '@ember/component';

export default Component.extend({
  tagName: 'svg',
  classNames: ['mr-1'],
  classNameBindings: ['icon'],
  attributeBindings: ['role', 'size:height', 'size:width', 'viewbox'],

  size: 24,
  role: 'img',
  viewbox: ['0 0 24 24'],
});
