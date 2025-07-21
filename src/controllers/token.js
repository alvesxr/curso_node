import User from "../models/User.js";
import jwt from "jsonwebtoken";

class TokenController {
  async store(req, res) {
    const { email = "", password = "" } = req.body;

    if (!email || !password) {
      return res.status(401).json({ erros: ["Credenciais inválidas"] });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ erros: ["Usuário não encontrado"] });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({ erros: ["Senha inválida"] });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,

      {
        expiresIn: process.env.JWT_EXPIRATION || "2d",
      }
    );

    return (
      res.json({ token, user: { nome: user.nome, id: user.id, email: user.email } }),
      console.log("JWT_SECRET NO TOKEN:", process.env.JWT_SECRET)
    );
  }
}

export default new TokenController();
