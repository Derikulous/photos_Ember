App.Router.map(function(){
  // list of all uploaded photos
  this.resource('photos',     {path:'/photos' });
  // form to allow you upload new photo
  this.resource('photo.new',  {path:'/photo/new'});
  // view an existing photo
  this.resource('photo',      {path:'/photo/:guid'}, function(){
    // edit an existing photo
    this.route('edit');
  });
})
