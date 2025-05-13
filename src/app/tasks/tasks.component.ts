import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from "./add-task/add-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string 
  @Input({required:true}) name!:string 
  isAddingTask =false
  constructor(public taskService:TasksService){
  }
  // private taskService = new TasksService()

  get selectUserTask(){
    return this.taskService.getUsersTasks(this.userId)
  }
  // onCompleteTask(id:string){
  //  this.taskService.removeTask(id)
  // }
  onStartAddingTask(){
    this.isAddingTask=!this.isAddingTask
  }

  onCloseAddTask (){
    this.isAddingTask = false
  }
  // onCreatingTask(task:newTask){
  //  this.taskService.addTask(task,this.userId)
  // }
}
