import { injectable, inject } from "tsyringe";


import IContribuicoesRepository from "@modules/contribuicoes/repositories/IContribuicoesRepository";

import AppError from "@shared/errors/AppError";

@injectable()
class AtivarDesativarUsuarioService {
    constructor(
        @inject("ContribuicoesRepository")
        private contribuicoesRepository: IContribuicoesRepository
    ) {}

    async execute(usuario_id:string | number): Promise<any> {
        
        const result = await this.contribuicoesRepository.findbyUser(
            usuario_id
        );

        return result;
    }
}

export default AtivarDesativarUsuarioService;
