import { AppController } from './app/AppController.js';

const AppContainer = document.getElementById("app");

const appController = AppController.getInstance();

AppContainer.appendChild(appController.render());
