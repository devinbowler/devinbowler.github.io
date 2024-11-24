import { BaseComponent } from "./app/BaseComponent.js";
import { AppController } from "./app/AppController.js";

export class AboutPage extends BaseComponent {
  #container = null;

  constructor(){
    super();
    loadCSS('AboutPage');
  }

  render() {
    if(this.#container){
      return this.#container;
    }
    
    this.#container = document.createElement('div');
    this.#container.classList.add('about-container');
    this.#setupContainerContent();

    return this.#container;
}

#setupContainerContent {
  this.#container.innerHTML = `
     <div class="test">Devin Bowler</div>
  `;
}

