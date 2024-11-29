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
<p>I am a current student at the University of Massachusetts Amherst, majoring in computer science. I am actively seeking a summer 2025 internship and am open to opportunities where I can contribute, learn, and grow. My experience spans research at both UMass Amherst and the University of Houston, where I focused on machine learning and cybersecurity.</p> <p>At the University of Houston, I had the privilege of working closely with PhD students and professors in the cybersecurity department. Through regular meetings, we explored a variety of research topics before narrowing down to a project on vulnerability detection using large language models (LLMs). This experience was invaluable in teaching me how to efficiently manage project timelines, present findings in a clear and concise way during meetings, and collaboratively refine research goals. I walked away with a deeper appreciation for the process of tackling complex problems and the importance of communication and adaptability in research environments.</p> <p>As for why I am studying computer science, I see technology as a great tool to solve problems and shape the world we live in. Coding, for me, is a bit more than just writing lines of instructions—it's an opportunity to bring any ideas I may have to life. Every challenge in software development is an opportunity for me to grow and refine my skills, and I welcome those moments.</p> <p>My journey is has be largly driven by a love of the craft and a desire to understand how things work. Whether it's experimenting with a new language, and technology, or building something from scratch, I’m always grateful for ways to expand my knowledge. </p> <p>I believe the process of creating is as valuable if not more valuable as the end result. Each project offers lessons, and I approach every task with an open mind, embraceing challenges and exploreing ideas. In this field, I find inspiration in the endless possibilities ahead and the role we can play in shaping the future through thoughtful, meaningful technology.</p>
      </div>
    `;
  }
}
