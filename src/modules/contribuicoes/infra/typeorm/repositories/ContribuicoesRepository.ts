import { EntityRepository, getRepository, Repository } from "typeorm";

import Contribuicao from "@modules/contribuicoes/infra/typeorm/entities/Contribuicao";
import IRegistrarContribuicaoDTO from "@modules/contribuicoes/dtos/IRegistrarContribuicaoDTO";
import IContribuicoesRepository from "@modules/contribuicoes/repositories/IContribuicoesRepository";

@EntityRepository(Contribuicao)
class ContribuicoesRepository implements IContribuicoesRepository {
    private ormRepository: Repository<Contribuicao>;

    constructor() {
        this.ormRepository = getRepository(Contribuicao);
    }

    async findAll(): Promise<Contribuicao[]> {
        const result = await this.ormRepository.find();
        return result;
    }

    findById(usuario_id: string | number): Promise<Contribuicao | undefined> {
        throw new Error("Method not implemented.");
    }

    findbyUser(user_id: string): Promise<Contribuicao[]> {
        throw new Error("Method not implemented.");
    }
    
    create(data: IRegistrarContribuicaoDTO): Promise<Contribuicao> {
        throw new Error("Method not implemented.");
    }
}

export default ContribuicoesRepository;
