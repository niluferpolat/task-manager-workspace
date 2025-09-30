import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AddEditProjectDialog } from "../../components/add-edit-project-dialog/add-edit-project-dialog";
import { DialogType } from '../../constants/constants';
@Component({
  selector: 'app-project-page',
  imports: [CardModule, ButtonModule, AddEditProjectDialog],
  templateUrl: './project-page.html',
  styleUrl: './project-page.css',
})
export class ProjectPage {
  showCreateDialog = false;
  dialogType = DialogType.ADD;

  openCreateDialog(){
    this.showCreateDialog = true
    this.dialogType = DialogType.ADD
  }
}
