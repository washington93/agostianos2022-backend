import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("usuarios")
class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({ name: "primeiro_nome" })
    primeiroNome: string;

    @Column()
    senha?: string;

    @Column()
    admin: boolean;

    @Column()
    ativo: boolean;

    @Column()
    email?: string;

    @Column()
    telefone?: string;

    @Column()
    sobre?: string;

    @Column()
    avatar?: string;

    @Column()
    moldura?: string;

    @Column()
    pontuacao?: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Usuario;
