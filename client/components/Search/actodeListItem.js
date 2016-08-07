Template.actodeListItem.helpers({
  selected : function() {
    return Session.equals("selectedActode", this._id) ? "selected" : '';
  },
  isSelected : function() {
    return Session.equals("selectedActode", this._id) ? true : false;
  }

});
