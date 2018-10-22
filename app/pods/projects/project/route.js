import Route from '@ember/routing/route';

export default Route.extend({
  renderTemplate() {
    this.render('projects.project', {
      into: 'application',
    });
  },

  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('currentSlide', 0);
    }
  }
});
