import { Router } from "express";
import user from "../controllers/user.js";

import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();
//nao deveria existir
/*
router.get("/", loginRequired, user.index);
router.get("/:id", user.show);
*/

router.post("/", loginRequired, user.store);
router.put("/", loginRequired, user.update);
router.delete("/", loginRequired, user.delete);

export default router;

/*
index - lista todos os usuários - GET
store - cria um novo usuário - POST
show - exibe um usuário específico - GET
update - atualiza um usuário específico - PUT ou PATCH
destroy - remove um usuário específico - DELETE
delete - deleta um usuário específico - DELETE
*/
