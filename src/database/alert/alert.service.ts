import { Injectable } from "@nestjs/common";
import { Alert } from "./alert.entity";

@Injectable()
export class AlertService {
    private readonly alerts: Alert[] = [];

    create(alert: Alert) {
        this.alerts.push(alert);
    }

    findAll(): Alert[] {
        return this.alerts;
    }

    update(alert: Alert) {
        this.alerts[alert.id] = alert;
    }

    findOne(id: number): Alert {
        return this.alerts[id];
    }

}