import { Request, Response } from "express";
import { container } from "tsyringe";
import { getCustomRepository } from "typeorm";

import CadastrarUsuarioService from "@modules/usuarios/services/CadastrarUsuarioService";
import ListarTodosUsuariosService from "@modules/usuarios/services/ListarTodosUsuariosService";
import AtivarDesativarUsuarioService from "@modules/usuarios/services/AtivarDesativarUsuarioService";
import ModoAdminService from "@modules/usuarios/services/ModoAdminService";

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

    public async ativarDesativarUsuario(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { usuario_id, ativo } = request.body;
        const ativarDesativarUsuarioService = container.resolve(
            AtivarDesativarUsuarioService
        );

        const result = await ativarDesativarUsuarioService.execute({
            usuario_id,
            ativo: ativo == true,
        });

        return response.json(result);
    }

    public async modoAdmin(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { usuario_id, admin } = request.body;
        const modoAdminService = container.resolve(
            ModoAdminService
        );

        const result = await modoAdminService.execute({
            usuario_id,
            admin: admin == true,
        });

        return response.json(result);
    }
}
