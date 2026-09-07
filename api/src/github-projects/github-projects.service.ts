import { Injectable } from '@nestjs/common';
import type { GithubProject } from '@shared/types/github-project.js';
import github_projects_data  from './github-projects-data.js';


@Injectable()
export class GithubProjectsService {
  private githubProjects: GithubProject[];

  constructor() {
    this.githubProjects = github_projects_data;
  }

  getGithubProjects(): GithubProject[] {
    return this.githubProjects;
  }

  getGithubProjectByName(name: string): GithubProject | null {
    const project = this.githubProjects.find((project) => project.name === name);
    if (!project) {
      return null;
    }
    console.log('found it');
    return project;
  }

  getGithubProjectById(id: number): GithubProject | null {
    const project = this.githubProjects.find((project) => project.id === id);
    if (!project) {
      return null;
    }
    return project;
  }
}
