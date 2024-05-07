import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity("categories") // define que a classe será uma entidade
class Category {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() { // chamado quando a classe for instanciada
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Category }