import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from './pages/home/home';
import { TopMenu } from "./components/top-menu/top-menu";
import { Sidebar } from "./components/sidebar/sidebar";


@Component({
  imports: [RouterModule, Home, TopMenu, Sidebar],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'task-manager-fe';
  visible = false;
}
