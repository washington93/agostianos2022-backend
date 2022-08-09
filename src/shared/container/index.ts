import { container } from "tsyringe";

import "@shared/container/providers";

import IUsuariosRepository from "@modules/usuarios/repositories/IUsuariosRepository";
import UsuariosRepository from "@modules/usuarios/infra/typeorm/repositories/UsuariosRepository";
import IContribuicoesRepository from "@modules/contribuicoes/repositories/IContribuicoesRepository";
import ContribuicoesRepository from "@modules/contribuicoes/infra/typeorm/repositories/ContribuicoesRepository";


container.registerSingleton<IUsuariosRepository>(
    "UsuariosRepository",
    UsuariosRepository
);

container.registerSingleton<IContribuicoesRepository>(
    "contribuicoesRepository",
    ContribuicoesRepository
);
