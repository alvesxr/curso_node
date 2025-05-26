import Aluno from "../models/Aluno";
class home {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "João",
      sobrenome: "Silva",
      email: "joao.silva@example.com",
      idade: 20,
      peso: 70.5,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}
export default new home();
