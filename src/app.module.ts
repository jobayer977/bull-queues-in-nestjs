import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { SherLockConsumer } from './sherlock-queue.consumer';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'SHERLOCK_QUEUE',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, SherLockConsumer],
})
export class AppModule {}
