var exports = module.exports = {};

// Create the state-indicator element
var indicator = document.createElement('div');
indicator.className = 'state-indicator';
document.body.appendChild(indicator);

// Create a method which returns device state
exports.getDeviceState = function () {
  var index = parseInt(window.getComputedStyle(indicator).getPropertyValue('z-index'), 10);

  var states = {
    2: 'small-desktop',
    3: 'tablet',
    4: 'phone'
  };

  return states[index] || 'desktop';
};
