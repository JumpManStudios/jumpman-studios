import { Injectable } from '@nestjs/common';
import { project_type, projects_type } from './projects-data.js';



@Injectable()
export class ProjectsService {
  private projects: projects_type;

  constructor() {
    this.projects = require('./projects-data.js');
  }

  getProjects(): projects_type {
    return this.projects;
  }

  getProjectById(id: number): project_type | null {
    const project = this.projects.find((project) => project.id === id);
    if (!project) {
      return null;
    }
    return project;
  }
}
