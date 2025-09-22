import { BaseComponent } from "../../app/BaseComponent.js";
import { AppController } from "../../app/AppController.js";

export class ExperiencePage extends BaseComponent {
  #container = null;

  constructor() {
    super();
    this.loadCSS("ExperiencePage");
  }

  render() {
    if (this.#container) {
      return this.#container;
    }

    this.#container = document.createElement("div");
    this.#container.classList.add("experience-container");
    this.#setupContainerContent();

    return this.#container;
  }

  #setupContainerContent() {
    this.#container.innerHTML = `
      <div class="experience">

        <h2>Applied Research Engineer</h2>
        <div class="company-date">
            <h3>Texas State University </h3> | <p>May 2025 - August 2025</p>
        </div>
        <hr>
        <ul>
          <li>First author of an accepted conference paper, “Simulation-Based Smart Home Architecture for Autism Support Using CSI-Based Movement Detection,” leading research design and writing efforts with a five-member team</li>
          <li>Simulated a Unity apartment that ray-traces Wi-Fi propagation to synthesize CSI data, then built a CNN-BiLSTM pipeline and FastAPI + MQTT service for real-time behavioral classification and smart-home actuation.</li>
          <li>Produced 450k+ labeled samples and achieved 83.6% multi-class accuracy, demonstrating privacy-preserving detection of simulated movement with sub-second end-to-end latency</li>
        </ul>
        <div class="tags">
          <span class="tag">Research</span>
          <span class="tag">Unity</span>
          <span class="tag">FastAPI</span>
        </div>
      </div>
      <div class="experience">

        <h2>Research Intern</h2>
        <div class="company-date">
            <h3>University of Houston</h3> | <p>May 2023 - August 2023</p>
        </div>
        <hr>
        <ul>
          <li>Led a research project focused on integrating and optimizing Large Language Models to elevate code security analysis, achieving significant improvements in vulnerability detection.</li>
          <li>Explored various open-source models, including Gemma, LLaMA, RoBERTa, and Phi, applying a sentiment analysis approach to assess generative model outputs, ultimately selecting RoBERTa for its superior classification performance in detecting vulnerable code.</li>
          <li>Fine-tuned a RoBERTa model for binary vulnerability classification, achieving 96% accuracy and 0.91 F1 score, demonstrating clear improvements over base prompting approaches.</li>
        </ul>
        <div class="tags">
          <span class="tag">Machine Learning</span>
          <span class="tag">Python</span>
          <span class="tag">Security</span>
        </div>
      </div>


   `;
  }
}
