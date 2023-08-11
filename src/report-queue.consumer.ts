import { Process, Processor } from '@nestjs/bull';

import { Job } from 'bull';

@Processor('REPORT_QUEUE')
export class ReportQueueConsumer {
  @Process('GENERATE_REPORT')
  async generateReport(job: Job<unknown>) {
    console.log('Job is starting with ID ' + job.id);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 30000);
    });
    console.log('Job is done with ID ' + job.id);
    return { done: true };
  }
}
