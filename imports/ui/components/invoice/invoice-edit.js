import './invoice-edit.html';

Template.Invoice_edit.onCreated( function() {
  this.state = new ReactiveDict();
  console.log("orderId received at invoice edit",
  this.data.orderId);
  this.data.invoiceItems = [];
  
  this.state.setDefault({
    
  });
  const w = workfor();
  this.autorun( () => {
    let deliveryNotesSubscription =
     this.subscribe(
       'DeliveryNotes.origin',
       w._id
     );
  });
});

Template.Invoice_edit.helpers({
  invoiceItems() {
    return Template.instance().data.invoiceItems;
  },
  
  unInvoicedDeliveries() {
    return DeliveryNotes.find({
      // orderId:'DvWFNrEEtDrt4FoGy',
      orderId:Template.instance().data.orderId,
      // invoiced:false
    });
  },
  // soldProducts() {
  //   const instance = Template.instance();
  //   return instance.data.soldProducts;
  // },
    timeFromCreation(createdAt) {
    
        return moment(createdAt).fromNow();
    
    }
});

Template.Invoice_edit.events({
  'click .js-toggle-delivery': function(e,instance) {
    
    console.log("show", e.target.data-toggle);
    console.log("delivery id showing:", e.target.id);
    
    
  },
  'submit .js-add-delivery-item-to-invoice': function(e,instance) {
    e.preventDefault();
    console.log("target submit", e.target);
    
    // let formData = {
    //   pos: e.target.pos.value,
    //   number: e.target.number.value,
    //   type: e.target.type.value
    // };
    // const invoiceItem = {
    //   itemId : e.target.id,
    //   test: 'ok'
    // };
    // instance.data.invoiceItems.push(invoiceItem);
    // instance.data.onSavedData(formData);
  },
  'click .js-cancel': function(e,instance) {
    console.log('cancel invoice');
    instance.data.onCancel();
  }
});