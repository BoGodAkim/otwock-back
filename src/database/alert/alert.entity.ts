import { Entity, PrimaryColumn, Column, Timestamp } from 'typeorm';


@Entity
export class Alert {
    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    isActive: boolean;

    //todo add foreign typeofalert

}