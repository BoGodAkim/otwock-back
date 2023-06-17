import { Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Device } from "../device/device.entity";
import { circleTransformer, Circle } from "../circle";


export class NotificationAddress {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Device, device => device.notificationAddresses)
    @JoinColumn({ name: 'device_id' })
    device: Device;

    @Column({
        type: 'circle',
        transformer: circleTransformer,
    })
    circle: Circle;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    postalCode: string;

    @Column()
    street: string;

    @Column()
    houseNumber: string;
    
    //TODO: add more fields
}
