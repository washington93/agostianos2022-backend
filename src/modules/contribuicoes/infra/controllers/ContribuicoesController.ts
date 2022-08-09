import { Request, Response } from "express";
import { container } from "tsyringe";

import ListarTodasContribuicoesService from "@modules/contribuicoes/services/ListarTodasContribuicoesService";

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
}
