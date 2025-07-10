import { Router } from "express";
import multer from "multer";
import foto from "../controllers/foto";
import multerConfig from "../config/multer";

const upload = multer(multerConfig);

const router = new Router();

router.post("/", upload.single('foto'), foto.store);

export default router;
