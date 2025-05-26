//importaçÕes

import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './src/routes/home';
class App {
  constructor(){
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.routes();
  }

  middlewares(){
    // Middleware para passar o json
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  routes(){
    this.app.use(router);
  }
}

 export default new App().app;
