Template.Contact_create.onRendered(function() {

    //---------------------------------populate select boxes
    var arrYears = bYearOptions();
    var selectYear = document.getElementById("bYearInput");
    for (i = 0; i < arrYears.length; i++) {
        selectYear.add(new Option(arrYears[i].text, arrYears[i].value));
    };
    var arrMonths = monthOptions();
    var selectMonth = document.getElementById("bMonthInput");
    for (i = 0; i < arrMonths.length; i++) {
        selectMonth.add(new Option(arrMonths[i].text, arrMonths[i].value));
    };
    var arrDays = dayOfMonthOptions();
    var selectDay = document.getElementById("bDayInput");
    for (i = 0; i < arrDays.length; i++) {
        selectDay.add(new Option(arrDays[i].text, arrDays[i].value));
    };
    $('#bYearInput')
        .val(5000)
        .change();
    $('#bMonthInput')
        .val(12)
        .change();
    $('#bDayInput')
        .val(0)
        .change();
    //--------------------------------------------------------


    $('[data-action=form]')
        .validate({

            rules: {
                name: {
                    required: false,
                    minlength: 2,
                    maxlength: 30
                },
                middleName: {
                    required: false,
                    minlength: 2,
                    maxlength: 30
                },
                lastName: {
                    required: false,
                    minlength: 2,
                    maxlength: 30
                },
                treatedAs: {
                    required: true,
                    minlength: 2,
                    maxlength: 30
                },
                email: {
                    required: false,
                    email: true
                }



            },
            messages: {
                name: {
                    //required: 'Este campo no puede quedar vacío!',
                    minlength: 'El nombre debe tener mínimo {0} letras!',
                    maxlength: 'El nombre debe tener máximo {0} letras!',
                },
                middleName: {
                    //required: 'Este campo no puede quedar vacío!',
                    minlength: 'El nombre debe tener mínimo {0} letras!',
                    maxlength: 'El nombre debe tener máximo {0} letras!',
                },
                lastName: {
                    //required: 'Este campo no puede quedar vacío!',
                    minlength: 'El apellido debe tener mínimo {0} letras!',
                    maxlength: 'El apellido debe tener máximo {0} letras!',
                },
                treatedAs: {
                    required: 'Este campo no puede quedar vacío!',
                    minlength: 'El tratamiento debe tener mínimo {0} letras!',
                    maxlength: 'El tratamiento debe tener máximo {0} letras!',
                },
                email: {
                    email: 'Este no es un email válido!',

                },


            },
            showErrors: function(errorMap, errorList) {
                $("#summary")
                    .html("El formulario tiene errores (" + this.numberOfInvalids() +
                        "), ver detalles en rojo.");
                this.defaultShowErrors();
            },
            submitHandler: function() {
                var name = $('#nameInput')
                    .val();
                var middleName = $('#middleNameInput')
                    .val();
                var lastName = $('#lastNameInput')
                    .val();
                var treatedAs = $('#treatedAsInput')
                    .val();
                var formalTreatment = $('#formalTreatmentInput')
                    .is(
                        ':checked');
                var isMale = $('#isMaleInput')
                    .val();
                var email = $('#emailInput')
                    .val();
                var bDay = $('#bDayInput')
                    .val();
                var bMonth = $('#bMonthInput')
                    .val();
                var bYear = $('#bYearInput')
                    .val();
                //var birthMoment;
                var mobile = $('#mobileInput')
                    .val();
                var mobileCountry = (Phoneformat.countryForE164Number(mobile)) ?
                    Phoneformat.countryForE164Number(mobile) : 'AR';
                var phone = $('#phoneInput')
                    .val();
                var phoneCountry = (Phoneformat.countryForE164Number(phone)) ?
                    Phoneformat.countryForE164Number(phone) : 'AR';
                var internalPhone = $('#internalPhoneInput')
                    .val();


                /*var intNum = e.target.phoneInput.value;
                if (Phoneformat.isValidNumber(intNum,country)) {
                  console.log("submited");
                }*/
                /*
                      if ((bDay === null) || (bMonth === null)) {
                        birthMoment = "UNKNOWN";
                      } else {
                        if ((bYear === 5000) || (bYear === null)) {
                          //birthMoment = "5000-" + bMonth + "-" + bDay;

                          birthMoment = moment({
                            year: 5000,
                            month: bMonth,
                            day: bDay
                          }).format();
                        } else {
                          birthMoment = moment({
                            year: bYear,
                            month: bMonth,
                            day: bDay
                          }).format();*/
                //birthMoment = bYear + "-" + bMonth + "-" + bDay;



                /*    var birthMoment = ((bDay===null) || (bMonth===null))
                                  ? null
                                  : moment({
                                        year: bYear,
                                        month: bMonth,
                                        day: bDay
                                        }).format('YYYY-MM-DD');*/



                console.log(Phoneformat.isValidNumber(mobile, mobileCountry));

                if (
                    (mobile === '' || Phoneformat.isValidNumber(mobile,
                        mobileCountry)) &&
                    (phone === '' || Phoneformat.isValidNumber(phone,
                        phoneCountry))
                ) {
                    console.log("SUBMISSION AUTHORIZED");
                    var insert = Actodes.insert({
                        actodeType: 1,
                        name: name,
                        middleName: middleName,
                        lastName: lastName,
                        treatedAs: treatedAs,
                        formalTreatment: formalTreatment,
                        isMale: isMale,
                        email: email,
                        //  birthMoment: birthMoment,
                        bDay: bDay,
                        bMonth: bMonth,
                        bYear: bYear,
                        mobile: mobile,
                        phone: phone,
                        internalPhone: internalPhone,
                    });
                    Rels.insert({
                        origin: insert,
                        destiny: FlowRouter.getParam('_id'),
                        owner: Meteor.userId(),
                        type: 'CONT'
                    });
                    /*console.log('INSERT : ' + insert);
                    console.log("name : " + name);
                    console.log("middleName : " + middleName);
                    console.log("lastName : " + lastName);
                    console.log("treatedAs : " + treatedAs);
                    console.log("formalTreatment : " + formalTreatment);
                    console.log("isMale : " + isMale);
                    console.log("birthMoment : " + birthMoment);
                    console.log("mobile : " + mobile);
                    console.log("bDay : " + bDay);
                    console.log("bMonth : " + bMonth);
                    console.log("bYear : " + bYear);*/
                    Session.set('creating', false);
                }
                /*  var createdActode = Actodes.findOne(insert);
      console.log(createdActode.treatedAs);

*/

            }
        });



});
Template.Contact_create.onDestroyed(function() {


});

