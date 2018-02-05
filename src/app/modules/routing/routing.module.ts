import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingRoutingModule } from './routing-routing.module';
import { EntryComponent } from './components/entry.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingRoutingModule
  ],
  declarations: [EntryComponent]
})
export class RoutingModule { }
