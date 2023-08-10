import { Process, Processor } from '@nestjs/bull';

import { Job } from 'bull';

@Processor('SHERLOCK_QUEUE')
export class SherLockConsumer {
  @Process('generateReport')
  async generateReport(job: Job<unknown>) {
    console.log('Job is starting with ID ' + job.id);

    let progress = 0;
    for (let i = 0; i < 100; i++) {
      await doSomething();
      progress += 1;
      await job.progress(progress);
    }
    console.log('Job is done with ID ' + job.id);
    return { done: true };
  }
}

const doSomething = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 100);
  });
};
