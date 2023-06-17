import { Entity, PrimaryColumn, Column, Timestamp} from 'typeorm';

@Entity()
export class Device {
    @PrimaryColumn()
    id: string;

    @Column({
        type: 'circle',
        transformer: {
          to: (value: any) => `(${value.x},${value.y}),${value.radius}`,
          from: (value: string) => {
            const [x, y, radius] = value.substring(1, value.length - 1).split(',');
            return { x: parseFloat(x), y: parseFloat(y), radius: parseFloat(radius) };
          },
        },
      })
    lastCoordinates: { x: number; y: number; radius: number };
    

    @Column()
    Timestamp: Timestamp;

}
