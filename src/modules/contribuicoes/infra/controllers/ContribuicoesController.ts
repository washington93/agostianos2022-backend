import { container } from "tsyringe";
import { verify } from "jsonwebtoken";
import { Request, Response } from "express";

import authConfig from "@config/auth";
import RegistrarContribuicaoService from "@modules/contribuicoes/services/RegistrarContribuicaoService";
import ListarTodasContribuicoesService from "@modules/contribuicoes/services/ListarTodasContribuicoesService";
import ListarContribuicoesPorUsuarioIdService from "@modules/contribuicoes/services/ListarContribuicoesPorUsuarioIdService";

export default class UsuariosController {
    public async listarContribuicoes(
        request: Request,
        response: Response
    ): Promise<Response> {
        const listarTodasContribuicoesService = container.resolve(
            ListarTodasContribuicoesService
        );

        const result = await listarTodasContribuicoesService.execute();

        return response.json(result);
    }

    public async listarContribuicoesPorUsuarioID(
        request: Request,
        response: Response
    ): Promise<Response> {
        const usuarioId = request.params.usuarioId;

        const listarContribuicoesPorUsuarioIdService = container.resolve(
            ListarContribuicoesPorUsuarioIdService
        );

        const result = await listarContribuicoesPorUsuarioIdService.execute(
            usuarioId
        );

        return response.json(result);
    }

    public async registrarContribuicao(
        request: Request,
        response: Response
    ): Promise<Response> {
        const authHeader = request.headers.authorization || "";
        const [, token] = authHeader.split(" ");
        const decoded: any = verify(token, authConfig.jwt.secret);

        const registrarContribuicaoService = container.resolve(
            RegistrarContribuicaoService
        );

        const result = await registrarContribuicaoService.execute({
            valor: request.body.valor,
            formaPagamento: request.body.formaPagamento,
            responsavelId: decoded.id,
            usuarioId: request.body.usuarioId,
        });

        return response.json(result);
    }
}
