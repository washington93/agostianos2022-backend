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

    async delete(contribuicao_id: string | number): Promise<Contribuicao> {
        const contribuicao = await this.ormRepository.findOne(contribuicao_id);
        if (!contribuicao) {
            throw new Error("Contribuicao não encontrada");
        }
        await this.ormRepository.remove(contribuicao);
        return contribuicao;

    }

    async findAll(): Promise<Contribuicao[]> {
        const result = await this.ormRepository.find();
        return result;
    }

    findById(usuario_id: string | number): Promise<Contribuicao | undefined> {
        throw new Error("Method not implemented.");
    }

    async findbyUser(usuarioId: string): Promise<Contribuicao[]> {
        const result = await this.ormRepository.find({
            where: {usuarioId : usuarioId },
        });
        return result;
    }
    
    async create(data: IRegistrarContribuicaoDTO): Promise<Contribuicao> {
        const contribuicaoCreated = this.ormRepository.create(data);
        const newContribuicao = await this.ormRepository.save(contribuicaoCreated);
        return newContribuicao;
    }
}

export default ContribuicoesRepository;
