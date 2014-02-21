App.PhotosRoute = Ember.Route.extend({
  model: function() {
    return this.storage.findAll(App.Photo);
  }
});
