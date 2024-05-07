import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategory1713526776459 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { // faz
        await queryRunner.createTable(
            new Table(
                {
                    name: "categories",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "name",
                            type: "varchar",
                        },
                        {
                            name: "description",
                            type: "varchar"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ],
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> { // se der erro desfaz
        await queryRunner.dropTable("categories");
    }

}
