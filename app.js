import { AppController } from './app/AppController.js';

const AppContainer = document.getElementById("app");

const AppController = AppController.getInstance();

AppContainer.appendChild(AppController.render());
