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
    this.#addInteractivity();
    
    return this.#container;
  }
  
  #setupContainerContent() {
    this.#container.innerHTML = `
      <div class="page-header">
        <h1>Experience</h1>
        <p>Building innovative solutions through research and development</p>
      </div>
      
      <div class="experience" data-aos="fade-up">
        <h2 class="role-title">Applied Research Engineer</h2>
        <div class="company-info">
          <span class="company-name">Texas State University</span>
          <span class="date-range">May 2025 - August 2025</span>
        </div>
        <div class="divider"></div>
        <ul class="achievements">
          <li>First author of an accepted conference paper, "Simulation-Based Smart Home Architecture for Autism Support Using CSI-Based Movement Detection," leading research design and writing efforts with a five-member team</li>
          <li>Simulated a Unity apartment that ray-traces Wi-Fi propagation to synthesize CSI data, then built a CNN-BiLSTM pipeline and FastAPI + MQTT service for real-time behavioral classification and smart-home actuation</li>
          <li>Produced 450k+ labeled samples and achieved 83.6% multi-class accuracy, demonstrating privacy-preserving detection of simulated movement with sub-second end-to-end latency</li>
        </ul>
        <div class="tags">
          <span class="tag tag-research">Research</span>
          <span class="tag tag-unity">Unity</span>
          <span class="tag tag-fastapi">FastAPI</span>
        </div>
      </div>
      
      <div class="experience" data-aos="fade-up">
        <h2 class="role-title">Research Intern</h2>
        <div class="company-info">
          <span class="company-name">University of Houston</span>
          <span class="date-range">May 2023 - August 2023</span>
        </div>
        <div class="divider"></div>
        <ul class="achievements">
          <li>Led a research project focused on integrating and optimizing Large Language Models to elevate code security analysis, achieving significant improvements in vulnerability detection</li>
          <li>Explored various open-source models, including Gemma, LLaMA, RoBERTa, and Phi, applying a sentiment analysis approach to assess generative model outputs, ultimately selecting RoBERTa for its superior classification performance in detecting vulnerable code</li>
          <li>Fine-tuned a RoBERTa model for binary vulnerability classification, achieving 96% accuracy and 0.91 F1 score, demonstrating clear improvements over base prompting approaches</li>
        </ul>
        <div class="tags">
          <span class="tag tag-ml">Machine Learning</span>
          <span class="tag tag-python">Python</span>
          <span class="tag tag-security">Security</span>
        </div>
      </div>
    `;
  }
  
  #addInteractivity() {
    // Add staggered animation to experiences
    const experiences = this.#container.querySelectorAll('.experience');
    experiences.forEach((exp, index) => {
      exp.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add hover effect to achievements
    const achievements = this.#container.querySelectorAll('.achievements li');
    achievements.forEach(achievement => {
      achievement.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(4px)';
        this.style.transition = 'transform 0.3s ease';
      });
      
      achievement.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
      });
    });
    
    // Add intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    experiences.forEach(exp => observer.observe(exp));
  }
}
