import { BaseComponent } from "../../../../app/BaseComponent.js";
import { AppController } from "../../../../app/AppController.js";

export class Blog2 extends BaseComponent {
  #container = null;

  constructor() {
    super();
    this.loadCSS("BlogPost2", "components/BlogPage/Posts/Blog2/Blog2.css");
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
        <h1>The Struggle of Beginning</h1>
        <p>Published: January 21st, 2025</p>
        <p>
          The struggle of beginning especially in coding, is somthing that can be enjoyable, but in my experience, can end curiosity.
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

