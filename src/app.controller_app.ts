import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AlertService } from "./database/alert/alert.service";
import { NotificationAddressService } from "./database/notification_address/notification_address.service";
import { DeviceService } from "./database/device/device.service";
import { NotificationAddress } from './database/notification_address/notification_address.entity';
import { Device } from './database/device/device.entity';

@Controller('app')
export class AppControllerApp {
  constructor(private readonly alertService: AlertService,
    private readonly notificationAddressService: NotificationAddressService,
    private readonly deviceService: DeviceService) { }

  @Get('/id')
  async getId(): Promise<string> {
    let uuid = randomUUID();
    let device = new Device();
    device.id = uuid;
    await this.deviceService.create(device);
    return uuid;
  }

  @Get('/:id/myAddresses')
  async getMyAddresses(@Param('id') id: string): Promise<void> {
    (await (this.deviceService.findOne(id))).notificationAddresses;
  }

  @Post('/:id/address')
  async addAddress(@Param('id') id: string, @Body() address: NotificationAddress): Promise<void> {
    this.notificationAddressService.create(address);
  }

  @Delete('/:id/address')
  async deleteAddress(@Body() id: number): Promise<void> {
    this.notificationAddressService.delete(id);
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
