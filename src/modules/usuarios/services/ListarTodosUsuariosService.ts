import { injectable, inject, container } from "tsyringe";

import IUsuariosRepository from "@modules/usuarios/repositories/IUsuariosRepository";
import Contribuicao from "@modules/contribuicoes/infra/typeorm/entities/Contribuicao";
import ListarContribuicoesPorUsuarioIdService from "@modules/contribuicoes/services/ListarContribuicoesPorUsuarioIdService";

@injectable()
class CadastrarUsuarioService {
    constructor(
        @inject("UsuariosRepository")
        private usuariosRepository: IUsuariosRepository
    ) {}

    async execute(): Promise<any> {
        const result = await this.usuariosRepository.findAll();

        const listarContribuicoesPorUsuarioIdService = container.resolve(
            ListarContribuicoesPorUsuarioIdService
        );

        const promises = result.map(async (item) => {
            const contribuicoes =
                await listarContribuicoesPorUsuarioIdService.execute(item.id);
            const totalPago = contribuicoes.reduce(
                (accumulator: number, currentValue: Contribuicao) =>
                    accumulator + +currentValue.valor,
                0
            );

            return {
                id: item.id,
                nome: item.nome,
                email: item.email,
                admin: item.admin,
                primeiroNome: item.primeiroNome,
                telefone: item.telefone,
                avatar: item.avatar,
                ativo: item.ativo,
                sobre: item.sobre,
                moldura: item.moldura,
                pontuacao: item.pontuacao,
                totalPago: totalPago,
                contribuicoes,
            };
        });

        const resp = await Promise.all(promises);
        return resp;
    }
}

export default CadastrarUsuarioService;
