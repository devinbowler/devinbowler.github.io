import { BaseComponent } from "./app/BaseComponent.js";
import { AppController } from "./app/AppController.js";

export class StaticInfo extends BaseComponent {
  #container = null;

  constructor(){
    super();
    loadCSS('StaticInfo');
  }

  render() {
    if(this.#container){
      return this.#container;
    }
    
    this.#container = document.createElement('div');
    this.#container.classList.add('static-container');
    this.#setupContainerContent();

    return this.#container;
}

#setupContainerContent {
  this.#container.innerHTML = `
     <div class="testP">Profile</div>
  `;
}

