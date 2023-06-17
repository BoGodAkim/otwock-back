import {Column, Entity, PrimaryColumn} from 'typeorm';


@Entity
export class Alert {
    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    isActive: boolean;

    //TODO: add foreign typeofalert

}