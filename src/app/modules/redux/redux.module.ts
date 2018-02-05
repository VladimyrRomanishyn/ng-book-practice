import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduxRoutingModule } from './redux-routing.module';
import { EntryComponent } from './components/entry.component';

@NgModule({
  imports: [
    CommonModule,
    ReduxRoutingModule
  ],
  declarations: [EntryComponent]
})
export class ReduxModule { }
