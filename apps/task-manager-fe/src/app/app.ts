import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskList } from "./shared/components/task-list/task-list";


@Component({
  imports: [RouterModule, TaskList],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'task-manager-fe';
}
