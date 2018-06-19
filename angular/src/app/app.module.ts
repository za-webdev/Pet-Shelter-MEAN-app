import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NewService} from './services/new.service';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { NewComponent } from './components/new/new.component';
import {FormsModule} from "@angular/forms";
import { DisplayComponent } from './components/display/display.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NewComponent,
    DisplayComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
