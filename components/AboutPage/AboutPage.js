import { BaseComponent } from "../../app/BaseComponent.js";
import { AppController } from "../../app/AppController.js";

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
      <section class="hero">
        <div class="hero-profile">
          <img class="hero-pfp" src="assets/pfp1.jpg" alt="Devin Bowler">
        </div>
        <h1 class="hero-headline">Building software, research, and meaningful digital experiences.</h1>
        <button class="btn btn-primary hero-cta" data-target="projectPage">
          View Projects
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </section>

      <div class="section-divider"><span>About</span></div>

      <div class="about-content">
        <p>I am a new graduate from the University of Massachusetts, with a Bachelor's in Computer Science. I am actively seeking a full-time 2026 position or a summer 2026 internship and am open to opportunities where I can contribute, learn, and grow. My experience spans research at both Texas State University and the University of Houston, where I focused on both machine learning and networking techniques.</p>  
      
        <p>At Texas State University, I collaborated with a peer and three faculty advisors on research exploring smart-home systems for individuals with Autism Spectrum Disorder (ASD). Our task was broad given only the prompt of designing and simulating a supportive environment, so we conducted extensive planning and literature review before pursuing separate detection approaches in Unity-based virtual homes. My partner focused on camera sensing, while I chose a privacy-preserving alternative using Wi-Fi Channel State Information (CSI). Because real-time CSI cannot be directly simulated, I created a custom ray-casting system that launched thousands of rays, modeling reflection, transmission, and absorption across human and environmental materials. By analyzing how human interaction altered ray power over time, I generated hundreds of thousands of synthetic CSI samples to train a machine learning pipeline capable of classifying real-time movements in a single-resident apartment. <strong>This work resulted in an accepted paper at the 2025 IEEE REUNS</strong>, establishing a foundation for non-invasive, ASD-supportive smart-home technologies.</p>
      
        <p>At the University of Houston, I had the privilege of working closely with PhD students and professors in the cybersecurity department. Through regular meetings, we explored a variety of research topics before narrowing down to a project on <strong>vulnerability detection using large language models (LLMs)</strong>. This experience was invaluable in teaching me how to efficiently manage project timelines, <strong>present findings in a clear and concise way</strong>, and <strong>collaboratively refine research goals</strong>. I walked away with a deeper appreciation for the process of tackling complex problems and the importance of communication and adaptability in research environments.</p>  
      
        <p>As for why I am studying computer science, I see technology as a great tool to solve problems and shape the world we live in. Coding, for me, is a bit more than just writing lines of instructions—it's an opportunity to bring any ideas I may have to life. Every challenge in software development is an opportunity for me to grow and refine my skills, and I welcome those moments.</p>  
      
        <p>My journey has been largely driven by a love of the craft and a desire to understand how things work. Whether it's experimenting with a new language or technology, or building something from scratch, I'm always grateful for ways to expand my knowledge.</p>  
      
        <p>I believe the process of creating is as valuable if not more valuable as the end result. Each project offers lessons, and I approach every task with an open mind, embracing challenges and exploring ideas. In this field, I find inspiration in the endless possibilities ahead and the role we can play in shaping the future through thoughtful, meaningful technology.</p>
      </div>
    `;

    const cta = this.#container.querySelector(".hero-cta");
    cta?.addEventListener("click", () => {
      AppController.getInstance().navigate("projectPage");
    });
  }
}
