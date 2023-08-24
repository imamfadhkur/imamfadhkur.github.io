(function ($) {
  "use strict";

  function toggleSidebar() {
    $("#sidebar").toggleClass("active");
    var screenWidth = $(window).width();
    if (screenWidth >= 992) {
      $("#content").css("margin-left", $("#sidebar").hasClass("active") ? "0" : "280px");
    }
  }

  function adjustLayout() {
    $(".js-fullheight").css("height", $(window).height());
  }

  function checkScreenWidth() {
    var screenWidth = $(window).width();
    if (screenWidth >= 992) {
      $("#sidebarCollapse").attr("hidden", true);
      $("#sidebarCollapse1").attr("hidden", true);
      // $("#sidebarCollapse1").removeAttr("hidden");
      $("#content").css("margin-left", "280px");
    } else {
      $("#sidebarCollapse").removeAttr("hidden");
      $("#sidebarCollapse1").attr("hidden", true);
      $("#sidebar").removeClass("active");
      $("#content").css("margin-left", "0");
    }
  }

  $(document).ready(function () {
    adjustLayout();
    checkScreenWidth();

    $("#sidebarCollapse").on("click", function () {
      toggleSidebar();
      $("#sidebarCollapse").attr("hidden", true);
      $("#sidebarCollapse1").removeAttr("hidden");
    });

    $("#sidebarCollapse1").on("click", function () {
      toggleSidebar();
      $("#sidebarCollapse1").attr("hidden", true);
      $("#sidebarCollapse").removeAttr("hidden");
    });

    $(window).resize(function () {
      adjustLayout();
      checkScreenWidth();
    });
  });
})(jQuery);
