import { BaseComponent } from "../../app/BaseComponent.js";

export class AboutPage extends BaseComponent {
  #container = null;

  constructor() {
    super();
    this.loadCSS("AboutPage");
  }

  render() {
    if (this.#container) {
      return this.#container;
    }

    this.#container = document.createElement("div");
    this.#container.classList.add("about-container");
    this.#setupContainerContent();

    return this.#container;
  }

  #setupContainerContent() {
    this.#container.innerHTML = `
      <div class="about-header">
        <h1>About</h1>
      </div>
      <div class="about-content">
    <p> I am a current student at the University of Massachusetts Amherst, studying computer science. I am activly looking for an internship for the summer of 2025, and am open to an opportunity. I have previously done research for both UMASS Amherst and The University of Houston in machine learning.
    <p>
      I view technology as a powerful tool that shapes our lives, and I find great satisfaction in creating with it. Code represents an opportunity to solve problems and explore new ideas. 
    </p>
    <p>
      My journey in software development is driven by a genuine curiosity about how things work. I enjoy diving into programming languages and discovering their potential to bring concepts to life. 
    </p>
    <p>
      Challenges are part of the process, and I welcome them as chances to learn and grow. I believe that through focus and determination, we can no only uncover solutions to our problems, but create to drive inspiration.
    </p>
    <p>
      I approach each project with an open mind, recognizing that every experience offers a lesson. The process of creation is as valuable as the end result, and I strive to cultivate a mindset that embraces exploration and innovation. In this ever-evolving field, I find inspiration in the possibilities that lie ahead and the impact we can have through thoughtful engagement with technology.
    </p>
      </div>
    `;
  }
}
