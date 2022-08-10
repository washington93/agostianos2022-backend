import Contribuicao from "@modules/contribuicoes/infra/typeorm/entities/Contribuicao";
import IRegistrarContribuicaoDTO from '@modules/contribuicoes/dtos/IRegistrarContribuicaoDTO';

export default interface IContribuicoesRepository {
    findAll(): Promise<Contribuicao[]>;
    findById(usuarioId: string | number): Promise<Contribuicao | undefined>;
    findbyUser(usuarioId: string | number): Promise<Contribuicao[]>;
    create(data: IRegistrarContribuicaoDTO): Promise<Contribuicao>;
}
