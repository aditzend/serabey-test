Meteor.methods({
  createInvoice(invoice) {
    if (this.userId) {
      return Invoices.insert(invoice);
    }else{
      throw new Meteor.Error('error');
    }
  },
  propagateInvoiceToOrder(orderId,invoiceId,invoice) {
    let inv = invoice;
    inv.invoiceId = invoiceId;
    if (this.userId) {
      Orders.update({_id:orderId},{$push:{
        invoices:{inv}
      }});
    }else{
      throw new Meteor.Error('error');
    }
  }
});