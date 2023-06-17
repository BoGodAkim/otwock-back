import { Entity, PrimaryColumn, Column, Timestamp } from 'typeorm';
import { Circle } from '../circle';

@Entity()
export class Device {
    @PrimaryColumn()
    id: string;

    @Column({
        type: 'circle',
        transformer: {
            to: (value: any) => `(${value.x},${value.y}),${value.radius}`,
            from: (value: Circle) => {
                return { x: value.x, y: value.y, radius: value.radius };
            }
        },
    })
    lastCoordinates: Circle;


    @Column()
    Timestamp: Timestamp;

}
