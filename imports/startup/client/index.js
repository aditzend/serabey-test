//client
import { Meteor } from 'meteor/meteor';

//declarations
import '../../api/companies/companies.js';
import '../../api/accounting/accounts/accounts.js';
import '../../api/controlling/profit-centers/profit-centers.js';
import '../../api/transfers/transfers-of-ownership/transfers-of-ownership.js';
import '../../api/transfers/transfers-of-ownership/details/details.js';
import '../../api/orders/orders.js';
import '../../api/deliveries/deliveries.js';
import '../../api/payment-methods/payment-methods.js';
import '../../api/orders/details/details.js';
import '../../api/rels/rels.js';
import '../../api/items/items.js';
import '../../api/persons/persons.js';
import '../../api/places/places.js';
import '../../api/generics/generics.js';
import '../../api/logs/logs.js';


import './useraccounts-configuration.js';
import './routes.js';
import './googlemaps.js';
import './easysearch.js';
import './global-functions.js';
import '../../api/rels/methods.js';
import '../../api/emails/methods.js';
import '../../api/persons/methods.js';
import '../../api/orders/methods.js';
import '../../api/deliveries/methods.js';
import '../../api/orders/details/methods.js';

import '../../api/companies/methods.js';


Meteor.startup(function() {
    /*$('body').addClass('fixed-navbar');*/
    $('body')
        .addClass('fixed-sidebar');
    $('body')
        .addClass('fixed-small-header');

    TAPi18n.setLanguage('es')
        .done(function() {})
        .fail(function(error_message) {
            // Handle the situation
            console.log(error_message);
        });





    // const workerRel = Rels.findOne({
    //     type: 'worker'
    // });
    // 
    // Meteor.setTimeout(function() {
    //     Session.set('workfor', workerRel.destiny);
    //     Session.set('workerRelId', workerRel._id);
    //     console.log("work for set to : ", Session.get('workfor'));
    //     console.log("work rel  set to : ", Session.get('workerRelId'));
    // 
    //     console.log(workerRel);
    // 
    // }, 10000);



});
