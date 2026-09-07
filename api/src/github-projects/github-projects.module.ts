import { Module } from '@nestjs/common';
import { GithubProjectsController } from './github-projects.controller.js';
import { GithubProjectsService } from './github-projects.service.js';

@Module({
  imports: [],
  controllers: [GithubProjectsController],
  providers: [GithubProjectsService],
})
export class GithubProjectsModule {

}