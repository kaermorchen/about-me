import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    this.set('headData.description', 'Projects of Stanislav Romanov');
  }
});
