import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp} from "typeorm";
import {Device} from "../device/device.entity";
import {JoinColumn} from "typeorm/browser";
import {Circle, circleTransformer} from "../circle";


@Entity
export class Coordinate {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Device)
    @JoinColumn({name: "device_id"})
    device: Device;

    @Column({type: 'circle',
    transformer: circleTransformer,
    })
    coordinates: Circle;

    @Column()
    timestamp: Timestamp;
}