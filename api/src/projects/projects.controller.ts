import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service.js';

@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getProjects() {
    return this.projectsService.getProjects();
  }
}