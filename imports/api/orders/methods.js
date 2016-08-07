Meteor.methods({
  removeDetail(orderId,orderDetailId) {
    console.log("order", orderId);
    console.log("index", orderDetailId);
    Orders.update({_id: orderId},{$pull: {
      soldProducts: {
        orderDetailId: orderDetailId
      }
    }});
  }
  
});