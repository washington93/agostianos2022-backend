import { Request, Response } from "express";
import { container } from "tsyringe";
import { getCustomRepository } from "typeorm";

import CadastrarUsuarioService from "@modules/usuarios/services/CadastrarUsuarioService";
import ListarTodosUsuariosService from "@modules/usuarios/services/ListarTodosUsuariosService";

export default class UsuariosController {
    public async registrarUsuario(
        request: Request,
        response: Response
    ): Promise<Response> {
        const cadastrarUsuarioService = container.resolve(
            CadastrarUsuarioService
        );

        const { nome, senha, email, telefone, sobre, avatar, moldura } =
            request.body;

        const result = await cadastrarUsuarioService.execute({
            nome,
            senha,
            email,
            telefone,
            sobre,
            avatar,
            moldura,
        });

        return response.json(result);
    }

    public async listarUsuarios(
        request: Request,
        response: Response
    ): Promise<Response> {
        const listarTodosUsuariosService = container.resolve(
            ListarTodosUsuariosService
        );

        const result = await listarTodosUsuariosService.execute();

        return response.json(result);
    }
}
