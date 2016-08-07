Template.Search_result_item.onRendered(function() {

  /*console.log("item created");
  $('.sri').eq(0).addClass('h-bg-yellow');
});
Template.Search_result_item.onDestroyed(function() {

  console.log("item destroyed");
  $('.sri').eq(0).removeClass('h-bg-yellow');*/
  $('#search-result-ul').children().first().addClass('h-bg-yellow');
})
