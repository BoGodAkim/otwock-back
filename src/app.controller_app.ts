import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { randomUUID } from 'crypto';
import {AlertService} from "./database/alert/alert.service";
import {NotificationAddress} from "./database/notification_address/notification_address.entity";
import {NotificationAddressService} from "./database/notification_address/notification_address.service";
import {DeviceService} from "./database/device/device.service";

@Controller('app')
export class AppControllerApp {
  constructor(private readonly alertService: AlertService,
              private readonly notificationAddress: NotificationAddressService,
              private readonly deviceService: DeviceService) {}

  @Get()
  getId(): string {
    console.log(randomUUID());
    //return this.appService.getHello();
  }

  @Get()
  async getMyAddresses(@Param('id') id: string) {
    return (await (this.deviceService.findOne(id))).notificationAddresses;
  }

  @Post()
  addAddress() {
    // return this.appService.addAddress();
  }

  @Delete()
  deleteAddress() {
    //return this.appService.deleteAddress();
  }

  @Put()
  updateAddress() {
    //return this.appService.updateAddress();
  }

  @Put()
  shareLocation() {
    //return this.appService.shareLocation();
  }

  @Get()
  getMyAlerts(@Param('id') id: string) {
    //return this.appService.getMyAlerts();
  }

}
