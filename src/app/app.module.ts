import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//Services
import {listToDoService} from '../app/Services/listToDo.service';
//pipes
import { PlaceHolderPipe} from "../app/pipes/placeholder.pipe";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {todoComponent} from '../pages/todo/todo.component';
import {doneComponent } from '../pages/done/done.component';
import {AddingComponent} from '../pages/adding/adding.component'
import {DetailsComponent} from "../pages/details/details.component";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    todoComponent,
    doneComponent,
    AddingComponent,
    PlaceHolderPipe,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    todoComponent,
    doneComponent,
    AddingComponent,
    DetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    listToDoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
