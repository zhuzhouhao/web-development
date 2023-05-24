// Use a random theme if reveal container has 'pattern--random' class.
const themes = [
  'hills',
  'indigo',
  'molecules',
  'night-sky',
  'orange-river',
  'palette',
  'playground',
  'pop',
  'quilt',
  'stream',
  'stripes',
  'waterfall',
  'waves',
];

function setTheme() {
  /*** random background ***/
  const reveal = document.getElementsByClassName('reveal').item(0);
  if (!reveal.classList.contains('pattern--random')) {
    return;
  }

  reveal.classList.forEach(function (value) {
    if (value.substr(0, 7) === 'pattern') {
      reveal.classList.remove(value);
    }
  });
  const index = Math.floor(Math.random() * themes.length);
  reveal.classList.add('pattern--' + themes[index]);
}
