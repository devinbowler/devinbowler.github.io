import { BaseComponent } from "../../app/BaseComponent.js";
import { AppController } from "../../app/AppController.js";

export class StaticInfo extends BaseComponent {
  #container = null;

  constructor() {
    super();
    this.loadCSS("StaticInfo");
  }

  render() {
    if (this.#container) {
      return this.#container;
    }

    this.#container = document.createElement("div");
    this.#container.classList.add("static-container");
    this.#setupContainerContent();

    return this.#container;
  }

  #setupContainerContent() {
    this.#container.innerHTML = `
      <div class="profile-info">
        <div class="name">Devin Bowler</div>
        <div class="title">Software Developer</div>
      </div>
      <div class="sidebar">
        <ul>
          <li><a data-target="aboutPage" class="tab">About</a></li>
          <li><a data-target="experiencePage" class="tab">Experience</a></li>
          <li><a data-target="projectPage" class="tab">Projects</a></li>
          <li><a data-target="blogPage" class="tab">Blog</a></li>
        </ul>
      </div>
    `;

    this.#addTabClickListeners();
  }

  #addTabClickListeners() {
    const tabs = this.#container.querySelectorAll(".tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        event.preventDefault();
        const appController = AppController.getInstance();
        const target = event.target.getAttribute("data-target");

        appController.navigate(target);
      });
    });
  }
}
