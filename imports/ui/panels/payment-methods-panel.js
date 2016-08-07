import './payment-methods-panel.html';


Template.PaymentMethodsPanel.onCreated(function() {

    this.state = new ReactiveDict();
    this.state.setDefault({
        dataLoaded: false,
        creatingMethod: false
    });


    this.autorun(() => {
        let paymentMethodSubscription = this.subscribe('PaymentMethods.test');
        if (paymentMethodSubscription.ready()) {
            this.state.set('dataLoaded', true);
        }
    });
});

Template.PaymentMethodsPanel.helpers({
    paymentMethods() {
        return PaymentMethods.find();
    },
    creatingMethod() {
        const instance = Template.instance();
        return instance.state.get('creatingMethod');
    }
});

Template.PaymentMethodsPanel.events({
    'click .js-create-payment-method': function(e, instance) {
        instance.state.set('creatingMethod', true);
    },
    'click .js-save-payment-method': function(e, instance) {
        instance.state.set('creatingMethod', false);
        PaymentMethods.insert({
                name: instance.$('#name')
                    .val(),
                days: instance.$('#days')
                    .val()
            }

        )
    },
    'click .js-cancel-payment-method': function(e, instance) {
        instance.state.set('creatingMethod', false);
    }
});
