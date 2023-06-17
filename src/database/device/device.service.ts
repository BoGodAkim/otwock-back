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

    async create(device: Device): Promise<Device> {
        return this.deviceRepository.save(device);
    }

    async findOne(@Param() id: string): Promise<Device> {
        return this.deviceRepository.findOne({where:{id:id}, relations: {notificationAddresses:true}})
        //return this.deviceRepository.findOneBy({ id: id, relations: {notificationAddresses:true}});
    }
}
