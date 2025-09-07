import { Component, computed, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';



@Component({
  selector: 'app-top-menu',
   imports: [CommonModule, ButtonModule, StyleClassModule, ToolbarModule],
  templateUrl: './top-menu.html',
  standalone:true,
  styleUrl: './top-menu.css',
})
export class TopMenu{
     @Input()  visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  toggle() {
    this.visible = !this.visible;          
    this.visibleChange.emit(this.visible);  
  }
}
