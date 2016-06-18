// main.js

require(["js/vendors/typed.min.js", "js/typed.js", "js/visibility.js"], function() {
  showLandingTyped();
  setupVisibility();
  performBlockWhenVisible(".about-title", function() {
    showAboutTyped();
  });
  performBlockWhenVisible(".contact-title", function() {
    showContactTyped();
  });
});

require(["js/vendors/smooth-scroll.min.js"], function(smoothScroll) {
  smoothScroll.init();
});
