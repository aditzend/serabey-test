Template.Contact_show_profile.helpers({
  birthData(contact) {
      return {
        dateOfBirth: dateOfBirth(contact.bDay, contact.bMonth, contact.bYear),
        actualBirthDay: actualBirthDay(dateOfBirth(contact.bDay, contact.bMonth,
          contact.bYear))
      };
    }
    /*actode: function() {
      return Actodes.findOne(actodeId);
    },
    actodeType: function(id) {
      return Actodes.findOne(id).actodeType;
    },
    destinyActode: function(id) {
      return Actodes.findOne(id).name;
    },
    rels: function() {
      return Rels.find({
        origin: actodeId
      });
    },
    bDay: function() {
      var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);

      return (d.isValid()) ? d.format('DD MMMM') : 'Preguntar!';

    }*/
});

Template.Contact_show_profile.events({
  'click #textArea.editable': function(response, newValue) {
    console.log("editing");
  },
  'click [data-action=delete]': function() {
    Session.set('deleting', true);
    console.log('deleting');
  },
  'click [data-action=delete-item]': function() {
    Session.set('btn', true);
    console.log('btn CLICK');
    setTimeout(function() {
      Session.set('btn', false);
      console.log('btn UNCLICK');
    }, 100);
    console.log('delete item...' + this._id);
    var relId = Rels.findOne({
      origin: this._id
    })._id;
    console.log('delete rel : ' + relId);
    //Actodes.remove(this._id);
    Rels.remove(relId);
    Session.set('deleting', false);
  },
  'click [data-action=exit-delete]': function() {
    Session.set('deleting', false);
    //console.log('deleting');
  },
  'click [data-action=exit-edit]': function() {
    Session.set('editing', false);
    //console.log('deleting');
  },
  'click [data-action=edit-actode]': function(e) {
    Session.set('editing', 'actode');
    console.log('editing Actode  ');
  }

});
