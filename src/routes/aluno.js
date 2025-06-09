import { Router } from "express";
import aluno from "../controllers/aluno";

const router = new Router();

router.get("/", aluno.index);

export default router;
