import User from "../models/User.js";
class UserController {
  async store(req, res) {
    try{
      const novoUser = await User.create({
        nome: "João",
        email: "joao6.silva@example.com",
        password: "123456",
      });
      res.json(novoUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(err => err.message) });
    }

  }
}
export default new UserController();
