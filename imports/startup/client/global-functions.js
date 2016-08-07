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
