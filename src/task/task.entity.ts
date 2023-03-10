import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('task')
export class Task extends BaseEntity{
    @PrimaryGeneratedColumn({
        comment:'task identifier',
    })
    id:BigInt;

    @Column({
        type:'varchar',
    })
    title: string;

    @Column({
        type:'varchar',
    })
    description: string;
    
    @Column({
    })
    dueDate: Date;
    @Column({
    })
    employeeId: number;
}
