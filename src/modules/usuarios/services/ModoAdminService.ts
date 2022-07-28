import { injectable, inject } from "tsyringe";
import { hash } from 'bcryptjs';

import IUsuariosRepository from "@modules/usuarios/repositories/IUsuariosRepository";

import AppError from "@shared/errors/AppError";

@injectable()
class ModoAdminService {
    constructor(
        @inject("UsuariosRepository")
        private usuariosRepository: IUsuariosRepository
    ) {}

    async execute(data:{usuario_id:string | number, admin: boolean}): Promise<any> {
        // TODO - checar se usuario ja existe
        const result = await this.usuariosRepository.findById(
            data.usuario_id
        );

        if (!result) {
            throw new AppError("Usuario não existe", 404);
        }

        const _usuario = result;
        _usuario.admin = data.admin;
        
        const resp = await this.usuariosRepository.updateUsuario(
            _usuario
        );

        return resp;
    }
}

export default ModoAdminService;
