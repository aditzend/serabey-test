import {
    TAPi18n
} from 'meteor/tap:i18n';

Template.navigation.onCreated(function() {

    this.state = new ReactiveDict();

    this.autorun(() => {
        this.subscribe('userData'),
            this.subscribe('persons.own')

    });



});




Template.navigation.onRendered(function() {
    // Initialize metsiMenu plugin to sidebar menu
    $('#side-menu')
        .metisMenu();



    // const workerRel = Rels.findOne({
    //     type: 'worker',
    //     primary: true
    // });

    // Session.set('workfor', Rels.findOne({
    //         type: 'worker',
    //         primary: true
    //     })
    //     .destiny);
    // Session.set('workerRelId', workerRel._id);



});


Template.navigation.helpers({
    user() {
        return Meteor.user();
    },
  

    // workerRels() {
    //     if (Meteor.user()
    //         .relatedPerson === undefined) {
    // 
    // 
    //         console.log(" show create profile alert");
    // 
    //     } else {
    //         if (Session.get('workfor') === undefined) {
    //             console.log("setting default company");
    //             const workerRel = Rels.findOne({
    //                 type: 'worker',
    //                 primary: 'true'
    //             });
    //             Session.set('workfor', workerRel.destiny);
    //             Session.set('workerRelId', workerRel._id);
    //             // origin: instance.state.get('relatedPerson')
    // 
    //             return workerRel;
    //             // console.log("rel ", workerRel);
    //         }
    // 
    //     }
    // 
    // 
    // 
    // },

    companyName(companyId) {
        const company = Companies.findOne(companyId);
        if (company) {
            return company.name;
        } else {
            return '-'
        }
    },

    userEmail() {
        const instance = Template.instance();
        if (instance.subscriptionsReady()) {
            return Meteor.user()
                .emails[0].address;
        }
    },
    relatedPerson() {
        const instance = Template.instance();
        if (instance.subscriptionsReady() && Meteor.user()
            .relatedPerson) {


            //let r = Meteor.users.findOne(Meteor.userId())
            //.relatedPerson;
            // let relatedPersonId = Rels.findOne({
            //   destiny: Meteor.userId(),
            //   type: "HAS_USER"
            // }).origin;
            ///let relatedPerson = Persons.findOne(r);
            let name = Meteor.user()
                .name;



            return (name) ?
                name :
                'Completa tus datos!';
            // return 'subscriptionsReady';

        } else {
            return "Completa tus datos!"
        }
    }


});

Template.navigation.events({
    'click .js-show-treasury': function() {
        BlazeLayout.render('App_body', {
            main: 'Treasury_show_page'
        });
    },
    'click .js-create-sale': function() {
        FlowRouter.go('createSale');
    },

    // Colapse menu in mobile mode after click on element
    'click #side-menu a:not([href$="\\#"])': function() {
        if ($(window)
            .width() < 769) {
            $("body")
                .toggleClass("show-sidebar");
        }
    },
    'click [data-action=logout]': function() {
        Meteor.logout();
        FlowRouter.go('login');
    },
    'click .js-workfor': function(e, instance) {
      console.log(e.target.id);
        Session.set('job', e.target.id);

            

    },
    'click .js-reset': function(e, instance) {
            Accounts.sendResetPasswordEmail(Meteor.userId);
        }
        /*  'click [data-action=loginWithFacebook]': function() {
      Meteor.loginWithFacebook({
        requestPermissions: ['public_profile', 'email']
      }, function(err) {
        if (err)
          console.log("ERROR LOGGING WITH FACEBOOK : ") + err.reason;
      });
}*/

});
