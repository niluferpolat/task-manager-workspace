import { Injectable } from '@nestjs/common';
import {TaskEntity, TaskStatus} from '@task-manager-workspace/models'
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entity/task.entity';
import { Repository } from 'typeorm';
@Injectable()
export class TaskService {
  constructor(
      @InjectRepository(Task)
      private readonly taskRepository: Repository<Task>
  ){
  
  }
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
  
    findAll(userId: number){
        return this.tasks.filter(task=> task.userId === userId);
    }
    findOne(id: number){
        return this.tasks.filter(task=>task.id === id);
    }
    delete(id: number){
        return this.tasks.filter(task=>task.id !== id);
    }
  
  async create(dto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create({
      title: dto.title,
      taskText: dto.taskText,
      userId: dto.userId,
      status: dto.status ?? TaskStatus.TODO,
      priority: dto.priority ?? 0,
    });
    return this.taskRepository.save(task);
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
