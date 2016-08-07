Template.Generic_create.onCreated(function() {


});

Template.Generic_create.events({
  'submit [data-action=createGenericForm]': function(e) {
    e.preventDefault();
    var insert = Generics.insert({
      //  _id: e.target.globalCode.value,
      ar_name: e.target.es_name.value,
      ar_keyword: e.target.es_keyword.value,
      ar_desc: e.target.es_desc.value,
      valid: false
    });
    Rels.insert({
      type: 'USES_GENERIC',
      origin: Meteor.userId(), //belongsTo
      destiny: insert
    });

    console.log("inserted in Generics > " + insert);
    FlowRouter.go('../show-generic/' + e.target.globalCode.value);
  }
});
