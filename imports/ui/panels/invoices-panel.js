import './invoices-panel.html';
import '/imports/ui/components/invoice/invoice-edit.js';


Template.Invoices_panel.onCreated( function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    creatingInvoice: false
  });
  const w = workfor();
  this.autorun( () => {
    let deliveryNotesSubscription = this.subscribe('DeliveryNotes.origin',w._id);
  });
  
  
  
});

Template.Invoices_panel.helpers({


  creatingInvoice() {
    return Template.instance().state.get('creatingInvoice');
  },
  createInvoiceArgs() {
    const instance = Template.instance();
    const order = instance.data.order;
    const w = workfor();
    return {
      soldProducts: order.soldProducts,
      orderId: order._id,
      onSavedData(formData) {
        let invoice = {
          origin: w._id,
          destiny: instance.state.get('company'),
          pos: formData.pos,
          number: formData.number,
          type: formData.type
        };
        Meteor.call('createInvoice',invoice,function(err,res){
          if (err) {
            console.log(err);
          }else{
            Meteor.call('propagateInvoiceToOrder',instance.state.get('orderId'),res,invoice);
          }
        });
        instance.state.set('creatingInvoice',false);
        
      },
      onCancel() {
        instance.state.set('creatingInvoice',false);
      }
    }
  }
});

Template.Invoices_panel.events({
  'click .js-create-invoice': function(e,instance) {
    instance.state.set('creatingInvoice',true);
  }
})