import Usuario from "@modules/usuarios/infra/typeorm/entities/Usuario";

import ICadastrarUsuarioDTO from "@modules/usuarios/dtos/ICadastrarUsuarioDTO";

export default interface IUsuariosRepository {
    findAll(): Promise<Usuario[]>;
    findById(usuario_id: string | number): Promise<Usuario[]>;
    findbyEmail(email: string): Promise<Usuario[]>;
    updateUsuario(usuario: Usuario): Promise<Usuario>;
    updatePassword(id: string, password: string): Promise<void>;
    create(data: ICadastrarUsuarioDTO): Promise<Usuario>;
}
