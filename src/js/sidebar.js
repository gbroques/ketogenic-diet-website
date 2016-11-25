var hamburger = document.querySelector('.hamburger');
var expandedSidebar = document.querySelector('.sidebar-expanded');
var main = document.querySelector('.main');

var toggleSidebar = function () {
  // Initialize counter.
  if (typeof toggleSidebar.count === 'undefined') {
    toggleSidebar.count = 0;
  }

  // Toggle off.
  if (toggleSidebar.count) {
    hamburger.className = 'hamburger hamburger--arrowalt';
    main.className = 'main';
    expandedSidebar.className = 'sidebar-expanded';
    toggleSidebar.count--;

  // Toggle on.
  } else {
    hamburger.className += ' is-active';
    expandedSidebar.className += ' is-active';
    main.className += ' is-active';
    toggleSidebar.count++;
  }
};

// Bind toggle function to hamburger click.
hamburger.onclick = toggleSidebar;
