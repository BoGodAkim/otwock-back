import { Entity, PrimaryColumn, Column, Timestamp, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Area } from '../area/area.entity';


@Entity()
export class Alert {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    isActive: boolean;

    @OneToMany(() => Area, area => area.alert)
    areas: Area[];

    //TODO: add foreign typeofalert

}
