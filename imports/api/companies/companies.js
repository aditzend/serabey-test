Companies = new Mongo.Collection('companies');
Companies.before.insert(function(userId, doc) {
    doc.createdAt = moment()
        .format();
    doc.author = Meteor.userId();
});
