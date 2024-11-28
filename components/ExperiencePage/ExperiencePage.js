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

        <h2>Undergraduate Machine Learning Researcher</h2>
        <div class="company-date">
            <h3>University of Houston</h3> | <p>May 2024 - August 2024</p>
        </div>
        <ul>
          <li>Led a research project focused on integrating and optimizing Large Language Models to elevate code security analysis, achieving significant improvements in vulnerability detection.</li>
          <li>Explored various models, including Gemma, LLaMA, RoBERTa, and Phi, applying a sentiment analysis approach to assess generative model outputs, ultimately selecting RoBERTa for its superior classification performance in detecting vulnerable code.</li>
          <li>Fine-tuned a RoBERTa model for binary vulnerability classification to enhance the precision of identifying and categorizing code vulnerabilities. Utilized the model's prediction to find specific vulnerability details using a generative language model.</li>
        </ul>
        <div class="tags">
          <span class="tag">Machine Learning</span>
          <span class="tag">Python</span>
          <span class="tag">Security</span>
        </div>
      </div>
      <div class="experience">

        <h2>Undergraduate Research Student</h2>
        <div class="company-date">
            <h3>UMASS Amherst CICS Department</h3> | <p>June 2023 - August 2023</p>
        </div>
        <ul>
          <li>Focused on novel view synthesis (NVS) and video inpainting for an AR project, leveraging Instant NeRF to rapidly create 3D scene reconstructions from low-resolution video inputs.</li>
          <li>Used Instant Neural Graphics Primitives (NGP) to generate a fully masked 3D render from a 13-second iPhone video.</li>
        </ul>
        <div class="tags">
          <span class="tag">Augmented Reality</span>
          <span class="tag">3D Rendering</span>
          <span class="tag">Video Processing</span>
        </div>
      </div>
      <div class="experience">

        <h2>Computer Science Tutor</h2>
        <div class="company-date">
            <h3>Academic Success Center at Mount Wachusett</h3> | <p>August 2022 - June 2023</p>
        </div>


        <ul>
            <li>Worked with different types (different majors and paths) of students where I had to adapt my understanding to aid in non-familiar CS topics & learned new stuff to help in areas I am not proficient in, ex) database & data visualizations.</li>
            <li>Created an in-person, remote, asynchronous environment for students to understand advanced course materials anywhere, at their own pace.</li>
        </ul>
        <div class="tags">
          <span class="tag">Communication</span>
          <span class="tag">Teaching</span>
          <span class="tag">Patience</span>
        </div>
      </div>

   `;
  }
}
