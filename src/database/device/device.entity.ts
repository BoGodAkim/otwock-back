import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Circle, circleTransformer } from '../circle';
import { NotificationAddress } from '../notification_address/notification_address.entity';
import { Coordinate } from '../coordinate/coordinate.entity';

@Entity()
export class Device {
    @PrimaryColumn()
    id: string;

    @Column({
        nullable: true,
        type: 'circle',
        transformer: circleTransformer,
    })
    lastCoordinates: Circle;


    @Column(
        {        nullable: true,
        }
    )
    timestamp: Date;

    @OneToMany(() => NotificationAddress, notificationAddress => notificationAddress.device)
    notificationAddresses: NotificationAddress[];

    @OneToMany(() => Coordinate, coordinate => coordinate.device)
    coordinates: Coordinate[];

}
