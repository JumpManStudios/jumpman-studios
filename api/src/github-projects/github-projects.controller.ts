import { Controller, Get } from '@nestjs/common';
import { GithubProjectsService } from './github-projects.service.js';

@Controller('/github-projects')
export class GithubProjectsController {
  constructor(private readonly githubProjectsService: GithubProjectsService) {}

  @Get()
  getGithubProjects() {
    return this.githubProjectsService.getGithubProjects();
  }

  @Get('/:name')
  getGithubProjectsByName(name: string) {
    return this.githubProjectsService.getGithubProjectByName(name);
  }
}