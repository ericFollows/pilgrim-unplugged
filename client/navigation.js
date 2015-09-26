/*

Template.navigation.events({
  "click .nav-button": function() {
    var pageName = 
    Session.set('selectedPage', pageName);
    var selectedPage = Session.get('selectedPage');
  }
});

*/

Template.navigation.helpers({
  'selectedPage': function(navRouteName){
    var pageName = Router.current().route.getName();
    if(pageName == navRouteName){
        return "selectedNav"
    }
}
});

$(document).foundation({
"magellan-expedition": {
  active_class: 'selectedNav', // specify the class used for active sections
  threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
  destination_threshold: 20, // pixels from the top of destination for it to be considered active
  throttle_delay: 50, // calculation throttling to increase framerate
  fixed_top: 0, // top distance in pixels assigned to the fixed element on scroll
  offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
}
});


/*
(function () {

 // Navigation helpers

 var isNavActive = function (page, matchTop) {
   var isActive = false;

   // If desired check that the top level matches
   if (matchTop) {
     var pathTop = page.split('/')[0];
     var currentPageTop = Meteor.Router.page().split('/')[0];
     if (pathTop === currentPageTop || _.contains(pathTop.split('|'), currentPageTop))
       isActive = true;
   }

   // Is it a perfect match
   var currentPage = Meteor.Router.page();
   if (currentPage === page)
     isActive = true;

   return isActive;
 };

 Handlebars.registerHelper('isActive', function (page) {
   return isNavActive(page, false) ? 'active' : '';
 });

 Handlebars.registerHelper('isActiveTop', function (page) {
   return isNavActive(page, true) ? 'active' : '';
 });

})();

*/