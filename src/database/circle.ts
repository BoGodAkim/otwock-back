export class Circle {
    x: number;
    y: number;
    radius: number;
}

export const circleTransformer = {
    to: (value: any) => `(${value.x},${value.y}),${value.radius}`,
    from: (value: Circle) => {
        return { x: value.x, y: value.y, radius: value.radius };
    }
}

