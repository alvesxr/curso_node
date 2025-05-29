import dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./src/routes/home";
import user from "./src/routes/user";
import token from "./src/routes/token";
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
    this.app.use("/tokens/", token);
  }
}

export default new App().app;
