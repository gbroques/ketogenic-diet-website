var ScrollSpy = require('scrollspy-js');
var smoothScroll = require('smooth-scroll');
smoothScroll.init({
  selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
  selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
  speed: 650, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutCubic', // Easing pattern to use
  offset: 0 // Integer. How far to offset the scrolling anchor location in pixels
});

var spy = new ScrollSpy('#js-scrollspy', {
  nav: '.js-scrollspy-nav > a',
  className: 'in-view'
});

var spy2 = new ScrollSpy('#js-scrollspy1', {
  nav: '.js-scrollspy-nav > a',
  className: 'in-view'
});
