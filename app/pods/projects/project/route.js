import Route from '@ember/routing/route';
import { readOnly } from '@ember/object/computed';

export default Route.extend({
  breadcrumb: readOnly('controller.model.attributes.name'),

  model({ project_id }) {
    return this.modelFor('projects').find(item => item.id === project_id);
  },

  afterModel(model) {
    this.set('headData.title', `Project ${model.attributes.name}`);
    this.set('headData.description', `About project ${model.attributes.name}`);
  }
});
