const { Square, Triangle, Circle } = require("../lib/shapes");

describe("Circle", () => {
  it("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new Circle();
    circle.setColor("green");
    const output = circle.render()
    expect(output).toEqual(expectedSvg)
  });
  it("should accept a fillColor param", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const output = circle.render()
    expect(output).toEqual(expectedSvg)
  });
});

describe("Triangle", () => {
  it("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />';
    const triangle = new Triangle()
    triangle.setColor("green")
    const output = triangle.render()
    expect(output).toEqual(expectedSvg)
  });
  it("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
      const triangle = new Triangle()
      triangle.setColor("purple")
      const output = triangle.render()
      expect(output).toEqual(expectedSvg)
  });
});

describe("Square", () => {
  it("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';

  });
  it("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="red" />';

  });
});
