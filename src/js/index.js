$(document).ready(function () {

   //dashboard filter links
   $('.dashboard_filter-item-link').on('click', function(){
      $('.dashboard_filter-item-link').removeClass("dashboard_filter-item-link-active");
      $(this).addClass("dashboard_filter-item-link-active");
   });

   //popup opening
   $('.popup_add-social-opener').on('click', function () {
      $('.popup-overlay, .popup_add-social').fadeIn()
   });
   //popup closing
   $('.popup_close, .popup-overlay').on('click', function () {
      $('.popup, .popup-overlay').fadeOut()
   });

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
   });

   //get json by url from server
   let url = 'https://my-json-server.typicode.com/YehorHubka/Sociotrack/items';

   $.getJSON( url, function( data ) {

      $.each( data, function( key, item ) {

         let cardItem = `
            <div class="card">
               <div class="card_info ${ item.isBrightItem ? 'bright-bg' : '' }" style="background: ${item.bg}">
                  <div class="card_info-icon">
                     <img class="card_info-icon-image" src="${item.socImg}" alt="">
                  </div>
                  <div class="card_info-text">
                     <div class="card_info-text-number">${item.followers}</div>
                     <div class="card_info-text-under">${item.users}</div>
                  </div>
                  <div class="card_info-value ${item.activity ? 'show' : 'hide'} ${item.activityClass}">${item.activityNumber}</div>
               </div>
               <div class="card_person">
                  <div class="card_person-ava">
                     <img class="card_person-ava-image" src="${item.avatar}" alt="">
                  </div>
                  <div class="card_person-info">
                     <div class="card_person-info-social">${item.socName}</div>
                     <a href="${item.socLinkUrl}" class="card_person-info-link">${item.socLinkName}</a>
                  </div>
               </div>
            </div>
         `;

         $('.dashboard_cards').append(cardItem);

      });

   });

})