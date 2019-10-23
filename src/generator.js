let DEFAULT_OPTIONS = {
  ELEMENT_ID: "viewer",
  BACKGROUND_COLOR: "rgba(0, 102, 204, 1)",
  GRID_SPACING: 20,
  GRID_COLOR: "rgba(255, 255, 255, 0.2)",
  GRID_THICKNESS: 1
}

function setBackgroundColor(color) {
  let element = document.getElementById(DEFAULT_OPTIONS.ELEMENT_ID);

  element.style.backgroundColor = color || DEFAULT_OPTIONS.BACKGROUND_COLOR;
}

function setGridLines(gridOptions) {
  let element = document.getElementById(DEFAULT_OPTIONS.ELEMENT_ID);

  if(!gridOptions) gridOptions = {};

  let spacing = gridOptions.spacing || DEFAULT_OPTIONS.GRID_SPACING;
  let elements = gridOptions.elements || DEFAULT_OPTIONS.GRID_ELEMENTS;
  let color = gridOptions.color || DEFAULT_OPTIONS.GRID_COLOR;
  let thickness = gridOptions.thickness || DEFAULT_OPTIONS.GRID_THICKNESS;

  let gridElement = `${spacing}px ${spacing}px`;
  let gridColor = `
    linear-gradient(${color} ${thickness}px, transparent ${thickness}px),
    linear-gradient(90deg, ${color} ${thickness}px, transparent ${thickness}px)
  `;
  let gridCentering = `-${thickness}px -${thickness}px`;

  element.style.backgroundSize = `${gridElement}, ${gridElement}`;
  element.style.backgroundImage = `${gridColor}`;
  element.style.backgroundPosition = `${gridCentering}, ${gridCentering}`;
}
