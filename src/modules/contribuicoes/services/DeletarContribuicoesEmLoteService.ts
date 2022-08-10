import { injectable, inject } from "tsyringe";


import Contribuicao from '@modules/contribuicoes/infra/typeorm/entities/Contribuicao';
import IContribuicoesRepository from "@modules/contribuicoes/repositories/IContribuicoesRepository";

import AppError from "@shared/errors/AppError";

@injectable()
class AtivarDesativarUsuarioService {
    constructor(
        @inject("ContribuicoesRepository")
        private contribuicoesRepository: IContribuicoesRepository
    ) {}

    async execute(lista:Contribuicao[]): Promise<any> {
        
        const promises = (lista || []).map(async (contribuicao:Contribuicao) => {
            this.contribuicoesRepository.delete(contribuicao.id);
        });
           
        const result = await Promise.all(promises);

        return result;
    }
}

export default AtivarDesativarUsuarioService;
