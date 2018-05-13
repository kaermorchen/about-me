import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  experienceYears: computed(function () {
    return new Date().getFullYear() - 2010;
  })
});
