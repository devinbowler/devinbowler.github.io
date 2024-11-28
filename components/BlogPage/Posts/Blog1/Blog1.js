import { BaseComponent } from "../../../../app/BaseComponent.js";
import { AppController } from "../../../../app/AppController.js";

export class Blog1 extends BaseComponent {
  #container = null;

  constructor() {
    super();
    this.loadCSS("BlogPost1", "components/BlogPage/Posts/Blog1/Blog1.css");
  }

  render() {
    if (this.#container) {
      return this.#container;
    }

    this.#container = document.createElement("div");
    this.#container.classList.add("blog-post-container");

    this.#setupContainerContent();

    return this.#container;
  }

  #setupContainerContent() {
    const appController = AppController.getInstance();

    this.#container.innerHTML = `
      <button class="back-button">← Back</button>
      <div class="blog-content">
        <h1>Finding Meaning</h1>
        <p>Published: November 28, 2024</p>
        <p>
          The content of this post will appear here when finished.
        </p>
      </div>
    `;

    // Add event listener to the back button
    const backButton = this.#container.querySelector(".back-button");
    backButton.addEventListener("click", () => {
      console.log("Navigating back to Blog Page");
      appController.navigate("blogPage"); // Navigate back to BlogPage
    });
  }
}

