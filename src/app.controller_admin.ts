import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {AlertService} from "./database/alert/alert.service";
import {Alert} from "./database/alert/alert.entity";

@Controller('admin')
export class AppControllerAdmin {
    constructor(private readonly alertService: AlertService) {}


    @Post('/alert')
    addAlert(@Body() alert: Alert) {
        return this.alertService.create(alert);
    }

    @Put('/alert')
    updateAlert(@Body() alert: Alert) {
        return this.alertService.update(alert);
    }

    @Delete('/alert/:id')
    deleteAlert(@Param('id') id: number) {
        return this.alertService.delete(id);
    }

    @Get('/alert')
    getAllAlerts(): Promise<Alert[]> {
        return this.alertService.findAll();
    }
}
