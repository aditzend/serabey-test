Deliveries = new Mongo.Collection('deliveries');
Deliveries.before.insert(function(userId, doc) {
    doc.createdAt = moment()
        .format();
    doc.author = Meteor.userId();
    doc.authorName = Meteor.user()
        .name;
    doc.authorLastName = Meteor.user()
        .lastName;
});

