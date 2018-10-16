import { Injectable } from "@angular/core";
import {generalList} from '../class/list';

@Injectable()
    export class listToDoService{
    lists: generalList[] =[]
    
        constructor(){
            console.log("Servicio INICIALIZADO");
            let lista1=new generalList('Shopping');
            let lista2=new generalList('Home');
            let lista3=new generalList('School');
            
            this.lists.push(lista1);
            this.lists.push(lista2);
            this.lists.push(lista3);
            
    }
    }
