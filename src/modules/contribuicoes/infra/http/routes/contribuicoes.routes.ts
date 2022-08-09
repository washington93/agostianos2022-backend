import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import ensureAuthenticated from "@modules/usuarios/infra/http/middlewares/ensureAuthenticated";
import ensureAdminAuthenticated from "@modules/usuarios/infra/http/middlewares/ensureAdminAuthenticated";

import ContribuicoesController from "@modules/contribuicoes/infra/controllers/ContribuicoesController";

const contribuicoesRouter = Router();
const contribuicoesController = new ContribuicoesController();

contribuicoesRouter.get(
    "",
    ensureAdminAuthenticated,
    contribuicoesController.listarContribuicoes
);

export default contribuicoesRouter;
