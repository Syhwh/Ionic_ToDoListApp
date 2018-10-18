import {listItem} from './list-item';

export class generalList{
    name:string;
    totalCompleted:boolean;
    items: listItem[];

    constructor(name:string){
        this.name=name;
        this.totalCompleted=false;
        

    }
}