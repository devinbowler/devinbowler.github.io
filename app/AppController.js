// App Controller to render the app and views.
import { StaticInfo } from '../components/StaticInfo/StaticInfo.js';
import { AboutPage } from '../components/AboutPage/AboutPage.js';
import { ExperiencePage } from '../components/ExperiencePage/ExperiencePage.js';
import { ProjectPage } from '../components/ProjectPage/ProjectPage.js';
import { BlogPage } from '../components/BlogPage/BlogPage.js';
import { Blog1 } from '../components/BlogPage/Posts/Blog1/Blog1.js';
import { Blog2 } from '../components/BlogPage/Posts/Blog2/Blog2.js';
import { Blog2 } from '../components/BlogPage/Posts/Blog3/Blog3.js';


export class AppController {
  #container = null;
  #currentView = null;
  #views = {};

  constructor(){
    this.#views = {
	    staticInfo: new StaticInfo(),
	    aboutPage: new AboutPage(),
	    experiencePage: new ExperiencePage(),
	    projectPage: new ProjectPage(),
	    blogPage: new BlogPage(),
       blog1: new Blog1(),
       blog2: new Blog2(),
	   blog2: new Blog3()
    }

    this.#currentView = this.#views.aboutPage;
}


  render() {
    if(!this.#container){
      this.#container = document.createElement('div');
      this.#container.classList.add('app-controller');
    }

    this.#container.innerHTML = '';
    this.#container.appendChild(this.#views.staticInfo.render());
    this.#container.appendChild(this.#currentView.render());

    return this.#container;
  }
  
  navigate(viewName){
    if(!this.#views[viewName]){
      throw new Error(`No view exists for "${viewName}".`);
    }
    console.log(`Navigating to: ${viewName}`); // Debug log
    this.#currentView = this.#views[viewName];
    this.render();
  }


   static getInstance() {
      if (!AppController.instance) {
         AppController.instance = new AppController;
      }
      return AppController.instance;
   }
}
