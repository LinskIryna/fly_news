$(function() {
    function slideMenu() {
        var activeState = $("#menu-container .menu-list").hasClass("active");
        $("#menu-container .menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
    }
    $("#menu-wrapper").click(function(event) {
        event.stopPropagation();
        $("#hamburger-menu").toggleClass("open");
        $("#menu-container .menu-list").toggleClass("active");
        slideMenu();

        $("body").toggleClass("overflow-hidden");
    });
  
    $(".menu-list").find(".accordion-toggle").click(function() {
        $(this).find('.submenu').toggleClass("open").slideToggle("fast");
        $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
  
        $(".menu-list .accordion-content").not($(this).find('.submenu')).slideUp("fast").removeClass("open");
        $(".menu-list .accordion-toggle").not($(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    });

    $(".menu-link").click(function(){
        $(this).parent().trigger('click');

        return false;
    });

    if (window.screen.width <= 760) {
        $("#logo").before($("nav"));
    }
});

  
  