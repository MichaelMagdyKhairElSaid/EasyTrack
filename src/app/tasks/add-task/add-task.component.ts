import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({required:true}) userId!:string
  @Output() close=new EventEmitter<void>()
  // @Output() add=new EventEmitter<newTask>()
  enteredTitle=""
  enteredDesc=""
  enteredDate=""
  taskService = inject(TasksService)
/* 
  enteredTitle=signal("")
  enteredDesc=signal("")
  enteredDate=signal("") 
*/
  // @Input({required:true}) cancelAddingTask!:boolean
  
  onCancel(){
    this.close.emit()
  }
  onSubmit(){
    // this.add.emit({
    //   title:this.enteredTitle,
    //   description:this.enteredDesc,
    //   date:this.enteredDate
    // })
  //NOTE no longer need emitter while using services 
    this.taskService.addTask({
      title:this.enteredTitle,
        description:this.enteredDesc,
        date:this.enteredDate
    },this.userId)
    this.close.emit()
  }
}
