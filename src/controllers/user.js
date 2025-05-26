import User from "../models/User.js";
class UserController {
  async index(req, res) {
    const novoUser = await User.create({
      nome: "João",
      email: "joao.silva@example.com",
      password: "123456",
    });
    res.json(novoUser);
  }
}
export default new UserController();
