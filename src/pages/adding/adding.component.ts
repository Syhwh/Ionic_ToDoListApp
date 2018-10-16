import { Component } from "@angular/core";
import { generalList, listItem } from "../../app/class/index";

@Component({
    selector:'app-adding',
    templateUrl:'adding.component.html'
})

export class AddingComponent{

nameList:string;
nameItem:string="";

items:listItem[]=[];

    constructor(){}
addToDo(){
    if(this.nameItem.length==0){
        return;
    }
    let item= new listItem();
    item.name=this.nameItem;
    this.items.push(item);
    this.nameItem="";

}

}