App.PhotoRoute = Ember.Route.extend({
  model: function(params) {
    return this.storage.find(App.Photo, params.guid);
  },
  serialize: function(model) {
    return {guid: model.get('guid')};
  }
});
