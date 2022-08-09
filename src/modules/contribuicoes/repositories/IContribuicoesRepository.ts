import Contribuicao from "@modules/contribuicoes/infra/typeorm/entities/Contribuicao";
import IRegistrarContribuicaoDTO from '@modules/contribuicoes/dtos/IRegistrarContribuicaoDTO';

export default interface IContribuicoesRepository {
    findAll(): Promise<Contribuicao[]>;
    findById(usuario_id: string | number): Promise<Contribuicao | undefined>;
    findbyUser(user_id: string): Promise<Contribuicao[]>;
    create(data: IRegistrarContribuicaoDTO): Promise<Contribuicao>;
}
