import User from "../models/User";
import jwt from 'jsonwebtoken';
class token {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({erros: ['Credenciais inválidas']});
    }
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ erros: ["Usuário não encontrado"] });
    }
    if (!(await user.passwordIsValid(password))){
      return res.status(401).json({ erros: ["Senha inválida"] });
    }
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.TOKEN_SECRET, {
      expiresIn: '2d',
    });
    return res.json({ token });
  }
}
export default new token();
