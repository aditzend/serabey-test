import '/imports/ui/components/rel/rel-customer-edit.js';
import '/imports/ui/components/profit-center/profit-center.js';
import '/imports/ui/components/cost-center/cost-center.js';
import '/imports/ui/panels/customers-panel.js';
import '/imports/ui/panels/payment-methods-panel.js';
import '/imports/ui/panels/vendors-panel.js';
import '/imports/ui/panels/orders-panel.js';
import '/imports/ui/panels/items-panel.js';
import '/imports/ui/panels/sales-performance-panel.js';
import '/imports/ui/components/person/person-create.js';
import '/imports/ui/components/rel/validate-worker-rels.js';
import './dashboard.html';



Template.Dashboard.onCreated(function() {
    this.autorun(() => {
        // let tooSubscription = this.subscribe('transfers_of_ownership.test');
        // let toodSubscription = this.subscribe('transfer_of_ownership_details.test');

        // this.subscribe('userData'),
        //     this.subscribe('persons.own'),
    });
});

Template.Dashboard.helpers({

    isCompanyAdmin() {

        return (Meteor.user()
            .admins === undefined) ? false : true;
    },

  


    pathForShowTreasury() {
        const params = {};
        const queryParams = {
            // state: 'open'
        };
        const routeName = 'showTreasury';
        const path = FlowRouter.path(routeName, params, queryParams);

        return path;
    },
    // workingFor() {
    //     const instance = Template.instance();
    //     const companyId = Session.get('workfor');
    //     instance.autorun(() => {
    //         if (instance.subscriptionsReady()) {
    //             const company = Companies.findOne(companyId);
    //             return companyId;
    //         } else {
    //             return false;
    //         }
    //     })
    // 
    // 
    // 
    // 
    // },

    companyLogo() {
      return Meteor.user().jobs[Session.get('job')].companyLogo;



    },
    companyName(companyId) {
      return Meteor.user().jobs[Session.get('job')].companyName;
    }
});

Template.Dashboard.events({
  'click .js-new-order': function(e,instance) {
        const newOrder = Orders.insert({soldProducts: []});
        console.log("creating order", newOrder);
        
        const params = {
            _id: newOrder
        };
        const queryParams = {
            // state: 'open'
        };
        const routeName = 'showOrder';
        const path = FlowRouter.path(routeName, params, queryParams);
        
        FlowRouter.go(path);
    
  }
  

});
