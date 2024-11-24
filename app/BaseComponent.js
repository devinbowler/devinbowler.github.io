// Base Component to make global methods required.

export class BaseComponent {
  constructor() {
    this.container = document.createElement('div');
    this.cssLoaded = false; 
  };

  render() {
    throw new Error('A render method must be implemented');
  }

  loadCSS(fileName) {
    if (this.cssLoaded) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `components/${fileName}/${fileName}.css`; // Assumes the file path
    document.head.appendChild(link);
  }
}
