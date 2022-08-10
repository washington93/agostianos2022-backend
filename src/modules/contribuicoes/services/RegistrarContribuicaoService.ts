import { injectable, inject } from "tsyringe";

import IContribuicoesRepository from "@modules/contribuicoes/repositories/IContribuicoesRepository";
import IRegistrarContribuicaoDTO from "@modules/contribuicoes/dtos/IRegistrarContribuicaoDTO";

@injectable()
class REgistrartContribuicaoService {
    constructor(
        @inject("ContribuicoesRepository")
        private contribuicoesRepository: IContribuicoesRepository
    ) {}

    async execute(data: IRegistrarContribuicaoDTO): Promise<any> {
        const contribuicao = await this.contribuicoesRepository.create(data);
        return contribuicao;
    }
}

export default REgistrartContribuicaoService;
