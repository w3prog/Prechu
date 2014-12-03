$(document).ready(function() {
  $("#slider").owlCarousel({
 
    
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText: ['', '']
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
//      itemsDesktop : [1199,4],
//      itemsDesktopSmall : [980,3],
//      itemsTablet: [768,2],
//      itemsTabletSmall: false,
//      itemsMobile : [479,1]
 
  });
 
});