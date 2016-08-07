Template.Generics_show.onCreated(function() {
  this.autorun(() => {
    this.subscribe('Generics.all');
  });
});
Template.Generics_show.helpers({
  generics: function() {
    return Generics.find();
  }
});
