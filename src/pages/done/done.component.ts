import {Component} from '@angular/core';
import{listToDoService} from '../../app/Services/listToDo.service';

@Component({
selector: 'app-done',
templateUrl:'done.component.html'
})

export class doneComponent{
constructor(private _listDo:listToDoService){}

}