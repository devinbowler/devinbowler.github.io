import { BaseComponent } from "../../app/BaseComponent.js";
import { AppController } from "../../app/AppController.js";

const EMAIL = "devinbowler@gmail.com";

export class StaticInfo extends BaseComponent {
  #container = null;
  #activeTab = "aboutPage";

  constructor() {
    super();
    this.loadCSS("StaticInfo");
    this.render();
    this.#setupLayout();
  }

  render() {
    if (!this.#container) {
      this.#container = document.createElement("div");
      this.#container.classList.add("site-shell");
    }
    return this.#container;
  }

  getContentMount() {
    return this.#container.querySelector(".site-main");
  }

  setActiveTab(viewName) {
    this.#activeTab = viewName;
    const navTarget = viewName.startsWith("blog") ? "blogPage" : viewName;
    const tabs = this.#container?.querySelectorAll(".nav-tab");
    tabs?.forEach((tab) => {
      tab.classList.toggle(
        "active",
        tab.getAttribute("data-target") === navTarget
      );
    });
  }

  #setupLayout() {
    this.#container.innerHTML = `
      <div class="site-frame">
        <header class="site-header">
          <div class="header-top">
            <div class="header-left">
              <span class="header-email">${EMAIL}</span>
              <button class="btn btn-sm btn-outline copy-btn" type="button">Copy</button>
              <a href="assets/Devin_Bowler_Resume.pdf" class="btn btn-sm btn-outline" target="_blank">CV</a>
            </div>
            <div class="header-social">
              <a href="https://www.linkedin.com/in/devin-bowler-369616219/" target="_blank">LinkedIn</a>
              <span class="slash">/</span>
              <a href="https://github.com/devinbowler" target="_blank">GitHub</a>
              <span class="slash">/</span>
              <a href="https://www.youtube.com/@DevinTheDeveloperYT/videos" target="_blank">YouTube</a>
            </div>
          </div>

          <nav class="site-nav">
            <a data-target="aboutPage" class="nav-tab active">About</a>
            <a data-target="experiencePage" class="nav-tab">Experience</a>
            <a data-target="projectPage" class="nav-tab">Projects</a>
            <a data-target="blogPage" class="nav-tab">Blog</a>
          </nav>
        </header>

        <main class="site-main"></main>

        <footer class="site-footer">
          <div class="footer-card">
            <div class="footer-icon">✦</div>
            <h2>Reach out to me</h2>
            <div class="footer-actions">
              <a href="mailto:${EMAIL}" class="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/devin-bowler-369616219/" class="btn btn-outline" target="_blank">LinkedIn</a>
            </div>
            <div class="footer-bottom">
              <span>© ${new Date().getFullYear()} Devin Bowler. All rights reserved.</span>
              <div class="footer-social">
                <a href="https://www.linkedin.com/in/devin-bowler-369616219/" target="_blank">LinkedIn</a>
                <span class="slash">/</span>
                <a href="https://github.com/devinbowler" target="_blank">GitHub</a>
                <span class="slash">/</span>
                <a href="https://www.youtube.com/@DevinTheDeveloperYT/videos" target="_blank">YouTube</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    `;

    this.#addTabClickListeners();
    this.#addCopyEmailListener();
  }

  #addCopyEmailListener() {
    const copyBtn = this.#container.querySelector(".copy-btn");
    copyBtn?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(EMAIL);
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
          copyBtn.textContent = "Copy";
        }, 2000);
      } catch {
        copyBtn.textContent = "Failed";
        setTimeout(() => {
          copyBtn.textContent = "Copy";
        }, 2000);
      }
    });
  }

  #addTabClickListeners() {
    const tabs = this.#container.querySelectorAll(".nav-tab");

    tabs.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        event.preventDefault();
        const appController = AppController.getInstance();
        const target = event.currentTarget.getAttribute("data-target");
        appController.navigate(target);
      });
    });
  }
}
