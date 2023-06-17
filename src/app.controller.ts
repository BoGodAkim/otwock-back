import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { randomUUID } from 'crypto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getId(): string {
    console.log(randomUUID());
    return this.appService.getHello();
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
  getMyAddresses(@Param('id') id: string) {
    //return this.appService.getMyAddresses();
  }

  @Get()
  getMyAlerts(@Param('id') id: string) {
    //return this.appService.getMyAlerts();
  }

  @Post()
  addAlert() {
    //return this.appService.addAlert();
  }

  @Put()
  updateAlert() {
    //return this.appService.updateAlert();
  }

  @Delete()
  deleteAlert() {
    //return this.appService.deleteAlert();
  }

  @Get()
  getAllAlerts() {
    //return this.appService.getAllAlerts();
  }
}
