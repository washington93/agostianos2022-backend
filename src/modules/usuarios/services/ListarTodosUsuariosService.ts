import { injectable, inject } from "tsyringe";

import IUsuariosRepository from "@modules/usuarios/repositories/IUsuariosRepository";

@injectable()
class CadastrarUsuarioService {
    constructor(
        @inject("UsuariosRepository")
        private usuariosRepository: IUsuariosRepository
    ) {}

    async execute(): Promise<any> {
        const result = await this.usuariosRepository.findAll();
        const resp = result.map((item) => {
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
            };
        });

        return resp;
    }
}

export default CadastrarUsuarioService;
