Meteor.methods({
  'createOrderDetail'(tood) {
    return OrderDetails.insert(tood);
  }
})