App.PhotoNewRoute = Ember.Route.extend({
  model: function() {
    //provide a new photo to the template
    return App.Photo.create({});
  }
});
