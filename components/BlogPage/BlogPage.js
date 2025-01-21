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
      <div class="blog-post" data-post="blog2">
        <h2>The Struggle of Beginning</h2>
        <p class="date">Published: January 21, 2025</p>
        <hr class="separator" />
        <p class="summary">
           The struggle of beginning especially in coding, is somthing that can be enjoyable, but in my experience, can end curiosity.
        </p>
      </div>
      
      <div class="blog-post" data-post="blog1">
        <h2>About My Posts</h2>
        <p class="date">Published: January 20, 2025</p>
        <hr class="separator" />
        <p class="summary">
           My thoughts on why I am making blog posts, and a disclaimer about them.
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

