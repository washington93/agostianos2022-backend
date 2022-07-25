import { Router } from "express";
import usuariosRouter from "@modules/usuarios/infra/http/routes/usuarios.routes";
import authRouter from "@modules/auth/infra/http/routes/auth.routes";

const routes = Router();

routes.use("/usuarios", usuariosRouter);
routes.use("/autenticacao", authRouter);

export default routes;