import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('/gen-report/:type')
  getReport(@Param('type') type: string) {
    return this.appService.getReport(type);
  }
}
