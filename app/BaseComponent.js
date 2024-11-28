// Base Component to make global methods required.

export class BaseComponent {
  constructor() {
    this.container = document.createElement('div');
    this.cssLoaded = false; 
  };

  render() {
    throw new Error('A render method must be implemented');
  }

loadCSS(fileName, filePath = null) {
  if (this.cssLoaded) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  
  // Use the specified file path if provided; otherwise, fall back to the default path
  link.href = filePath 
    ? filePath 
    : `components/${fileName}/${fileName}.css`; // Default path
  
  document.head.appendChild(link);
  this.cssLoaded = true; // Prevent reloading the same CSS
}

}
