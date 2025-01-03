import { BaseComponent } from "../../app/BaseComponent.js";
import { AppController } from "../../app/AppController.js";

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
      <div class="project">
        <img src="../../assets/quiblyapp.webp" alt="Quibly Project" />
        <h2>Quibly</h2>
        <p>Quibly is a full-stack task management app built with the MERN stack. This project provided deep experience in responsive front-end design, seamless API integration, and deploying scalable web applications. It also introduced me to the nuances of hosting and managing live services.</p>
        <div class="tags">
          <div>
            <span class="tag">MERN</span>
            <span class="tag">Responsive Design</span>
          </div>
          <a href="https://github.com/devinbowler/Quibly" target="_blank">
        <button class="button github-button">GitHub</button>
          </a>
        </div>
      </div>
      <div class="project">
        <img src="../../assets/autodocker.webp" alt="Dokcer CLI Image" />
        <h2>AutoDocker</h2>
        <p>This is a CLI tool made to automatically build out Docker containers and images, for a selected project. It is built using python and it taught me how to interact with a command line, and how to use docker more efficiently.</p>
        <div class="tags">
          <div>
            <span class="tag">Docker</span>
            <span class="tag">CLI</span>
          </div>
          <a href="https://github.com/devinbowler/AutoDocker" target="_blank">
            <button class="button github-button">GitHub</button>
          </a>
        </div>
      </div>

      <div class="project">
        <img src="../../assets/codevisual.webp" alt="CodeVisualizer" />
        <h2>CodeVisualizer</h2>
        <p>This application was built because I wanted a way to visualize hard coding/math concepts easily. This project taught me how to use LLMs better, and also helped with my understanding of serverless architecture.</p>
        <div class="tags">
        <div>
          <span class="tag">Srverless</span>
          <span class="tag">Manim</span>
        </div>
          <a href="https://github.com/devinbowler/CodeVisualizer" target="_blank">
            <button class="button github-button">GitHub</button>
          </a>
        </div>
      </div>
      <div class="project">
        <img src="../../assets/vuldet.webp" alt="Vulnerability Detection Application" />
        <h2>Vulnerability Detection</h2>
        <p>This application was a result of my research work at the University of Houston, where I explored how large language models can be used for detecting vulnerabilities in source code. This project taught me how to conduct research systematically, implement security protocols, and analyze outputs for actionable insights.</p>
        <div class="tags">
        <div>
          <span class="tag">Research</span>
          <span class="tag">Security</span>
        </div>
          <a href="https://github.com/devinbowler/VulnerabilityDetection" target="_blank">
            <button class="button github-button">GitHub</button>
          </a>
        </div>
      </div>
      <div class="project">
        <img src="../../assets/aquaticaapp.webp" alt="Aquatica Project" />
        <h2>Aquatica</h2>
        <p>Aquatica is an e-commerce web application that I developed during my Web Programming class. This project focused on modular front-end design principles using modern frameworks and a robust SQLite backend. It taught me how to architect scalable applications and efficiently manage data storage.</p>
        <div class="tags">
          <div>
            <span class="tag">Modular Design</span>
            <span class="tag">SQLite</span>
          </div>
          <a href="https://github.com/batterydied/Aquatica" target="_blank">
            <button class="button github-button">GitHub</button>
          </a>
        </div>
      </div>

    `;
}
  
}

