import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { randomUUID } from 'crypto';

@Controller('app')
export class AppControllerAdmin {
    constructor(private readonly appService: AppService) {}


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
