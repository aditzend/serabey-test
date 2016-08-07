Template.Rel_show.onCreated(function() {
    this.autorun(() => {});
});
Template.Rel_show.helpers({
    rel: function() {
        return Rels.findOne({
            origin: Meteor.userId(),
            destiny: FlowRouter.getParam('_id')
        });
    }
});
Template.Rel_show.events({
    /*"click #input-phantom": function(){
      //console.log(event.target.id);
      if ( Session.get('showSaveBtn') ) {
        $('#input-phantom').blur();

        Session.set('showSaveBtn',false);
      }else{
        $('#input-phantom').select();

        Session.set('showSaveBtn',true)
      }

    },
    "click #btn-save": function() {

      var txt = $('#input-phantom').val();
      Rels.attachSchema(Schema.RelationshipWithCustomer,{replace:true});
      Rels.update(this._id,{$set:{notes:txt}});
      console.log('updated OK');
      //Session.set('relUpdated',true);
      //Session.set('wellClicked',false);
      $('#input-phantom').prop('selected',false);
      Session.set('showSaveBtn',false);

    },*/
    'click [data-action=edit]': function() {
        console.log('editing rel');
        Session.set('editing', this._id);
    }
});



/*this.subscribe(
      'Rels.byDestiny',
        Meteor.userId(),
        FlowRouter.getParam('_id')
      'Rels.byOwner',
        Meteor.userId()
FlowRouter.getParam('_id')
); */
