import { Controller, Get } from '@nestjs/common';
import { GithubProjectsService } from './github-projects.service.js';

@Controller()
export class GithubProjectsController {
  constructor(private readonly githubProjectsService: GithubProjectsService) {}

  @Get()
  getGithubProjects() {
    return this.githubProjectsService.getGithubProjects();
  }
}