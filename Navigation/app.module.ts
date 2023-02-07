import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppFile1 } from './File1.component';
import { AppFile2 } from './File2.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'File 1', component: AppFile1 },
   { path: 'File 2', component: AppFile2 },
];

@NgModule ({
   imports: [ BrowserModule,
   RouterModule.forRoot(appRoutes)],   //RouterModule.forRoot adds the routes to the application.
   declarations: [ AppComponent,AppFile1,AppFile2],
   bootstrap: [ AppComponent ]
})
export class AppModule { }