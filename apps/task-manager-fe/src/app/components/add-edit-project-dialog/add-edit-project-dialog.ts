import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { DialogType } from '../../constants/constants';

@Component({
  selector: 'app-add-edit-project-dialog',
  standalone: true,
  imports: [Dialog],
  templateUrl: './add-edit-project-dialog.html',
  styleUrls: ['./add-edit-project-dialog.css'],
})
export class AddEditProjectDialog {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Input() dialogType = DialogType.ADD;
  header = this.dialogType + ' Project'
  closeDialog(){
    this.visible = false;
    this.visibleChange.emit(this.visible)
  }
}
