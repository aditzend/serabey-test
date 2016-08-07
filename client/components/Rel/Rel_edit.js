Template.Rel_edit.events({
  'submit [data-action=save-edit]' : function(e) {
    e.preventDefault();
    console.log('editing Rel: ' + this._id );
    Rels.update(this._id, {
      $set:{
        notes: e.target.notes.value,
        paymentDays: e.target.paymentDays.value,
        paymentTerms: e.target.paymentTerms.value,
        paymentNotes: e.target.paymentNotes.value,
      }
    });
    Session.set('editing',false);
  }
});
