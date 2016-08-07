Template.Search_fast_result.onCreated(function() {
    this.autorun(() => {})
})

Template.Search_fast_result.helpers({
    rel: function() {
        return Rels.findOne({
            origin: Meteor.userId(),
            destiny: this._id
        }, {
            fields: {
                type: 1,
                destiny: 1
            }
        });
    },
    cont() {
        return Rels.findOne({
            origin: this._id,
            type: 'contact'
        }, {
            // fields: {
            //     type: 1,
            //     origin: 1
            // }
        });

    }


});
