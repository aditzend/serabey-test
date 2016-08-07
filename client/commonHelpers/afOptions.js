Template.registerHelper("bYearOptions", function(){
let optionsArray = [];
let thisYear = moment().format('YYYY');
let beginYear = thisYear - 125;
for (i= thisYear; i > beginYear; i--) {
  //var str = 'Num ' + i;
  optionsArray.push({label: i, value: i})
}
return optionsArray;


});

Template.registerHelper("monthOptions", function(){
  let optionsArray = [];

  for (i= 0; i < 12; i++) {
    //var str = 'Num ' + i;
    optionsArray.push({label: moment().month(i).format('MMMM'), value: i+1})
  }
  return optionsArray;
});
Template.registerHelper("dayOfMonthOptions", function(){
  let optionsArray = [];

  for (i= 1; i < 32; i++) {
    //var str = 'Num ' + i;
    optionsArray.push({label: i, value: i})
  }
  return optionsArray;
});
