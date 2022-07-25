import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import ensureAuthenticated from "@modules/usuarios/infra/http/middlewares/ensureAuthenticated";
import ensureAdminAuthenticated from "@modules/usuarios/infra/http/middlewares/ensureAdminAuthenticated";

import UsuariosController from "@modules/usuarios/infra/controllers/UsuariosController";

const usuariosRouter = Router();
const usuariosController = new UsuariosController();

usuariosRouter.get(
    "",
    ensureAdminAuthenticated,
    usuariosController.listarUsuarios
);

usuariosRouter.post(
    "/ativar_desativar",
    ensureAdminAuthenticated,
    usuariosController.ativarDesativarUsuario
);

usuariosRouter.post("", usuariosController.registrarUsuario);

export default usuariosRouter;
