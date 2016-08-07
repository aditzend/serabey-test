//------------------------ACTODES---------------------
Meteor.publish('Actodes.byId',
    function(actodeId) {
        if (this.userId) {
            return Actodes.find({
                _id: actodeId
            });
        } else {
            this.ready();
        }
    });

Meteor.publish('Actodes.all', function() {
    if (this.userId) {
        return Actodes.find();
    } else {
        this.ready();
    }
});



//To get the company/companies to with a contact belongs
Meteor.publish('CompanyContacts',
    function(origin) {
        if (this.userId) {
            return Rels.find({
                origin: origin,
                destiny: destiny,
                type: 'CONT',
                owner: this.userId
            });
        } else {
            this.ready();
        }
    });



Meteor.publish('Contacts.byDestiny',
    function(destiny, owner) {
        if (this.userId) {
            return Rels.find({
                destiny: destiny,
                owner: owner,
                type: 'CONT'
            });
        } else {
            this.ready();
        }
    }
);

//---------------------GENERICS-------------------------
//To get all GENERICS

Meteor.publish('Generics.all', function() {
    if (this.userId) {
        return Generics.find();
    } else {
        this.ready();
    }
});

//To get a GENERIC by _id

Meteor.publish('Generics.byId', function(id) {
    if (this.userId) {
        return Generics.find(id);
    } else {
        this.ready();
    }
});

/*//---------------------COUNTRIES--------------------------

Meteor.publish('Countries.all', function() {
  if (this.userId) {
    return Countries.find();
  } else {
    this.ready();
  }
});*/
