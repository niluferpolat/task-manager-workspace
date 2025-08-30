import { Injectable } from '@nestjs/common';
import {TaskEntity, TaskRequest} from '@task-manager-workspace/models'
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

    findAll(userId: number){
        return this.tasks.filter(task=> task.userId === userId);
    }
    findOne(id: number){
        return this.tasks.filter(task=>task.id === id);
    }
    delete(id: number){
        return this.tasks.filter(task=>task.id !== id);
    }
    create(taskBody:TaskRequest){
        const taskForCreate:TaskEntity = {
            id: Math.random(),
            title: taskBody.title,
            taskText: taskBody.taskText,
            userId: taskBody.userId,
            status: "UNDONE"
        }
        return this.tasks.push(taskForCreate)
    }

}
