import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {TaskEntity} from '@task-manager-workspace/models'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiBaseUrl;

  getTasks():Observable<TaskEntity[]> {
    return this.http.get<TaskEntity[]>(`${this.baseUrl}/api/tasks`);
  }
}
