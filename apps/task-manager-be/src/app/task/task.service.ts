import { Injectable } from '@nestjs/common';
import {TaskStatus} from '@task-manager-workspace/models';
import { CreateTaskDto } from './dto/task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entity/task.entity';
import { Repository } from 'typeorm';
import { Project } from '../project/entity/project.entity';
@Injectable()
export class TaskService {
  constructor(
      @InjectRepository(Task)
      private readonly taskRepository: Repository<Task>,
      @InjectRepository(Project)
      private readonly projectRepository: Repository<Project>
  ){
  
  }  
  async create(dto: CreateTaskDto): Promise<Task> {
    const project = await this.projectRepository.findOneBy({ id: dto.projectId });
    const task = this.taskRepository.create({
      taskText: dto.taskText,
      project: project,
      userId: dto.userId,
      status: dto.status ?? TaskStatus.TODO,
      priority: dto.priority ?? 0,
      deadline: dto.deadline ?? null
    });
    return this.taskRepository.save(task);
  }

}
