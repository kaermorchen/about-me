import Controller from '@ember/controller';
import { computed, set } from '@ember/object';

export default Controller.extend({
  tags: computed(function () {
    const tags = this.model.reduce((previousValue, item) => previousValue.concat(item.attributes.tags), []);

    return tags.uniq().sort().map(name => ({ name, selected: false }));
  }),

  selectedTags: computed('tags.@each.selected', function () {
    return this.tags.filterBy('selected');
  }),

  filteredProjects: computed('selectedTags.length', function () {
    const projects = this.model.sort((a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt));
    const tagNames = this.selectedTags.mapBy('name');

    if (tagNames.length === 0) {
      return projects;
    }

    return projects.filter(project => project.attributes.tags.some(v => tagNames.includes(v)));
  }),

  selectAll() {
    this.tags.setEach('selected', false);
  },

  toggleTagSelected(tag) {
    set(tag, 'selected', !tag.selected);
  }
});
