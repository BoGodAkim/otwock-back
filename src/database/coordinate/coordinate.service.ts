import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Coordinate } from "./coordinate.entity";

@Injectable()
export class NotificationService {
    constructor(
        @Inject('COORDINATE_REPOSITORY')
        private coordinateRepository:
        Repository<Coordinate>,
    ) { }
}
