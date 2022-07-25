import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import AuthController from "@modules/auth/infra/controllers/AuthController";

const authRouter = Router();
const authController = new AuthController();

authRouter.post("", authController.login);

export default authRouter;
