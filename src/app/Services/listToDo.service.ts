import { Injectable } from "@angular/core";
import { generalList } from '../class/list';

@Injectable()
    export class listToDoService{
    lists: generalList[] =[]
    
        constructor(){
            this.loadData();
    }

updateData(){
    localStorage.setItem("data",JSON.stringify(this.lists));
}
loadData(){
    if(localStorage.getItem("data")){
        this.lists=JSON.parse(localStorage.getItem("data"));
    }
}

addData(list:generalList){
    this.lists.push(list);
    this.updateData();
}

    }
