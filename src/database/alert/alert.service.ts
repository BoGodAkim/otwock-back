import { Inject, Injectable } from "@nestjs/common";
import { Alert } from "./alert.entity";
import { Repository } from "typeorm";

@Injectable()
export class AlertService {
    constructor(
        @Inject('ALERT_REPOSITORY')
        private alertRepository: Repository<Alert>,
    ) { }

    async create(alert: Alert): Promise<Alert> {
        return this.alertRepository.save(alert);
    }

    async findAll(): Promise<Alert[]> {
        return this.alertRepository.find();
    }

    async update(alert: Alert): Promise<Alert> {
        return this.alertRepository.save(alert);
    }

    async findOne(id: number): Promise<Alert> {
        return this.alertRepository.findOneBy({ id: id });
    }

    async delete(id: number): Promise<void> {
        await this.alertRepository.delete(id);
    }

}
