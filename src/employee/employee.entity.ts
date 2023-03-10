import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employee')
export class Employee extends BaseEntity{
    @PrimaryGeneratedColumn({
        comment:'employee identifier',
    })
    id:BigInt;

    @Column({
        type:'varchar',
    })
    name: string;

    @Column({
        type:'varchar',
    })
    email: string;

    @Column({
        type:'varchar',
    })
    phone: string;

    @Column({
    })
    hireDate: Date;
    @Column({
        type:'varchar',
    })
    position: string;
}
