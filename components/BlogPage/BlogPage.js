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
        <h2>Blog Post Coming Soon</h2>
        <p class="date">Published: November 28, 2024</p>
        <hr class="separator" />
        <p class="summary">
           A summary of the blog will be posted here.
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

