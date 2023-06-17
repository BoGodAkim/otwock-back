import { Entity, PrimaryColumn, Column, Timestamp, OneToMany } from 'typeorm';
import { Circle, circleTransformer } from '../circle';
import { NotificationAddress } from '../notification_address/notification_address.entity';

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
    timestamp: Timestamp;

    @OneToMany(() => NotificationAddress, notificationAddress => notificationAddress.device)
    notificationAddresses: NotificationAddress[];

}
