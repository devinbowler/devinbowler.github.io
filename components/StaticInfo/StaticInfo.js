import { BaseComponent } from "../../app/BaseComponent.js";
import { AppController } from "../../app/AppController.js";

export class StaticInfo extends BaseComponent {
  #container = null;

  constructor() {
    super();
    this.loadCSS("StaticInfo");
    this.render(); // Ensure the container is initialized
    this.#updateView(); // Update view on page load
    window.addEventListener("resize", this.#updateView.bind(this)); // Update on window resize
  }

  render() {
    if (!this.#container) {
      this.#container = document.createElement("div");
      this.#container.classList.add("static-container");
    }

    return this.#container;
  }

  #setupDesktopView() {
    // Ensure the container exists before setting content
    if (!this.#container) {
      console.error("Container is not initialized");
      return;
    }

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

  #setupMobileView() {
    // Ensure the container exists before setting content
    if (!this.#container) {
      console.error("Container is not initialized");
      return;
    }

    this.#container.innerHTML = `
      <button class="dropdown-button">☰</button>
      <div class="dropdown-content">
        <div class="profile-info">
          <div class="name">Devin Bowler</div>
          <div class="title">Software Developer</div>
        </div>
        <ul>
          <li><a data-target="aboutPage" class="tab">About</a></li>
          <li><a data-target="experiencePage" class="tab">Experience</a></li>
          <li><a data-target="projectPage" class="tab">Projects</a></li>
          <li><a data-target="blogPage" class="tab">Blog</a></li>
        </ul>
      </div>
    `;

    this.#addDropdownLogic();
    this.#addTabClickListeners();
  }

  #addDropdownLogic() {
    const dropdownButton = this.#container.querySelector(".dropdown-button");
    const dropdownContent = this.#container.querySelector(".dropdown-content");

    dropdownButton?.addEventListener("click", () => {
      dropdownContent?.classList.toggle("show");
    });
  }

  #addTabClickListeners() {
    const tabs = this.#container.querySelectorAll(".tab");
    const dropdownContent = this.#container.querySelector(".dropdown-content");

    tabs.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        event.preventDefault();

        // Close the dropdown menu (if it exists)
        if (dropdownContent && dropdownContent.classList.contains("show")) {
          dropdownContent.classList.remove("show");
        }

        // Navigate to the target page
        const appController = AppController.getInstance();
        const target = event.target.getAttribute("data-target");
        appController.navigate(target);
      });
    });
  }


  #updateView() {
    const isMobile = window.innerWidth <= 870;

    if (!this.#container) {
      console.error("Container is not initialized in #updateView");
      return;
    }

    if (isMobile) {
      this.#setupMobileView();
    } else {
      this.#setupDesktopView();
    }
  }
}
