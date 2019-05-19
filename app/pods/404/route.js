import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    this.set('headData.title', 'Error 404 - Not found');
  }
});
