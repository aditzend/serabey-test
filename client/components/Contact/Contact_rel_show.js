Template.Contact_rel_show.onCreated( function() {
  //console.log('Id of rel element :' + this._id);
})

Template.Contact_rel_show.helpers({
  actodeType: function(id) {
    return Actodes.findOne(id).actodeType;
  },
  destinyActode: function(id) {
    return Actodes.findOne(id).name;
  },
  thisId : function() {
    return this._id;
  }
});

Template.Contact_rel_show.events({
  'click [data-action=edit-rel]' : function(e) {
    Session.set('editing', this._id);
    console.log('editing rel id: ' + this._id );
  },
  'click [data-action=delete-item]' : function() {
    Session.set('btn',true);
    console.log('btn CLICK');
    setTimeout(function(){
    Session.set('btn',false);
    console.log('btn UNCLICK');
  }, 100);
  console.log('delete item...' + this._id);
//  var relId = Rels.findOne({origin: this._id})._id;
  //console.log('delete rel : ' + relId);
  //Actodes.remove(this._id);
  Rels.remove(this._id);
  Session.set('deleting',false);
},
});
