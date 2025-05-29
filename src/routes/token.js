import { Router } from "express";
import token from "../controllers/token.js";

const router = new Router();

router.post("/", token.store);

export default router;
