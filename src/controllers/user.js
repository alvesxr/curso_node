import User from "../models/User.js";

class UserController {
  async store(req, res) {
    try {
      console.log("Headers:", req.headers);
      console.log("Dados recebidos:", req.body);

      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "Corpo da requisição vazio" });
      }

      const novoUser = await User.create(req.body);
      return res.status(201).json(novoUser);
    } catch (e) {
      console.error("Erro detalhado:", e);
      if (e.errors) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

export default new UserController();
