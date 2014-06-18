var blink = document.querySelector('.blink');

setInterval(function () {
  blink.style.visibility = getComputedStyle(blink).visibility === 'hidden'    ? 'visible'
    : 'hidden';
}, 300);
