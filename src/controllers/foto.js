class foto {
  async store(req, res) {
    res.json(req.file); //req.file pega os dados do arquivo enviado
  }
}
export default new foto();
