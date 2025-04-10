import { Router } from "express";
import { login, signUp } from "../controllers/AuthController.js";

const authRoutes = Router();

authRoutes.post("/signup", signUp);
authRoutes.post("/login", login);
authRoutes.get('/user-info', getUserInfo);

export default authRoutes;
