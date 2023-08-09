import { Process, Processor } from '@nestjs/bull';

import { Job } from 'bull';

@Processor('SHERLOCK_QUEUE')
export class SherLockConsumer {
  @Process('sherlock')
  async doQuesU(job: Job<unknown>) {
    console.log('Job is starting at ' + new Date().toISOString());
    console.log(`Job id is ${job.id}`);
    console.log(`Job data is ${JSON.stringify(job.data)}`);
    let progress = 0;
    for (let i = 0; i < 100; i++) {
      await doSomething();
      progress += 1;
      await job.progress(progress);
    }
    console.log('Job is done at ' + new Date().toISOString());
    return {};
  }
}

const doSomething = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 100);
  });
};
