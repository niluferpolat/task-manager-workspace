import { Body, Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskRequest } from '@task-manager-workspace/models';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}
    @Post("/create")
    createTask(@Body() taskBody : TaskRequest ){
        return this.taskService.create(taskBody)
    }
}
