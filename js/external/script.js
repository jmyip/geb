(function($) {

    $(document).ready(function() {

        //sticky nav

        $(window).scroll(function() {
            if ($(this).scrollTop() > 60){
                $('.sub-navigation').addClass("sticky");
            }
            else{
                $('.sub-navigation').removeClass("sticky");
            }
        });


        //subnav menu highlighting

        $("nav ul li a").click(function ( e ) {
            //e.preventDefault();
            $("nav li a").removeClass("active"); //Remove any "active" class
            $('nav li a[class=""]').removeAttr('class');
            $(this).addClass("active"); //Add "active" class to selected tab
        });


        //smooth scroll

        $(function() {
          $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: (target.offset().top)-65
                }, 1000);
                return false;
              }
            }
          });
        });

    });

})( jQuery );