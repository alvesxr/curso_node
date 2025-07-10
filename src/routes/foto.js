import { Router } from "express";

import foto from "../controllers/foto";

const router = new Router();

router.post("/", foto.store);

export default router;
