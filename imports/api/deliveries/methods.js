Meteor.methods({
  createDelivery(orderId,companyId) {
    if (this.userId) {
      return Deliveries.insert({
        orderId: orderId,
        companyId: companyId,
        items: [],
        author: this.userId,
        createdAt: moment().format()
      });
    } else {
      throw new Meteor.Error('ERR100 USER MUST LOG IN', "log in first");
    }
  },
  updateDelivery(id,itemObj) {
    if (this.userId) {
      Deliveries.update({_id:id},
      {$push:{
        items: itemObj
      }
    });
    }else {
      throw new Meteor.Error('ERR100 USER MUST LOG IN', "log in first");
    }
  } 
});

