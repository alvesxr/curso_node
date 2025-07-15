import multer from "multer";
import multerConfig from "../config/multer";
import Foto from "../models/Foto";


const upload = multer(multerConfig).single('foto');
class foto {
   store(req, res) {
    return upload (req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      if (!req.file) {
        return res.status(400).json({
          errors: ["Faltando arquivo"],
        });
      }
      try{
          const { originalname: original_name, filename } = req.file;
          const { aluno_id } = req.body;
          const foto = await Foto.create({
            original_name,
            filename,
            aluno_id,
          });

          return res.json(foto);
      // eslint-disable-next-line no-unused-vars
      }catch (e){
        return res.status(400).json({
          errors: ['Aluno não existe ou não foi informado corretamente'],
        })
      }

    });
  }
}
export default new foto();
