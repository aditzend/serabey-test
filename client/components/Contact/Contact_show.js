// Template.Contact_show.onCreated(function() {
//   //const origin = Meteor.userId();
//   const destiny = FlowRouter.getParam('_id');
//   const owner = Meteor.userId();
//   this.autorun(() => {
//     this.subscribe('Contacts.byDestiny', destiny, owner);
//     this.subscribe('Actodes.all');
//   });
// });
// Template.Contact_show.helpers({
//   rel: function() {
//     var c = Rels.find({
//       destiny: FlowRouter.getParam('_id')
//     });
//     return (c.count() == 0) ? false : c;
//   },
//   contact: function(_id) {
//     return Actodes.findOne({
//       _id: _id
//     });
//     //return _id;
//   },
//   relNotes: function() {
//     var rel = Rels.findOne({
//       destiny: FlowRouter.getParam('_id'),
//       origin: this._id
//     });
//     return rel.notes;
//   }
// 
// });
// 
// Template.Contact_show.events({
//   "click [data-action=click-override]": function() {
//     Session.set('btn', true);
//     setTimeout(function() {
//       Session.set('btn', false);
//     }, 100);
//   },
// 
// 
//   /*"click [data-action=mobile]" : function() {
//     Session.set('btn',true);
//     setTimeout(function(){
//     Session.set('btn',false);
//     }, 100);
//   },
//   "click [data-action=email]" : function() {
//     Session.set('btn',true);
//     console.log('btn CLICK');
//     setTimeout(function(){
//     Session.set('btn',false);
//     console.log('btn UNCLICK');
//   }, 100);
//   },*/
//   "click [data-action=show-profile]": function() {
//     if (Session.get('btn')) {
//       console.log('btn tocado, no hago nada');
//     } else {
//       console.log('routing...', '/show-1/' + this._id);
//       FlowRouter.go('/show-1/' + this._id);
//     }
//   },
//   'click [data-action=delete-item]': function() {
//     Session.set('btn', true);
//     console.log('btn CLICK');
//     setTimeout(function() {
//       Session.set('btn', false);
//       console.log('btn UNCLICK');
//     }, 100);
//     console.log('delete item...' + this._id);
//     var relId = Rels.findOne({
//       origin: this._id
//     })._id;
//     console.log('delete rel : ' + relId);
//     //Actodes.remove(this._id);
//     Rels.remove(relId);
//     Session.set('deleting', false);
//   }
// 
// });
