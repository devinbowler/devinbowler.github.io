import { BaseComponent } from "../../app/BaseComponent.js";
import { AppController } from "../../app/AppController.js";


export class BlogPage extends BaseComponent {
  #container = null;

  constructor() {
    super();
    this.loadCSS("BlogPage");
  }

  render() {
    if (this.#container) {
      return this.#container;
    }

    this.#container = document.createElement("div");
    this.#container.classList.add("blog-container");
    this.#setupContainerContent();

    return this.#container;
  }

  #setupContainerContent() {
    this.#container.innerHTML = `
      <div class="blog-post" data-post="blog1">
        <h2>Blog Post #1</h2>
        <p class="date">Published: November 27, 2024</p>
        <hr class="separator" />
        <p class="summary">
          This is a short summary of Blog Post #1. It explores interesting ideas, provides insights, and offers a glimpse into the topics discussed.
        </p>
      </div>
      <div class="blog-post" data-post="blog2">
        <h2>Blog Post #2</h2>
        <p class="date">Published: November 26, 2024</p>
        <hr class="separator" />
        <p class="summary">
          This is a short summary of Blog Post #2. It covers engaging topics, highlights challenges, and shares unique perspectives.
        </p>
      </div>
      <div class="blog-post" data-post="blog3">
        <h2>Blog Post #3</h2>
        <p class="date">Published: November 25, 2024</p>
        <hr class="separator" />
        <p class="summary">
          This is a short summary of Blog Post #3. It delves into intriguing concepts, solutions, and ideas worth exploring.
        </p>
      </div>
    `;

    this.#addPostClickListeners();
  }


#addPostClickListeners() {
  const posts = this.#container.querySelectorAll(".blog-post");

  posts.forEach((post) => {
    post.addEventListener("click", (event) => {
      const appController = AppController.getInstance();
      const postName = post.getAttribute("data-post");

      // Navigate to the specific blog post page
      console.log(`Navigating to blog post: ${postName}`);
      appController.navigate(`${postName}`);
    });
  });
}


}

