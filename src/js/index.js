$(document).ready(function () {

   //dashboard filter links
   $('.dashboard_filter-item-link').on('click', function(){
      $('.dashboard_filter-item-link').removeClass("dashboard_filter-item-link-active");
      $(this).addClass("dashboard_filter-item-link-active");
   });

   //popup opening
   $('.popup_add-social-opener').on('click', function () {
      $('.popup-overlay, .popup_add-social').fadeIn()
   })
   //popup closing
   $('.popup_close, .popup-overlay').on('click', function () {
      $('.popup, .popup-overlay').fadeOut()
   })

   //toggle-mnu
   $(".toggle_mnu").on('click', function() {
      $(".toggle_mnu-sandwich").toggleClass("active");
      $('.page-wrapper').toggleClass('page-wrapper-aside-open');
      $('.header').toggleClass('header-aside-open');
      $('.header-overlay').toggleClass('active');
   });
   //aside mnu close by overlay
   $('.header-overlay').on('click', function () {
      $(".toggle_mnu-sandwich").removeClass("active");
      $('.page-wrapper').removeClass('page-wrapper-aside-open');
      $('.header').removeClass('header-aside-open');
      $('.header-overlay').removeClass('active');
   })

   //fetch by url from server

   const jsonUrl = 'https://my-json-server.typicode.com/YehorHubka/Sociotrack/items'

   $.getJSON( jsonUrl, function( data ) {

      let items = [];
      $.each( data, function( key, val ) {


         items.push( val.id)



         $.each( val, function( key2, val2 ) {
            console.log(key2, val2)
         })



      })

      console.log(items)


   })

})