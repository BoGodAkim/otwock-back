import { Entity, PrimaryColumn, Column, Timestamp } from 'typeorm';
import { Circle, circleTransformer } from '../circle';

@Entity()
export class Device {
    @PrimaryColumn()
    id: string;

    @Column({
        type: 'circle',
        transformer: circleTransformer,
    })
    lastCoordinates: Circle;


    @Column()
    Timestamp: Timestamp;

}
