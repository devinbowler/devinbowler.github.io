import { BaseComponent } from "../../app/BaseComponent.js";

export class ProjectPage extends BaseComponent {
  #container = null;

  constructor() {
    super();
    this.loadCSS("ProjectPage");
  }

  render() {
    if (this.#container) {
      return this.#container;
    }

    this.#container = document.createElement("div");
    this.#container.classList.add("project-container");
    this.#setupContainerContent();

    return this.#container;
  }

  #setupContainerContent() {
    this.#container.innerHTML = `
      <div class="page-header">
        <h1>Selected projects spanning full-stack, research, and developer tooling.</h1>
      </div>

      <div class="section-divider"><span>Projects</span></div>

      <div class="project-grid">
        <div class="project">
          <div class="project-image">
            <div class="project-image-screen">
              <img src="assets/quiblyimg.png" alt="Quibly Project" />
            </div>
          </div>
          <div class="project-body">
            <h2>Quibly</h2>
            <p>Quibly is a resume tailoring platform where you upload your profile, paste a job link, and get a tailored resume generated for that role. After generation, a built-in LaTeX editor lets you refine the output before export. Rebuilt on the same MERN stack as its earlier task-management version, with a focus on responsive design, API integration, and deploying scalable web applications.</p>
            <div class="tags">
              <span class="tag">MERN</span>
              <span class="tag">LaTeX</span>
              <a href="https://quibly.net" target="_blank" class="btn btn-sm btn-outline project-link">Website</a>
            </div>
          </div>
        </div>

        <div class="project">
          <div class="project-image">
            <div class="project-image-screen">
              <img src="assets/autodockerimg.png" alt="Docker CLI Image" />
            </div>
          </div>
          <div class="project-body">
            <h2>AutoDocker</h2>
            <p>This is a CLI tool made to automatically build out Docker containers and images, for a selected project. It is built using python and it taught me how to interact with a command line, and how to use docker more efficiently.</p>
            <div class="tags">
              <span class="tag">Docker</span>
              <span class="tag">CLI</span>
              <a href="https://github.com/devinbowler/AutoDocker" target="_blank" class="btn btn-sm btn-outline project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div class="project">
          <div class="project-image">
            <div class="project-image-screen">
              <img src="assets/conceptriximg.png" alt="Conceptrix" />
            </div>
          </div>
          <div class="project-body">
            <h2>Conceptrix</h2>
            <p>This application was built because I wanted a way to visualize hard coding/math concepts easily. This project taught me how to use LLMs better, and also helped with my understanding of micro service architecture.</p>
            <div class="tags">
              <span class="tag">MicroService</span>
              <span class="tag">Manim</span>
              <a href="https://github.com/devinbowler/CodeVisualizer" target="_blank" class="btn btn-sm btn-outline project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div class="project">
          <div class="project-image">
            <div class="project-image-screen">
              <img src="assets/vuldetimg.png" alt="Vulnerability Detection Application" />
            </div>
          </div>
          <div class="project-body">
            <h2>Vulnerability Detection</h2>
            <p>This application was a result of my research work at the University of Houston, where I explored how large language models can be used for detecting vulnerabilities in source code. This project taught me how to conduct research systematically, implement security protocols, and analyze outputs for actionable insights.</p>
            <div class="tags">
              <span class="tag">Research</span>
              <span class="tag">Security</span>
              <a href="https://github.com/devinbowler/VulnerabilityDetection" target="_blank" class="btn btn-sm btn-outline project-link">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
