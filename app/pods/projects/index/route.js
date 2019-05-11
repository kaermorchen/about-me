import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    this.set('headData.title', 'My projects');
    this.set('headData.description', 'The list of projects of Stanislav Romanov');
  }
});
