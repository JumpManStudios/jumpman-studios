import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { ProjectsService } from './projects/projects.service.js';
import * as projectsData from './projects/projects-data.js';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly projectsService: ProjectsService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('projects')
  getProjects(): projectsData.projects_type {
    return this.projectsService.getProjects();
  }
}
