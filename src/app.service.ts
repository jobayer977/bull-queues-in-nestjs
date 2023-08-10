import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue('SHERLOCK_QUEUE') private readonly sherlockQueue: Queue,
  ) {}

  async getHello() {
    return await this.sherlockQueue.add('generateReport', {
      startDate: '2020-01-01',
      endDate: '2020-01-31',
      userId: '123',
    });
  }
}
