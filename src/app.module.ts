import { Module } from '@nestjs/common';
import { AppControllerApp } from './app.controller_app';
import { DatabaseModule } from './database/database.module';
import { AppControllerAdmin } from './app.controller_admin';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [DatabaseModule, NotificationsModule],
  controllers: [AppControllerApp, AppControllerAdmin],
})
export class AppModule {}
