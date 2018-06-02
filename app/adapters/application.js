import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'data',

  urlForFindAll() {
    const url = this._super(...arguments);

    return `${url}/all.json`;
  }
});
