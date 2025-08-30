import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskRequest } from '@task-manager-workspace/models';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}
    @Get()
    findAll(){
        return this.taskService.findAll(2);
    }

    @Delete("delete/:id")
    deleteTask(@Param('id') id:string){
        return this.taskService.delete(Number(id))
    }

    @Post("/create")
    createTask(@Body() taskBody : TaskRequest ){
        return this.taskService.create(taskBody)
    }
}
