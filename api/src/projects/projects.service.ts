import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  getProjects(): string {
    return 'Projects';
  }

  getProjectById(id: number): string {
    return `Project ${id}`;
  }
}
