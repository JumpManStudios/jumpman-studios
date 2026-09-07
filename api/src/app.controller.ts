import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { GithubProjectsService } from './github-projects/github-projects.service.js';
import { GithubProject } from '@shared/types/github-project.js';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly projectsService: GithubProjectsService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('projects')
  getGithubProjects(): GithubProject[] {
    return this.projectsService.getGithubProjects();
  }
}
