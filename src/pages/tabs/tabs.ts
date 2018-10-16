import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import{todoComponent} from '../todo/todo.component';
import{doneComponent} from '../done/done.component';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = todoComponent;
  tab3Root = doneComponent;

  constructor() {

  }
}
