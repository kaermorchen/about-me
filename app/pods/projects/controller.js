import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  tags: computed(function () {
    const tags = this.model.reduce((previousValue, item) => previousValue.concat(item.tags), []);

    return tags.uniq().sort().map(name => ({ name, selected: false }));
  }),

  filteredProjects: computed('tags.@each.selected', function() {
    const projects = this.model;
    const tagNames = this.tags.filterBy('selected').mapBy('name');

    if (tagNames.length === 0) {
      return projects;
    }

    return projects.filter(project => {
      return project.tags.some(v => tagNames.includes(v));
    });
  })
});
