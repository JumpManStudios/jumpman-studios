import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { GithubProjectsService } from './github-projects/github-projects.service.js';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
