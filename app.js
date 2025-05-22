import express from 'express';

class App {
  constructor(){
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.routes();
  }

  middlewares(){
    // Middleware para passar o JSON
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  routes(){
    this.app.get('/', (req, res) => {
      res.send('Hello World!');
    });
  }
}

export default new App().app;
