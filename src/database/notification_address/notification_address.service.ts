import { Inject, Injectable } from '@nestjs/common';
import { NotificationAddress } from './notification_address.entity';
import { Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';

@Injectable()
export class NotificationAddressService {
  constructor(
    @Inject('NOTIFICATION_ADDRESS_REPOSITORY')
    private notificationAddressRepository: Repository<NotificationAddress>,
  ) {}

  async create(
    notificationAddress: NotificationAddress,
  ): Promise<NotificationAddress> {
    return this.notificationAddressRepository.save(notificationAddress);
  }

  async findAll(): Promise<NotificationAddress[]> {
    return this.notificationAddressRepository.find();
  }

  async update(
    notificationAddress: NotificationAddress,
  ): Promise<NotificationAddress> {
    return this.notificationAddressRepository.save(notificationAddress);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.notificationAddressRepository.delete({ id: id });
  }

  async findOne(id: number): Promise<NotificationAddress> {
    return this.notificationAddressRepository.findOneBy({ id: id });
  }
}
