import { Controller, Delete, Get, Param } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
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
}
