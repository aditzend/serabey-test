Meteor.methods({
  removeDetail(orderId,orderDetailId) {
    console.log("order", orderId);
    console.log("index", orderDetailId);
    Orders.update({_id: orderId},{$pull: {
      soldProducts: {
        orderDetailId: orderDetailId
      }
    }});
  },
  propagateDeliveryToOrder(orderId,deliveryId) {
    Orders.update({_id:orderId},{
      $push: {
        deliveries:{
          deliveryId:deliveryId
        }
      }
    })
  },
  addDeliveryItemToOrder(orderId,itemId,amount,packaging) {
    Orders.update({_id:orderId,'soldProducts.item':itemId},
      {
        $push:{
          'soldProducts.$.deliveries':{
              amount:amount,
              packaging: packaging,
              author: this.userId,
              createdAt: moment().format()
          }
        }
      
        
      });
  }
  
});

