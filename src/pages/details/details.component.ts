import { Component } from "@angular/core";
import { NavController,NavParams, AlertController } from "ionic-angular";
import { generalList, listItem } from "../../app/class/index";
import { listToDoService } from '../../app/Services/listToDo.service';

@Component({
    selector: 'app-details',
    templateUrl:'details.component.html',
})

export class DetailsComponent {
    idx:number;
    list:generalList;
    constructor(public navCtrl:NavController,
                public navParams:NavParams,
                public alertCtrl:AlertController,
                public _listToDoService:listToDoService){
                    this.idx=this.navParams.get('idx');
                    this.list=this.navParams.get('list')
                }

    updateItem(item2: listItem){
        item2.itemCompleted = !item2.itemCompleted;
        this._listToDoService.updateData();
    }

    deleteItem() {
        const confirm = this.alertCtrl.create({
          title: 'Delete List',
          message: 'Are you Sure?',
          buttons: ['Cancel',
            {
              text: 'Delete',
              handler: () => {
                this._listToDoService.deleteList(this.idx);
                this.navCtrl.pop();
              }
            }
          ]
        });
        confirm.present();
      }
}


