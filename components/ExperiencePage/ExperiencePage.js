import { BaseComponent } from "../../app/BaseComponent.js";

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
      <div class="page-header">
        <h1>Research and engineering experience across academia and industry.</h1>
      </div>

      <div class="section-divider"><span>Experience</span></div>

      <div class="experience" data-aos="fade-up">
        <h2 class="role-title">Founding Engineer</h2>
        <div class="company-info">
          <span class="company-name">Synaptix · Austin, TX</span>
          <span class="date-range">May 2025 – Present</span>
        </div>
        <div class="divider"></div>
        <ul class="achievements">
          <li>Built and led development of a healthcare-focused medical translation and clinical documentation platform, delivering a full working demo presented to physicians and legal professionals</li>
          <li>Designed and implemented a full-stack web application that combines real-time medical translation with automated clinical note generation, charting, and discharge summaries</li>
          <li>Developed backend services and APIs to support secure data flow and model inference, while collaborating with clinicians to refine workflows for real-world clinical use and future EHR integration</li>
          <li>Contributed to early-stage fundraising efforts, helping raise $75K+ in funding, and worked as a contracted engineer on the startup's core product</li>
        </ul>
        <div class="tags">
          <span class="tag">Full-Stack</span>
          <span class="tag">Healthcare</span>
          <span class="tag">APIs</span>
        </div>
      </div>

      <div class="experience" data-aos="fade-up">
        <h2 class="role-title">Applied Research Engineer</h2>
        <div class="company-info">
          <span class="company-name">Texas State University</span>
          <span class="date-range">May 2025 – August 2025</span>
        </div>
        <div class="divider"></div>
        <ul class="achievements">
          <li>First author of an accepted conference paper, "Simulation-Based Smart Home Architecture for Autism Support Using CSI-Based Movement Detection," leading research design and writing efforts with a five-member team</li>
          <li>Simulated a Unity apartment that ray-traces Wi-Fi propagation to synthesize CSI data, then built a CNN-BiLSTM pipeline and FastAPI + MQTT service for real-time behavioral classification and smart-home actuation</li>
          <li>Produced 450k+ labeled samples and achieved 83.6% multi-class accuracy, demonstrating privacy-preserving detection of simulated movement with sub-second end-to-end latency</li>
        </ul>
        <div class="tags">
          <span class="tag">Research</span>
          <span class="tag">Unity</span>
          <span class="tag">FastAPI</span>
        </div>
      </div>
      
      <div class="experience" data-aos="fade-up">
        <h2 class="role-title">Research Intern</h2>
        <div class="company-info">
          <span class="company-name">University of Houston</span>
          <span class="date-range">May 2023 – August 2023</span>
        </div>
        <div class="divider"></div>
        <ul class="achievements">
          <li>Led a research project focused on integrating and optimizing Large Language Models to elevate code security analysis, achieving significant improvements in vulnerability detection</li>
          <li>Explored various open-source models, including Gemma, LLaMA, RoBERTa, and Phi, applying a sentiment analysis approach to assess generative model outputs, ultimately selecting RoBERTa for its superior classification performance in detecting vulnerable code</li>
          <li>Fine-tuned a RoBERTa model for binary vulnerability classification, achieving 96% accuracy and 0.91 F1 score, demonstrating clear improvements over base prompting approaches</li>
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
