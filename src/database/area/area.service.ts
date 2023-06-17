import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Area } from "./area.entity";

@Injectable()
export class NotificationService {
    constructor(
        @Inject('AREA_REPOSITORY')
        private areaRepository:
            Repository<Area>,
    ) { }
}
