import Aluno from "../models/Aluno.js";
class aluno {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }
}
export default new aluno();
