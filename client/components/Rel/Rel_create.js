// /*Template.Rel_create.onCreated( function() {
//   Rels.attachSchema(
//     Schema.RelationshipWithCustomer,
//      {replace:true}
//    );
// });
// var hooksObject = {
//   before: {
//     insert : function(doc) {
//       doc.destiny = FlowRouter.getParam('_id');// or GlobalId
//       doc.origin = Meteor.userId();//belongsTo
//       doc.owner = Meteor.userId();//belongsTo
//       doc.type = FlowRouter.getQueryParam('relType');
//       console.log('before hook');
//       this.result(doc);
//     }
//   },
//   after: {
//     insert : function(error, result) {
//       console.log('Relationship with id:  ' + result);
//       Session.set('creating',false);
//     }
//   }
// }
// 
// 
// AutoForm.hooks({
//   insertRelationshipForm: hooksObject
// });
// */
// 
// Template.Rel_create.onRendered(function() {
//   const instance = Template.instance();
// 
//   $('[data-action=form]').validate({
//     rules: {
//       paymentDays: {
//         required: false,
//       }
//     },
// 
// 
//     submitHandler: () => {
//       var notes = $('#notesInput').val();
//       var paymentDays = $('#paymentDaysInput').val();
//       var paymentTerms = $('#paymentTermsInput').val();
//       var paymentNotes = $('#paymentNotesInput').val();
// 
//       var insert = Rels.insert({
//         destiny: instance.data.destiny,
//         origin: instance.data.origin,
//         type: instance.data.type,
//         notes: notes,
//         paymentDays: paymentDays,
//         paymentTerms: paymentTerms,
//         paymentNotes: paymentNotes
//       });
//       instance.data.onSavedData(insert);
// 
// 
//     }
//   });
// });
// 
// Template.Rel_create.events({
//   'submit [data-action=form]': (e) => {
//     e.preventDefault();
//     console.log("submitted ok");
// 
//   }
// });
