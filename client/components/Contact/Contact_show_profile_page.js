Template.Contact_show_profile_page.onCreated(function() {
    this.autorun(() => {



        FlowRouter.watchPathChange();
        let context = FlowRouter.current();
        // use context to access the URL state


        this.subscribe('rels.contacts', Session.get('workfor'), Session.get('workerRelId'));
        if (this.subscriptionsReady()) {


            // this.data.person = Persons.findOne(personId);
            // this.data.contactRel = Rels.findOne({
            //     origin: personId,
            //     type: 'contact'
            // });
            // console.log(this.data.contactRel);
        }
    });


});



Template.Contact_show_profile_page.helpers({
    person() {

        return Persons.findOne(FlowRouter.getParam('_id'));
    },
    contactRel() {
        Rels.findOne({
            origin: FlowRouter.getParam('_id'),
            type: 'contact'
        });

    },
    companyName(id) {
        let company = Companies.findOne(id);
        return company.name;
    },
    showBirthdayArgs(day, month, year) {
        return {
            bDay: day,
            bMonth: month,
            bYear: year
        }
    }
    // person() {
    //     const instance = Template.instance();
    // 
    //     return instance.data.person;
    // },
    // contactRel() {
    //     const instance = Template.instance();
    //     return instance.data.contactRel;
    // 
    // },
    // companyName(id) {
    //     const instance = Template.instance();
    //     let company = Companies.findOne(id);
    //     return company.name;
    // },
    // showBirthdayArgs(day, month, year) {
    //     return {
    //         bDay: day,
    //         bMonth: month,
    //         bYear: year
    //     }
    // },

    // contactArray() {
    //     const instance = Template.instance();
    //     const person = instance.getPersonId();
    //     return Persons.findOne(contact) ? [contact] : [];
    // },
    // contactArgs(contact) {
    //     const instance = Template.instance();
    //     return {
    //         contactReady: instance.subscriptionsReady(),
    //         contact() {
    //             return Persons.findOne(contact);
    //         },
    //         contactItem: Persons.findOne(contact, {
    //             fields: {
    //                 _id: true
    //             }
    //         })
    //     };
    // }
});
