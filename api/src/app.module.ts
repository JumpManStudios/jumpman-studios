import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { GithubProjectsModule } from './github-projects/github-projects.module.js';

@Module({
  imports: [GithubProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
