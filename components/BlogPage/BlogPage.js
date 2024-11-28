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
        <h2>Finding Meaning</h2>
        <p class="date">Published: November 28, 2024</p>
        <hr class="separator" />
        <p class="summary">
          In this post I wanted to write down some thoughts I had on my view of meaning in life, what if could be and what I draw from as a sort of ispiration to keep going about my life. I think the topic and answer is different for every person, and perhaps it is better that way, or maybe a difference on meaning is what seprates us.
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

