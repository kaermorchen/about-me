import DS from 'ember-data';
import attr from 'ember-data/attr';
import { computed, setProperties } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default DS.Model.extend({
  name: attr('string'),
  type: attr('string'),
  html: attr('string'),
  url: attr('string'),
  createdAt: attr('date'),
  client: attr('string'),
  clientUrl: attr('string'),
  logo: attr('string'),
  screenshots: attr(),
  tags: attr(),

  images: computed('screenshots.[]', function () {
    const screenshots = this.get('screenshots');
    const images = [];

    screenshots.forEach(src => {
      const item = {};
      const image = new Image();

      image.onload = function () {
        setProperties(item, {
          h: image.height,
          w: image.width,
          src: image.src
        });
      };

      image.src = src;

      images.push(item);
    });

    return images;
  }),

  safetyHtml: computed('html', function() {
    return htmlSafe(this.html);
  })
});
