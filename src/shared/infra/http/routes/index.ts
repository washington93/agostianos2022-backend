import { Router } from "express";

import authRouter from "@modules/auth/infra/http/routes/auth.routes";
import usuariosRouter from "@modules/usuarios/infra/http/routes/usuarios.routes";
import contribuicoesRouter from "@modules/contribuicoes/infra/http/routes/contribuicoes.routes";

const routes = Router();

routes.use("/usuarios", usuariosRouter);
routes.use("/autenticacao", authRouter);
routes.use("/contribuicoes", contribuicoesRouter);

export default routes;
