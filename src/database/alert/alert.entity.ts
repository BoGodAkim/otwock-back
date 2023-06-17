import { Entity, PrimaryColumn, Column, Timestamp, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Alert {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    isActive: boolean;

    //TODO: add foreign typeofalert

}
