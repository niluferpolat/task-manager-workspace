import { Injectable } from '@nestjs/common';
import {TaskEntity, TaskStatus} from '@task-manager-workspace/models'
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/task.dto';
@Injectable()
export class TaskService {
    private tasks:TaskEntity[] = [
        {
            id: 1,
            title:"fsdfs",
            status:"DONE",
            userId:2,
            taskText: "Buy some suppliers"
        },
         {
            id: 2,
            title:"gdfg",
            status:"UNDONE",
            userId:2,
            taskText: "Wash the dishes"
        }
    ]
     private seq = this.tasks.length;
    findAll(userId: number){
        return this.tasks.filter(task=> task.userId === userId);
    }
    findOne(id: number){
        return this.tasks.filter(task=>task.id === id);
    }
    delete(id: number){
        return this.tasks.filter(task=>task.id !== id);
    }
    create(dto: CreateTaskDto): TaskEntity {
    const newTask: TaskEntity = {
      id: ++this.seq,
      userId:dto.userId,
      title: dto.title ?? '',
      taskText: dto.taskText ?? '',
      status: TaskStatus.TODO,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: number, dto: UpdateTaskDto): TaskEntity | undefined {
    const task = this.tasks.find(t => t.id === id);
    if (!task) return undefined;

    if (dto.title !== undefined) task.title = dto.title;
    if (dto.text !== undefined) task.taskText = dto.text;
    if (dto.status !== undefined) task.status = dto.status;

    return task;
  }

}
