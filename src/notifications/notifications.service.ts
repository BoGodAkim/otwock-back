import { Inject, Injectable } from '@nestjs/common';
import { Notification } from '../database/notification/notification.entity';
import * as firebase from 'firebase-admin';
import 'firebase-admin/messaging';

@Injectable()
export class NotificationsService {
  constructor(
    @Inject('FIREBASE') private readonly firebase: firebase.app.App,
  ) {}

  async sendMessages(notifications: Notification[]) {
    const messages = notifications.map((notification) => ({
      token: notification.device.fcmToken,
      notification: {
        title: notification.title,
        body: notification.body,
      },
    }));
    const response = await this.firebase.messaging().sendEach(messages);
    console.log(response);
  }
}
