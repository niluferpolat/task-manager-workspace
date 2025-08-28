import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task';
import { inject } from '@angular/core';
import { TaskEntity } from '@task-manager-workspace/models';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList implements OnInit{
private taskService = inject(TaskService);
taskList:TaskEntity[] = []

ngOnInit(): void {
  this.fetchTasks()
}

  fetchTasks() {
    this.taskService.getTasks().subscribe({
      next: (value) => {
        this.taskList = value;
      },
      error: (err) => {
        console.error('Tasks could not be loaded', err);
      },
    });
}
}
