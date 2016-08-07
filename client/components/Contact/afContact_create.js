/*Template.afContact_create.onCreated( function() {
  Actodes.attachSchema(Schema.Contact, {replace:true});
  Rels.attachSchema(Schema.RelCompanyContact, {replace:true});
  console.log('Schema.Contact attached');
  console.log('Schema.RelCompanyContact attached');


});

var hooksObject = {
  before: {
    insert: function(doc) {
      doc.actodeType = 1;
      console.log(moment({year: doc.bYear, month: doc.bMonth -1, day:doc.bDayOfMonth}).isValid() );
      console.log(moment({year: doc.bYear, month: doc.bMonth -1, day:doc.bDayOfMonth}) );

      //doc.bdateObj = moment();
      return doc;
    }
  },
  after: {
    insert: function(error,result) {
      if (error) {
        console.log(error);
      }else{
        Session.set('creating',false);
        console.log('actode inserted _id: ' + result);
        Rels.insert({
          origin:result,
          destiny:FlowRouter.getParam('_id'),
          owner:Meteor.userId(),
          type:'CONT'
        });
        console.log('rel created');
      }


    }
  }
};


AutoForm.hooks({
  insertContactForm: hooksObject
});
*/
