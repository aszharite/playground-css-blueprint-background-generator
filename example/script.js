function toggleVisibility(elemId) {
  let fadeAnimationTime = 100;
  let allElem = $('.panel');
  let currentElem = $(`#${elemId} .panel`);

  if(currentElem.is(':visible')) {
    currentElem.fadeOut(fadeAnimationTime)
  } else {
    allElem.fadeOut(fadeAnimationTime);
    currentElem.fadeIn(fadeAnimationTime);
  }
}

function getCSS() {
  let elem = $('#viewer');
  let properties = ['background-color', 'background-size', 'background-image', 'background-position'];

  let cssProp = [];
  properties.map((prop) => {
    let css = elem.css(prop);

    cssProp.push(`${prop}: ${css}`);
  });

  return cssProp.join(`\n`);
}

function generateCSS() {
  let elem = $('#code code');
  let css = getCSS();

  elem.html(css);
}

const bgColorPicker = Pickr.create({
  el: '#background-color-picker',
  theme: 'nano',
  default: DEFAULT_OPTIONS.BACKGROUND_COLOR,
  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      input: true,
      save: true,
      cancel: true
    }
  }
});

bgColorPicker.on('change', (newBgColor) => {
  setBackgroundColor(newBgColor.toRGBA().toString());
}).on('cancel', (cancelInstance) => {
  setBackgroundColor();
});

const gridColorPicker = Pickr.create({
  el: '#grid-color-picker',
  theme: 'nano',
  default: DEFAULT_OPTIONS.GRID_COLOR,
  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      input: true,
      save: true,
      cancel: true
    }
  }
});

gridColorPicker.on('change', (newGridColor) => {
  setGridLines({
    color: newGridColor.toRGBA().toString()
  })
}).on('cancel', (cancelInstance) => {
  setGridLines();
});
