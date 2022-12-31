import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';
import { HttpClientModule } from '@angular/common/http';



import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DailogComponent } from './dailog/dailog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        AppComponent,
        PostsComponentComponent,
        DailogComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatDialogModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule
       
    ]
})
export class AppModule { }
