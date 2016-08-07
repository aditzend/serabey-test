import './test-landing-options.html';

Template.testLandingOptions.events({
    'mousedown .js-flick': function(e, instance) {
        console.log("flick", e.target.src);

    },
    'mouseup .js-flick': function(e, instance) {
        console.log("flick", e.target.src);

    }
})
