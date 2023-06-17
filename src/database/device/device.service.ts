import {Inject, Injectable, Param} from "@nestjs/common";
import { Repository } from "typeorm";
import { Device } from "./device.entity";

@Injectable()
export class DeviceService {
    constructor(
        @Inject('DEVICE_REPOSITORY')
        private deviceRepository:
        Repository<Device>,
    ) { }

    async findOne(@Param() id: string): Promise<Device> {
        return this.deviceRepository.findOneBy({ id: id });
    }
}
