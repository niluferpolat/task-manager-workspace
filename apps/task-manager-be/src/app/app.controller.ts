import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from '@task-manager-workspace/models';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  @Get("tasks")
  getTasks(): Task[]{
    return [
      { id: 1, title: 'First Task' },
      { id: 2, title: 'Second Task'},
    ];
  }
}
