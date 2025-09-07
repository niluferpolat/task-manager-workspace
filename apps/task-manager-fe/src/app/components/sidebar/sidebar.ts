import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-sidebar',
  imports: [DrawerModule,ButtonModule],
  templateUrl: './sidebar.html',
  standalone:true,
  styleUrl: './sidebar.css',
})
export class Sidebar {
        @ViewChild('drawerRef') drawerRef!: Drawer;
      @Input() visible = true;
      @Output() visibleChange = new EventEmitter<boolean>();

        close(evt?: Event) {
    this.visible = false;
    this.visibleChange.emit(false);
    this.drawerRef?.hide?.();                
  }


     
}
