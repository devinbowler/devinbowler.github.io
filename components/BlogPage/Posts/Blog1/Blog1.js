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
        <h1>About My Posts</h1>
        <p class="date">Published: January 20, 2025</p>
        <p class="summary">
I wanted to make a first blog post, about my blog posts. I wanted to put this into my portfolio for a way of having record of my thoughts on certain topics, and show my curiosity and teachings to those who come here to get a better idea of who I am. I think the best way to show this is to read my thoughts exactly on certain topics.
</br></br>
I want to make posts about everything from takes on tech topics, abstract thinking, tech I have learned, and just general thoughts relating to my career, the tech I use, and the lessons I learn. 
</br></br>
This is not a very long post, but I just wanted to make a note about how I want to approach my posts, and a disclaimer of I am by no means a writer, and these posts will most likely not be formatted very well, and my point may not come across as well as I would hope, but I hope whoever may read these posts can take anyway a new perspective on the topics I cover, and maybe learn something about me or what I am talking about.
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

