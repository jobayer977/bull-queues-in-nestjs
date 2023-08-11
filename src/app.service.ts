import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue('REPORT_QUEUE') private readonly sherlockQueue: Queue,
  ) {}

  async getHello() {
    return 'Hello World!';
  }

  async getReport(type: string) {
    await this.sherlockQueue.add('GENERATE_REPORT', {
      type,
    });
    return {
      message: `Report of type ${type} is being generated`,
    };
  }
}
