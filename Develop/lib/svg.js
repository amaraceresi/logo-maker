class SVG {
  constructor() {
    this.text = "";
    this.shape = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.shape}
    ${this.text}
    </svg>`;
  }

  setText(value, color) {
    if (value.length > 3) {
      throw new Error("Text must be 3 or less characters.");
    }
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${value}</text>`;
  }

  setShape(shapeSVG) {
    this.shape = shapeSVG.render();
  }

  getSVG() {
    return this.shape && this.text ? this.render() : "";
  }
}


module.exports = SVG;
