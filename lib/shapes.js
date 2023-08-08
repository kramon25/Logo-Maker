// Shape class utilizes constructor
class Shape {
  constructor() {
    this.color = "";
  }
  // Shape class takes in setColor function
  setColor(colorVar) {
    this.color = colorVar;
  }
}

// Triangle class takes over properties defined in Shape class
class Triangle extends Shape {
  render() {
    // Returns polygon with color input
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Square class takes over properties defined in Shape class
class Square extends Shape {
  render() {
    // Returns polygon with color input
    return `<rect x="90" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}

// Circle class takes over properties defined in Shape class
class Circle extends Shape {
  render() {
    // Returns polygon with color input
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Exports classes
module.exports = { Triangle, Square, Circle };
