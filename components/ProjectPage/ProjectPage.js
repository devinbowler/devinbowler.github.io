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
        <img src="../../assets/vulsite.png" alt="Vulnerability Detection Application" />
        <h2>Vulnerability Detection</h2>
        <p>This application was a result of my research work at the University of Houston, where I explored how large language models can be used for detecting vulnerabilities in source code. This project taught me how to conduct research systematically, implement security protocols, and analyze outputs for actionable insights.</p>
        <div class="tags">
          <span class="tag">Research</span>
          <span class="tag">Security</span>
          <button class="button github-button">GitHub</button>
        </div>
      </div>
      <div class="project">
        <img src="../../assets/quibly.png" alt="Quibly Project" />
        <h2>Quibly</h2>
        <p>Quibly is a full-stack task management app built with the MERN stack. This project provided deep experience in responsive front-end design, seamless API integration, and deploying scalable web applications. It also introduced me to the nuances of hosting and managing live services.</p>
        <div class="tags">
          <span class="tag">MERN</span>
          <span class="tag">Responsive Design</span>
          <button class="button github-button">GitHub</button>
        </div>
      </div>
      <div class="project">
        <img src="../../assets/sftp.png" alt="SFTP Server Project" />
        <h2>SFTP Server</h2>
        <p>This is a networking and security-focused project leveraging Scapy, OpenSSH, SQL, and tcpdump to build an efficient and secure SFTP server. It taught me how to handle low-level network protocols, debug server-side configurations, and analyze packet data for performance tuning.</p>
        <div class="tags">
          <span class="tag">Networking</span>
          <span class="tag">Security</span>
          <button href="" target="_blank" class="button github-button">GitHub</button>
        </div>
      </div>
      <div class="project">
        <img src="../../assets/aquatica.png" alt="Aquatica Project" />
        <h2>Aquatica</h2>
        <p>Aquatica is an e-commerce web application that I developed during my Web Programming class. This project focused on modular front-end design principles using modern frameworks and a robust SQLite backend. It taught me how to architect scalable applications and efficiently manage data storage.</p>
        <div class="tags">
          <span class="tag">Modular Design</span>
          <span class="tag">SQLite</span>
          <button class="button github-button">GitHub</button>
        </div>
      </div>

    `;
}
  
}

