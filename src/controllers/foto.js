import multer from "multer";
import multerConfig from "../config/multer";
const upload = multer(multerConfig).single('foto');
class foto {
  async store(req, res) {
    return upload (req, res, (err) => {
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
      return res.json(req.file);
    });
  }
}
export default new foto();
