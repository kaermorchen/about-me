import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  tags: computed(function () {
    const tags = this.model.reduce((previousValue, item) => previousValue.concat(item.attributes.tags), []);

    return tags.uniq().sort().map(name => ({ name, selected: false }));
  }),

  selectedTags: computed('tags.@each.selected', function () {
    return this.tags.filterBy('selected');
  }),

  filteredProjects: computed('selectedTags.length', function() {
    const projects = this.model.sortBy('attributes.createdAt').reverse();
    const tagNames = this.selectedTags.mapBy('name');

    if (tagNames.length === 0) {
      return projects;
    }

    return projects.filter(project => project.attributes.tags.some(v => tagNames.includes(v)));
  }),

  selectAll() {
    this.tags.setEach('selected', false);
  }
});
