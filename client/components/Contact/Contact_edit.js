// Template.Contact_edit.onCreated(function() {
//   const id = FlowRouter.getParam('_id');
//   this.autorun(() => {
//     this.subscribe('Actodes.byId', id);
//   });
// });
// Template.Contact_edit.onRendered(function() {
//   //const b = (this.data.birthMoment === "UNKOWN") ? null : this.data.birthMoment;
//   const chk = $('#formalTreatmentInput');
//   const isMale = this.data.isMale;
//   if (this.data.formalTreatment) {
//     chk.prop('checked', true);
//   }
//   if (this.data.isMale) {
//     $('#isMaleInput').val(1).change();
//   } else {
//     //$('#isMaleInput option[value=0]').prop("selected", "selected").change();
//     $('#isMaleInput').val(0).change();
//   };
//   var arrYears = bYearOptions();
//   var selectYear = document.getElementById("bYearInput");
//   for (i = 0; i < arrYears.length; i++) {
//     selectYear.add(new Option(arrYears[i].text, arrYears[i].value));
//   };
//   var arrMonths = monthOptions();
//   var selectMonth = document.getElementById("bMonthInput");
//   for (i = 0; i < arrMonths.length; i++) {
//     selectMonth.add(new Option(arrMonths[i].text, arrMonths[i].value));
//   };
//   var arrDays = dayOfMonthOptions();
//   var selectDay = document.getElementById("bDayInput");
//   for (i = 0; i < arrDays.length; i++) {
//     selectDay.add(new Option(arrDays[i].text, arrDays[i].value));
//   };
//   console.log("year 0 : " + arrYears[0].value);
//   console.log("mes 1 : " + arrMonths[1].value);
//   console.log("dia 1 : " + arrDays[1].value);
// 
// 
//   $('#bYearInput').val(this.data.bYear).change();
//   $('#bMonthInput').val(this.data.bMonth).change();
//   $('#bDayInput').val(this.data.bDay).change();
// 
// 
// 
//   $('#isMaleInput').val(isMale).change();
// 
// 
//   $('[data-action=form]').validate({
// 
//     rules: {
//       name: {
//         required: false,
//         minlength: 2,
//         maxlength: 30
//       },
//       middleName: {
//         required: false,
//         minlength: 2,
//         maxlength: 30
//       },
//       lastName: {
//         required: false,
//         minlength: 2,
//         maxlength: 30
//       },
//       treatedAs: {
//         required: true,
//         minlength: 2,
//         maxlength: 30
//       },
//       email: {
//         required: false,
//         email: true
//       }
// 
// 
// 
//     },
//     messages: {
//       name: {
//         //required: 'Este campo no puede quedar vacío!',
//         minlength: 'El nombre debe tener mínimo {0} letras!',
//         maxlength: 'El nombre debe tener máximo {0} letras!',
//       },
//       middleName: {
//         //required: 'Este campo no puede quedar vacío!',
//         minlength: 'El nombre debe tener mínimo {0} letras!',
//         maxlength: 'El nombre debe tener máximo {0} letras!',
//       },
//       lastName: {
//         //required: 'Este campo no puede quedar vacío!',
//         minlength: 'El apellido debe tener mínimo {0} letras!',
//         maxlength: 'El apellido debe tener máximo {0} letras!',
//       },
//       treatedAs: {
//         required: 'Este campo no puede quedar vacío!',
//         minlength: 'El tratamiento debe tener mínimo {0} letras!',
//         maxlength: 'El tratamiento debe tener máximo {0} letras!',
//       },
//       email: {
//         email: 'Este no es un email válido!',
// 
//       },
// 
// 
//     },
//     submitHandler: function() {
//         var name = $('#nameInput').val();
//         var middleName = $('#middleNameInput').val();
//         var lastName = $('#lastNameInput').val();
//         var treatedAs = $('#treatedAsInput').val();
//         var formalTreatment = $('#formalTreatmentInput').is(
//           ':checked');
//         var isMale = $('#isMaleInput').val();
//         var email = $('#emailInput').val();
//         var bDay = $('#bDayInput').val();
//         var bMonth = $('#bMonthInput').val();
//         var bYear = $('#bYearInput').val();
//         var birthMoment;
//         var mobile = $('#mobileInput').val();
//         var mobileCountry = (Phoneformat.countryForE164Number(mobile)) ?
//           Phoneformat.countryForE164Number(mobile) : 'AR';
//         var phone = $('#phoneInput').val();
//         var phoneCountry = (Phoneformat.countryForE164Number(phone)) ?
//           Phoneformat.countryForE164Number(phone) : 'AR';
//         var internalPhone = $('#internalPhoneInput').val();
// 
// 
//         /*var intNum = e.target.phoneInput.value;
//         if (Phoneformat.isValidNumber(intNum,country)) {
//           console.log("submited");
//         }*/
// 
//         if ((bDay === null) || (bMonth === null)) {
//           birthMoment = "UNKNOWN";
//         } else {
//           if ((bYear === 5000) || (bYear === null)) {
//             //birthMoment = "5000-" + bMonth + "-" + bDay;
// 
//             birthMoment = moment({
//               year: 5000,
//               month: bMonth,
//               day: bDay
//             }).format();
//           } else {
//             birthMoment = moment({
//               year: bYear,
//               month: bMonth,
//               day: bDay
//             }).format();
//             //birthMoment = bYear + "-" + bMonth + "-" + bDay;
//           }
// 
//         };
//         /*    var birthMoment = ((bDay===null) || (bMonth===null))
//                           ? null
//                           : moment({
//                                 year: bYear,
//                                 month: bMonth,
//                                 day: bDay
//                                 }).format('YYYY-MM-DD');*/
// 
// 
// 
//         console.log(Phoneformat.isValidNumber(mobile, mobileCountry));
// 
//         if (
//           (mobile === '' || Phoneformat.isValidNumber(mobile,
//             mobileCountry)) &&
//           (phone === '' || Phoneformat.isValidNumber(phone,
//             phoneCountry))
//         ) {
//           console.log("SUBMISSION AUTHORIZED");
//           var update = Actodes.update(FlowRouter.getParam('_id'), {
//             $set: {
//               actodeType: 1,
//               name: name,
//               middleName: middleName,
//               lastName: lastName,
//               treatedAs: treatedAs,
//               formalTreatment: formalTreatment,
//               isMale: isMale,
//               email: email,
//               bDay: bDay,
//               bMonth: bMonth,
//               bYear: bYear,
//               mobile: mobile,
//               phone: phone,
//               internalPhone: internalPhone,
//             }
//           });
//           console.log("isMale : " + isMale);
// 
// 
//           /*console.log('INSERT : ' + insert);
//           console.log("name : " + name);
//           console.log("middleName : " + middleName);
//           console.log("lastName : " + lastName);
//           console.log("treatedAs : " + treatedAs);
//           console.log("formalTreatment : " + formalTreatment);
//           console.log("isMale : " + isMale);
//           console.log("birthMoment : " + birthMoment);
//           console.log("mobile : " + mobile);
//           console.log("bDay : " + bDay);
//           console.log("bMonth : " + bMonth);
//           console.log("bYear : " + bYear);*/
//           console.log("UPDATED : " + update);
// 
//           Session.set('editing', false);
//           //FlowRouter.go('show-1/' + update);
//         }
//         /*  var createdActode = Actodes.findOne(insert);
//       console.log(createdActode.treatedAs);
// 
// */
// 
//       } //submitHandler
// 
//     //fin copia
// 
// 
// 
//   });
// });
// 
// Template.Contact_edit.events({
//   'submit [data-action=form]': function(e) {
//     e.preventDefault();
//   },
//   'blur [data-action=phoneInput]': function(e) {
//     var intNum = e.target.value;
//     var country = (Phoneformat.countryForE164Number(intNum)) ?
//       Phoneformat.countryForE164Number(intNum) : 'AR';
//     var element = $('#phoneInput');
//     var error = 'TELEFONO INCORRECTO';
//     if (!Phoneformat.isValidNumber(intNum, country) && (intNum != '')) {
//       element.parent("div").addClass("has-error has-feedback");
//       $(element).next("span").next("span").html(error).show();
//       $(element).parent("div").addClass("has-error has-feedback");
//       $(element).next("span").addClass("fa fa-2x fa-remove");
//     } else {
//       $(element).parent("div").removeClass("has-error has-feedback");
//       $(element).next("span").removeClass("fa fa-2x fa-remove");
//       $(element).next("span").next("span").hide();
//     }
//     //console.log(Phoneformat.isValidNumber(intNum,country));
//     //console.log(country);
//     //console.log(intNum);
// 
//     //$('#phoneExplanation').hide();
// 
// 
//   },
//   'blur [data-action=mobileInput]': function(e) {
//     var intNum = e.target.value;
//     var country = (Phoneformat.countryForE164Number(intNum)) ?
//       Phoneformat.countryForE164Number(intNum) : 'AR';
//     var element = $('#mobileInput');
//     var error = 'TELEFONO INCORRECTO';
//     if (!Phoneformat.isValidNumber(intNum, country) && (intNum != '')) {
//       element.parent("div").addClass("has-error has-feedback");
//       $(element).next("span").next("span").html(error).show();
//       $(element).parent("div").addClass("has-error has-feedback");
//       $(element).next("span").addClass("fa fa-2x fa-remove");
//     } else {
//       $(element).parent("div").removeClass("has-error has-feedback");
//       $(element).next("span").removeClass("fa fa-2x fa-remove");
//       $(element).next("span").next("span").hide();
//     }
//   }
// });
// 
// 
// Template.Contact_edit.helpers({
//   actode: function() {
//     return Actodes.findOne(FlowRouter.getParam('_id'));
//   },
//   checkIfFormal: function() {
//     return (this.formalTreatment) ? 'checked' : '';
//   },
//   checkIfMale: function() {
//     return (this.isMale) ? 'checked' : '';
//   }
// 
// });
