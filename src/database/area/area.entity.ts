import { Column, Entity, Polygon, PrimaryGeneratedColumn } from "typeorm";
import { Circle, circleTransformer } from "../circle";


@Entity()
export class Area {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true,
    })
    polygon: Polygon;

    @Column({
        type: 'circle',
        nullable: true,
        transformer: circleTransformer,
    })
    circle: Circle;

    @Column({
        nullable: true,
    })
    country: string;

    @Column({
        nullable: true,
    })
    city: string;

    @Column({
        nullable: true,
    })
    postalCode: string;

    @Column({
        nullable: true,
    })
    street: string;

    @Column({
        nullable: true,
    })
    houseNumber: string;

}