Template.Contact_create.events({
    'submit form': function(e) {
        e.preventDefault();
        //console.log("submitted event");


        /*console.log(e.target.name.value);
        Session.set('creating',false);*/

    },
    'focus [data-action=phoneInput]': function(e) {
        //$('#phoneExplanation').show();
    },
    'blur [data-action=phoneInput]': function(e) {
        var intNum = e.target.value;
        var country = (Phoneformat.countryForE164Number(intNum)) ?
            Phoneformat.countryForE164Number(intNum) : 'AR';
        var element = $('#phoneInput');
        var error = 'TELEFONO INCORRECTO';
        if (!Phoneformat.isValidNumber(intNum, country) && (intNum != '')) {
            element.parent("div")
                .addClass("has-error has-feedback");
            $(element)
                .next("span")
                .next("span")
                .html(error)
                .show();
            $(element)
                .parent("div")
                .addClass("has-error has-feedback");
            $(element)
                .next("span")
                .addClass("fa fa-2x fa-remove");
        } else {
            $(element)
                .parent("div")
                .removeClass("has-error has-feedback");
            $(element)
                .next("span")
                .removeClass("fa fa-2x fa-remove");
            $(element)
                .next("span")
                .next("span")
                .hide();
        }
        //console.log(Phoneformat.isValidNumber(intNum,country));
        //console.log(country);
        //console.log(intNum);

        //$('#phoneExplanation').hide();


    },
    'blur [data-action=mobileInput]': function(e) {
            var intNum = e.target.value;
            var country = (Phoneformat.countryForE164Number(intNum)) ?
                Phoneformat.countryForE164Number(intNum) : 'AR';
            var element = $('#mobileInput');
            var error = 'TELEFONO INCORRECTO';
            if (!Phoneformat.isValidNumber(intNum, country) && (intNum != '')) {
                element.parent("div")
                    .addClass("has-error has-feedback");
                $(element)
                    .next("span")
                    .next("span")
                    .html(error)
                    .show();
                $(element)
                    .parent("div")
                    .addClass("has-error has-feedback");
                $(element)
                    .next("span")
                    .addClass("fa fa-2x fa-remove");
            } else {
                $(element)
                    .parent("div")
                    .removeClass("has-error has-feedback");
                $(element)
                    .next("span")
                    .removeClass("fa fa-2x fa-remove");
                $(element)
                    .next("span")
                    .next("span")
                    .hide();
            }
        }
        /*  ,
              'focus [data-action=bDayInput]': function() {
                //var option = document.createElement("option");
                var select = document.getElementById("bDayInput");
                var arr = dayOfMonthOptions();
                for (i = 0; i < arr.length; i++) {
                  select.add(new Option(arr[i].text, arr[i].value));
                }
              },
              'focus [data-action=bMonthInput]': function() {
                //var option = document.createElement("option");
                var select = document.getElementById("bMonthInput");
                var arr = monthOptions();
                for (i = 0; i < arr.length; i++) {
                  select.add(new Option(arr[i].text, arr[i].value));
                }
              },
              'focus [data-action=bYearInput]': function() {
                //var option = document.createElement("option");
                var select = document.getElementById("bYearInput");
                var arr = bYearOptions();
                for (i = 0; i < arr.length; i++) {
                  select.add(new Option(arr[i].text, arr[i].value));
                }
            //select.value = 5000;
        },*/
        /*,
        'keyup [data-action=nameInput]' : function(e) {
          console.log(Template.instance().find( "[data-action=nameInput]" ).class);


        }*/
});
