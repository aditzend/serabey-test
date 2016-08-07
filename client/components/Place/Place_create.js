/*
Template.Place_create.onCreated( function() {
  console.log("Place_create tpl created");
  Places.attachSchema(Schema.Place, {replace:true});
  console.log("Schema.Place attached");

  this.autorun( () => {
    this.subscribe('Places.all');
  });

});


Template.Place_create.events({

});

var hooksObject = {
  before: {
    insert : function(doc) {
      doc.relatedActode = FlowRouter.getParam('_id');
      console.log('before hook');
      this.result(doc);
    }
  },
  after: {
    insert : function(error, result) {
      console.log('after hook ' + result);
      Session.set('creating',false);
    }
  }
}


AutoForm.hooks({
  insertPlaceForm: hooksObject
});
*/



Template.Place_create.onRendered(function() {

  //-----------------------------geocomplete
  this.autorun(() => {
    if (GoogleMaps.loaded()) {
      $('#addressInput').geocomplete({
        map: ".map_canvas",
        details: "[data-action=result]",
        markerOptions: {
          draggable: true
        }
      });

    }
    $("#addressInput").geocomplete().bind("geocode:result", function(
      event, result) {
      console.log(result);
    });
    $("#addressInput").bind("geocode:dragged", function(event, latLng) {
      $("input[name=lat]").val(latLng.lat());
      console.log(latLng.lat());

      $("input[name=lng]").val(latLng.lng());
    });

  });

  $('[data-action=result]').validate({
    submitHandler: function() {
      var route = $('#route').val();
      var street_number = $('#street_number').val();
      var postal_code = $('#postal_code').val();
      var lat = $('#lat').val();
      var lng = $('#lng').val();
      var locality = $('#locality').val();
      var administrative_area_level_2 = $(
        '#administrative_area_level_2').val();
      var administrative_area_level_1 = $(
        '#administrative_area_level_1').val();
      var country = $('#country').val();
      var country_short = $('#country_short').val();
      var placeType = $('#placeType').val();
      var notes = $('#notes').val();

      //var relatedActode = 'hAqyXkbW3BxdrLGJQ';
      var relatedActode = FlowRouter.getParam('_id');
      var insert = Places.insert({
        route: route,
        street_number: street_number,
        postal_code: postal_code,
        lat: lat,
        lng: lng,
        locality: locality,
        administrative_area_level_2: administrative_area_level_2,
        administrative_area_level_1: administrative_area_level_1,
        country: country,
        country_short: country_short,
        placeType: placeType,
        relatedActode: relatedActode,
        notes: notes
      });
      console.log("NEW PLACE : " + insert);
      Session.set('creating', false);

    }
  });
});
Template.Place_create.events({
  'submit [data-action=result]': function(e) {
    e.preventDefault();
    console.log("result SUBMIT ATEMPT");

  }

});
