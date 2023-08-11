import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue('REPORT_QUEUE') private queue: Queue) {}

  getHello(): string {
    return 'Hello World!';
  }

  async genReport(type: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 30000);
    });
  }
}
