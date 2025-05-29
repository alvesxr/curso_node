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

  //index
  async index(req, res) {
    try {
      const users = await User.findAll({attributes: ['id', 'nome', 'email' ]});
      return res.json(users);
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: "Erro interno do servidor", details: e.message });
    }
  }

  //show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const {id, nome, email} = user;
      return res.json(id, nome, email);
    } catch (e) {
      console.error(e);
      return res.json({ error: "Erro interno do servidor", details: e.message });
    }
  }

  //update
  async update(req, res) {
    try{
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ error: ["Usuário não encontrado"] });

    }


      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      console.error(e);
      return res.json(null);
    }
  }

  //delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ error: ["ID não enviado"] });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: ["Usuário não encontrado"] });
      }

      await user.destroy();
      return res.json(user);
    } catch (e) {
      console.error(e);
      return res.json(null);
    }
  }
}

export default new UserController();
