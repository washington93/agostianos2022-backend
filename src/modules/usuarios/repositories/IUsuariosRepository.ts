import Usuario from "@modules/usuarios/infra/typeorm/entities/Usuario";

import ICadastrarUsuarioDTO from "@modules/usuarios/dtos/ICadastrarUsuarioDTO";

export default interface IUsuariosRepository {
    findAll(): Promise<Usuario[]>;
    findbyEmail(email:string): Promise<Usuario[]>;
    updatePassword(id:string, password:string): Promise<void>;
    create(data: ICadastrarUsuarioDTO): Promise<Usuario>;
}
