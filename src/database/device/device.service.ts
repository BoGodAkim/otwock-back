import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Device } from "./device.entity";

@Injectable()
export class DeviceService {
    constructor(
        @Inject('DEVICE_REPOSITORY')
        private deviceRepository:
        Repository<Device>,
    ) { }
}
