import { Component ,EventEmitter,Input, Output, output} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
/*   @Input({required:true}) avatar!:string // without signals
  @Input({required:true}) name!:string //without signals
  @Input({required:true}) id!:string //without signals */
   /*     avatar = input.required<string>() //uses signals
  name = input.required<string>() //uses signals
  select = output<string>() //without signals but for not using decorators and shorter syntax
    imagePath = computed(()=>{
      return 'assets/users/'+ this.avatar()
    }) */
  @Input({required:true}) user!:User
  @Input({required:true}) selected!:boolean
  @Output() select = new EventEmitter<string>()
  get imagePath(){
    return 'assets/users/'+ this.user.avatar
  }

    onSelectUser(){
      this.select.emit(this.user.id)
      }
}
