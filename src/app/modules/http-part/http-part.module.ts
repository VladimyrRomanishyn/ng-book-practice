import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRoutingModule } from './http-routing.module';
import { EntryComponent } from './components/entry.component';

@NgModule({
  imports: [
    CommonModule,
    HttpRoutingModule
  ],
  declarations: [EntryComponent]
})
export class HttpPartModule { }
