import { injectable, inject } from "tsyringe";

import IContribuicoesRepository from "@modules/contribuicoes/repositories/IContribuicoesRepository";


@injectable()
class CadastrarUsuarioService {
    constructor(
        @inject("contribuicoesRepository")
        private contribuicoesRepository: IContribuicoesRepository
    ) {}

    async execute(): Promise<any> {
        const result = await this.contribuicoesRepository.findAll();
        return result;
    }
}

export default CadastrarUsuarioService;
