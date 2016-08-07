Template.Generic_show.onCreated( function() {
  this.autorun( () => {
    this.subscribe('Generics.byId', FlowRouter.getParam('_id'));
    });
  });
Template.Generic_show.helpers({
  generic : function() {
    return Generics.findOne(FlowRouter.getParam('_id'));
  }
});
