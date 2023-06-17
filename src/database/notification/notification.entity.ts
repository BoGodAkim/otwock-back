import {Entity, PrimaryColumn, Column, Timestamp, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Device} from "../device/device.entity";
import {JoinColumn} from "typeorm/browser";
import {Alert} from "../alert/alert.entity";


@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Device)
    @JoinColumn({name: "device_id"})
    device: Device;

    @ManyToOne(type => Alert)
    @JoinColumn({name: "alert_id"})
    alert: Alert;

    @Column()
    text: string;

}
