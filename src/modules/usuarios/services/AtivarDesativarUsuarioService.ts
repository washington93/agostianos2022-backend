import { injectable, inject } from "tsyringe";
import { hash } from 'bcryptjs';

import IUsuariosRepository from "@modules/usuarios/repositories/IUsuariosRepository";
import ICadastrarUsuarioDTO from "@modules/usuarios/dtos/ICadastrarUsuarioDTO";

import AppError from "@shared/errors/AppError";

@injectable()
class AtivarDesativarUsuarioService {
    constructor(
        @inject("UsuariosRepository")
        private usuariosRepository: IUsuariosRepository
    ) {}

    async execute(data:{usuario_id:string | number, ativo: boolean}): Promise<any> {
        // TODO - checar se usuario ja existe
        const result = await this.usuariosRepository.findById(
            data.usuario_id
        );

        if (result.length === 0) {
            throw new AppError("Usuario não existe", 404);
        }

        const _usuario = result[0];
        _usuario.ativo = data.ativo;
        
        const resp = await this.usuariosRepository.updateUsuario(
            _usuario
        );

        return resp;
    }
}

export default AtivarDesativarUsuarioService;
