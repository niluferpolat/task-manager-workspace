import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
    private tasks = [
        {
            id: 1,
            status:"DONE",
            userId:2,
            taskText: "Buy some suppliers"
        },
         {
            id: 2,
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

}
