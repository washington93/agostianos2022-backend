import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateScore1658696041033 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "scores",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "pontos",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "usuario_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "responsavel_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "jogo_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timeStamp",
                        default: "now()",
                    },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "scores",
            new TableForeignKey({
                name: "jogos_jogo_id_foreign",
                columnNames: ["jogo_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "jogos",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            "scores",
            new TableForeignKey({
                name: "usuarios_usuario_id_foreign",
                columnNames: ["usuario_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "usuarios",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            "scores",
            new TableForeignKey({
                name: "usuarios_responsavel_id_foreign",
                columnNames: ["responsavel_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "usuarios",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("scores", "usuarios_responsavel_id_foreign");
        await queryRunner.dropForeignKey("scores", "usuarios_usuario_id_foreign");
        await queryRunner.dropForeignKey("scores", "jogos_jogo_id_foreign");
        await queryRunner.dropTable("scores");
    }
}
