import { Injectable } from '@nestjs/common';
import { NotificationAddress } from "./notification_address.entity";

@Injectable()
export class NotificationAddressService {
    constructor() {}

    private readonly notificationAddresses: NotificationAddress[] = [];

    create(notificationAddress: NotificationAddress) {
        this.notificationAddresses.push(notificationAddress);
    }

    findAll(): NotificationAddress[] {
        return this.notificationAddresses;
    }

    update(notificationAddress: NotificationAddress) {
        this.notificationAddresses[notificationAddress.id] = notificationAddress;
    }

    delete(notificationAddress: NotificationAddress) {
        this.notificationAddresses.splice(notificationAddress.id, 1);
    }

    findOne(id: number): NotificationAddress {
        return this.notificationAddresses[id];
    }
}