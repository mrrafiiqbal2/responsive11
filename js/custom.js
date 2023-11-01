 // js plugin is gose here
  jQuery(function($) {
   $(document).ready( function() {
    // bootstarp plugin is here
     $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
     
    //wow js plugin is here
    new WOW().init();


 $('#counter-block').ready(function(){
        $('.cup').animationCounter({
          start: 0,
          step: 25,
          delay:100,
          end: 1500
                  });

        $('.Clients').animationCounter({
          start: 0,
          step: 50,
          delay:100,
          end: 4000
                  });
      
      $('.Project').animationCounter({
          start: 0,
          step: 40,
          delay:100,
          end: 3000
                  });
      

      

       
    });


                            });
              });
