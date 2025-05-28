import dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./src/routes/home";
import user from "./src/routes/user";
import "./src/database/index.js";

class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Configura os middlewares antes das rotas
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use("/", router);
    this.app.use("/users/", user);
  }
}

export default new App().app;
