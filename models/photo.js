App.Photo = App.Model.extend({
  image: null,
  title: '',
  description: '',
  // thumbnail is taken from placeholder or the image if
  thumbnail: function() {
    if (Em.isNone(this.get('image'))) {
      return "http://placehold.it/90x90";
    } else {
      return this.get('image');
    }
  }.property('image'),
  // Tells the reistance layer what properties to save to localStorage
  // Ember Data does this for you
  serialize: function() {
    return this.getProperties(["guid", "image", "title", "description"]);
  }
});

// set storage key for this class of models
// this overrides App.Model's default static storageKey property
Photo.reopenClass({
  storageKey: 'photo'
});
