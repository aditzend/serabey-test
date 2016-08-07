Template.registerHelper("formatDate", function(D, M, Y) {
  return moment([Y, M, D]).format('DD / MM / YYYY');
});
