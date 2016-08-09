import {
    Meteor
}
from 'meteor/meteor';

// 
// import {
//   Companies
// }
// from '../companies.js';
// Meteor.publish("companies.public", function companiesPublic() {
//     return Companies.find({}, {
//         fields: {
//             ssok: false
//         }
//     });
// });
Meteor.publish('Deliveries.test', function deliveriesTest() {
    if (this.userId) {
        return Deliveries.find();
    } else {
        this.ready();
    }

});