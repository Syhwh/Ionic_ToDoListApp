import{Component} from '@angular/core';
import{listToDoService} from '../../app/Services/listToDo.service';
import { NavController } from 'ionic-angular';
import { AddingComponent } from '../adding/adding.component';
import { DetailsComponent } from '../details/details.component';

@Component({
selector:'app-todo',
templateUrl:'todo.component.html',
})

export class todoComponent {
    constructor (private _listToDo: listToDoService,
                private navCtrl:NavController) {
                  console.log(_listToDo);  
                }
    goAdding(){
        this.navCtrl.push(AddingComponent);
    }

    goDetail(list, idx){
        this.navCtrl.push(DetailsComponent,{list,idx});
    }
}