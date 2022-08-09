import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("contribuicoes")
class Contribuicao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valor: number;

    @Column({ name: "usuario_id" })
    usuarioId: number;

    @Column({ name: "responsavel_id" })
    responsavelId: number;

    @Column({ name: "forma_pagamento" })
    formaPagamento: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}

export default Contribuicao;