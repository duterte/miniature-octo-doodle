import { Component, OnInit, Input, } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/Task';
import { faTimes} from '@fortawesome/free-solid-svg-icons'
 
@Component({
  selector: 'app-task-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
