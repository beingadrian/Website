// visibility.js

function setupVisibility() {
  showWhenVisible("visible-fade-in");
  showWhenVisible("visible-fade-in-delayed");
};

function showWhenVisible(className) {
  var classSelector = "." + className;
  performBlockWhenVisible(classSelector, function() {
    if (className == "visible-fade-in") {
        $(classSelector).animate({'opacity':'1'}, 500);
    } else if (className == "visible-fade-in-delayed") {
        $(classSelector).delay(4500).animate({'opacity':'1'}, 500);
    }
  });
};

function performBlockWhenVisible(selector, block) {
  /* Every time the window is scrolled ... */
  $(window).scroll(function() {
      /* Check the location of each desired element */
      $(selector).each( function(i) {
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ) {
            block();
          }
      });
  });
}
