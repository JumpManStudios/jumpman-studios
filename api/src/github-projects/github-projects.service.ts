import { Injectable } from '@nestjs/common';
import { GithubProject } from '@shared/types/github-project.js';



@Injectable()
export class GithubProjectsService {
  private githubProjects: GithubProject[];

  constructor() {
    this.githubProjects = require('./github-projects-data.js');
  }

  getGithubProjects(): GithubProject[] {
    return this.githubProjects;
  }

  getGithubProjectById(id: number): GithubProject | null {
    const project = this.githubProjects.find((project) => project.id === id);
    if (!project) {
      return null;
    }
    return project;
  }
}
