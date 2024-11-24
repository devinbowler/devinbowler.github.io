// App Controller to render the app and views.
import { StaticInfo } from '../components/StaticInfo/StaticInfo.js';
import { AboutPage } from '../components/AboutPage/AboutPage.js';
import { ExperiencePage } from '../components/ExperiencePage/ExperiencePage.js';
import { ProjectPage } from '../components/ProjectPage/ProjectPage.js';
import { BlogPage } from '../components/BlogPage/BlogPage.js';


export class AppController() {
  #container = null;
  #currentView = null;
  #view = {};

  constructor(){
    this.#views = {
	staticInfo: new StaticInfo(),
	aboutPage: new AboutPage(),
	// experiencePage: new ExperiencePage(),
	// projectPage: new ProjectPage(),
	// blogPage: new BlogPage()
    }

    this.#currentView = this.#views.aboutPage;
}


render() {
  if(!this.#container){
    this.#container = document.createElement('div');
    this.#container.classList.add('app-controller');
  }

  this.#container.innerHTML = '';
  this.#container.appendChild(this.#currentView.render());

  this.#container.appendChild(this.#staticInfo.render());

  return this.#container;
}
