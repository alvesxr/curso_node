import { Router } from "express";
import loginRequired from "../middlewares/loginRequired";

import foto from "../controllers/foto";

const router = new Router();

router.post("/", loginRequired, foto.store);

export default router;
