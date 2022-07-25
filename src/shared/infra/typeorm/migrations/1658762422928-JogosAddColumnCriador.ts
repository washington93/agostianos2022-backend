import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class JogosAddColumnCriador1658762422928 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("jogos", new TableColumn({
            name: "criador_id",
            type: "int",
            isNullable: true,
        }));

        await queryRunner.createForeignKey("jogos", new TableForeignKey({
            name: "jogos_criador_id_foreign",
            columnNames: ["criador_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "usuarios",
            onDelete: "SET NULL",
            onUpdate: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("jogos", "jogos_criador_id_foreign");
        await queryRunner.dropColumn("jogos", "criador_id");
    }

}
