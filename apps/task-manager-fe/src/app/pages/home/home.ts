import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { TopMenu } from '../../components/top-menu/top-menu';

@Component({
  selector: 'app-home',
  imports: [Sidebar,TopMenu],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
}
