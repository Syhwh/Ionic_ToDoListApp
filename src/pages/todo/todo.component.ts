import{Component} from '@angular/core';
import{listToDoService} from '../../app/Services/listToDo.service';
import { NavController } from 'ionic-angular';
import { AddingComponent } from '../adding/adding.component';


@Component({
selector:'app-todo',
templateUrl:'todo.component.html',
})

export class todoComponent {
    constructor (private _listToDo:listToDoService,
                private navCtrl:NavController) {
                    
                }
    goAdding(){
        this.navCtrl.push(AddingComponent)
    }
}