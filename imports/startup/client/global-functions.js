postSignUp = function(userId, info) {
    console.log('SIGN UP');
    // FlowRouter.go('exit');
};






dayOfMonthOptions = function() {
    let optionsArray = [];
    optionsArray.push({
        text: "-",
        value: 0
    });
    for (i = 1; i < 32; i++) {
        //var str = 'Num ' + i;
        optionsArray.push({
            text: i,
            value: i
        })
    }
    return optionsArray;
};

monthOptions = function() {
    let optionsArray = [];
    optionsArray.push({
        text: '-',
        value: 12
    })
    for (i = 0; i < 12; i++) {
        //var str = 'Num ' + i;
        optionsArray.push({
            text: moment()
                .month(i)
                .format('MMMM'),
            value: i
        })
    }
    return optionsArray;
};

bYearOptions = function() {
    let optionsArray = [];
    let thisYear = moment()
        .format('YYYY');
    let beginYear = thisYear - 125;
    optionsArray.push({
        text: '-',
        value: 5000
    });
    for (i = thisYear; i > beginYear; i--) {
        //var str = 'Num ' + i;
        optionsArray.push({
            text: i,
            value: i
        })
    }


    return optionsArray;
};

workfor = function() {
  let index = Session.get('job');
  let jobs = Meteor.user().jobs;
  if (index === undefined || jobs == undefined || jobs.length === 0 ) {
    console.log('NO JOBS FOUND, RETURNING FREELANCE OBJECT');
    return {
      _id:Meteor.userId(),
    name:'Freelance',
    logo: false};
  }else{
    console.log('JOBS FOUND, RETURNING OBJECT');
    
    return {
      _id:jobs[index].companyId,
    name:jobs[index].companyName,
    logo: jobs[index].companyLogo};
  }
};

