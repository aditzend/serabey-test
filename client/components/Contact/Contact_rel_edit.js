Template.Contact_rel_edit.events({
  'submit [data-action=save-edit]' : function(e) {
    e.preventDefault();
    console.log('editing Rel: ' + this._id );
    Rels.update(this._id, {
      $set:{
        notes: e.target.notes.value,

      }
    });
    Session.set('editing',false);
  }
});
