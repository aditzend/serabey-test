// import {
//   Meteor
// }
// from 'meteor/meteor'
// 
// Meteor.methods({
//   'companies.insert' ({
//     name, country, fin, finType
//   }) {
//     new SimpleSchema({
//       name: {
//         type: String
//       },
//       country: {
//         type: String
//       },
//       fin: {
//         type: Number
//       },
//       finType: {
//         type: String
//       }
//     }).validate({
//       name, country, fin, finType
//     });
//     // 
//     // const rel = Rels.findOne({
//     //   origin: origin,
//     //   destiny: destiny,
//     //   type: 'worker'
//     // });
//     // const person = Persons.findOne(origin);
//     // console.log(person);
//     // 
//     // const ssok = person.ssok;
// 
//     // if (!todo.editableBy(this.userId)) {
//     //   throw new Meteor.Error('todos.updateText.unauthorized',
//     //     'Cannot edit todos in a private list that is not yours');
//     // }
// 
//     const ssok = generateSsok(this.userId());
// 
//     Companies.insert({
//       name: name,
//       country: country,
//       fin: fin,
//       finType: finType,
//       ssok: ssok
//     });
//   }
// });
