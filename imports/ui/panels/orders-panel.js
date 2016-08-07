import './orders-panel.html';

Template.Orders_panel.onCreated(function() {
  this.autorun( () => {
    this.subscribe('Orders.test');
  });
});

Template.Orders_panel.helpers({
  
  orders() {
    return Orders.find({},{limit: 6, sort:{createdAt:-1}});
  },
  timeFromOrderCreation(createdAt) {
    return moment(createdAt).format("LTS");
  },
  pathForOrder(id) {
      
      const params = {
          _id: id
      };
      const queryParams = {
          // state: 'open'
      };
      const routeName = 'showOrder';
      const path = FlowRouter.path(routeName, params, queryParams);

      return path;
  },
});

Template.Orders_panel.events({
  'click .js-show-order': function(e, instance) {
    
  }
})