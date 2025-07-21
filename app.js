import dotenv from "dotenv";
import {resolve} from "path";
dotenv.config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./src/routes/home";
import user from "./src/routes/user";
import token from "./src/routes/token";
import aluno from "./src/routes/aluno";
import foto from "./src/routes/foto";
import "./src/database/index.js";

const allowedOrigins = ['http://localhost:3000', 'https://seu-dominio.com'];

class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
    }));
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }

  routes() {
    this.app.use("/", router);
    this.app.use("/users/", user);
    this.app.use("/tokens/", token);
    this.app.use("/alunos", aluno);
    this.app.use("/fotos", foto);
  }
}

export default new App().app;
