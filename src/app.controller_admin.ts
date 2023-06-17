import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AlertService } from './database/alert/alert.service';
import { Alert } from './database/alert/alert.entity';

@Controller('admin')
export class AppControllerAdmin {
  constructor(private readonly alertService: AlertService) {}

  @Post('/alert')
  async addAlert(@Body() alert: Alert): Promise<void> {
    await this.alertService.create(alert);
  }

  @Put('/alert')
  async updateAlert(@Body() alert: Alert): Promise<void> {
    await this.alertService.update(alert);
  }

  @Delete('/alert/:id')
  async deleteAlert(@Param('id') id: number): Promise<void> {
    await this.alertService.delete(id);
  }

  @Get('/alert')
  getAllAlerts(): Promise<Alert[]> {
    return this.alertService.findAll();
  }
}
