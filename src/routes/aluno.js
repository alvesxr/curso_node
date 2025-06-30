import { Router } from "express";
import aluno from "../controllers/aluno";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

router.get("/", aluno.index);

router.post("/", loginRequired, aluno.store);

router.put("/:id", aluno.update);

router.delete("/:id", loginRequired, aluno.delete);

router.get("/:id", loginRequired, aluno.show);



export default router;
