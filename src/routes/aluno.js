import { Router } from "express";
import aluno from "../controllers/aluno";

const router = new Router();

router.get("/", aluno.index);

router.post("/", aluno.store);

router.put("/", aluno.update);

router.delete("/", aluno.delete);

router.get("/", aluno.show);



export default router;
