import { Component } from "@angular/core";
import { generalList, listItem } from "../../app/class/index";
import { AlertController,NavController } from "ionic-angular";
import {listToDoService} from '../../app/Services/listToDo.service';

@Component({
    selector:'app-adding',
    templateUrl:'adding.component.html'
})

export class AddingComponent{
nameList:string="";
nameItem:string="";
items:listItem[]=[];
    constructor(public alertCtrl:AlertController,
                public navCtrl:   NavController,
                public _listToDoService: listToDoService){}

addToDo(){
    if(this.nameItem.length==0){    
    return;
    }    
    let item= new listItem();
    item.name=this.nameItem;
    this.items.push(item);
    this.nameItem="";
}
deleteItem ( idx:number)  {
    this.items.splice(idx,1);
}

saveList() {
    if (this.nameList.length==0){
        const alert = this.alertCtrl.create({
            title: 'List Name!',
            subTitle: 'List name is required!',
            buttons: ['OK']
          });
          alert.present();
          return;
        }
        
        let list =new generalList(this.nameList);
        list.items=this.items;
        this._listToDoService.addData(list);
        //this._listToDoService.lists.push(list);
        this.navCtrl.pop();
}


}
