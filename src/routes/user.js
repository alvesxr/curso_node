import { Router } from "express";
import user from "../controllers/user.js";

const router = new Router();

router.post("/", user.store);
router.get("/", user.index);
router.get("/:id", user.show);
router.put("/:id", user.update);
router.delete("/:id", user.delete);

export default router;

/*
index - lista todos os usuários - GET
store - cria um novo usuário - POST
show - exibe um usuário específico - GET
update - atualiza um usuário específico - PUT ou PATCH
destroy - remove um usuário específico - DELETE
delete - deleta um usuário específico - DELETE
*/
