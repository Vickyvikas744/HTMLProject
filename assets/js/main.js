$(function(){
  console.log('Ready Sansui')

  jQuery('#menu').meanmenu({
    meanMenuContainer: '.mobile',
    meanScreenWidth: "996"
  });


  //NAV BAR
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    
    if (st > 50) {
      $('.header-area').addClass('scrolled')
      $('.specification-header').addClass('scrolled')
      if (st > lastScrollTop) {
        $('.header-area').removeClass('show')
        $('.specification-header').removeClass('show')
      } else {
        $('.header-area').addClass('show')
        $('.specification-header').addClass('show')
      }
    } else {
      $('.header-area').removeClass('scrolled')
      $('.specification-header').removeClass('scrolled')

    }
    

    lastScrollTop = st;
  });



  $(document).on("click", ".single-menu-item a", function(){
    console.log("log something");
    return false;
});

   // Add smooth scrolling to all links
   $(".specification-btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top-100
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

   // Add smooth scrolling to all links
   $(".speaker-btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });





//AOS INIT
  AOS.init({
    duration: 1200,
  })



//   $('.warrenty').on({
//     'click': function(){
//         $('.support-img').attr('src','./images/support/warrenty.jpg');
//         $('.support-title').text('Warranty Policy');
//     }
// });

// $('.register, .registration, .query, .manual').on({
//     'click': function(){
//       $('.support-title').text('SUPPORT');
//         $('.support-img').attr('src','./images/support/support-1.jpg');
//     }
// });




$('.specification-tvs a').click(function(){
  $(this).tab('show');
})





   // Add smooth scrolling to all links
   $(".specification-tvs a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


    
   
    


  
































   

























})