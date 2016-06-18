// typed.js

function showLandingTyped() {
  $(".landing-title").typed({
		strings: ["@^300beingadrian"],
		typeSpeed: 100,
		startDelay: 300,
		showCursor: true
	});
}

function showAboutTyped() {
  $(".about-title").typed({
    strings: ["Adrian^200 Wisaksana"],
    typeSpeed: 50,
    startDelay: 100,
    showCursor: true
  });
}

function showContactTyped() {
  $(".contact-title").typed({
    strings: ["Nice to meet you.^700", "Say hello", "hello@beingadrian.com"],
    typeSpeed: 50,
    startDelay: 100,
    showCursor: true
  });
}
