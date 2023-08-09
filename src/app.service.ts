import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue('SHERLOCK_QUEUE') private readonly sherlockQueue: Queue,
  ) {}

  async getHello() {
    return await this.sherlockQueue.add('sherlock', {
      name: 'Sherlock Holmes',
      address: '221B Baker Street',
    });
  }
}
