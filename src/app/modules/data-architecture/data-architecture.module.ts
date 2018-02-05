import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataArchitectureRoutingModule } from './data-architecture-routing.module';
import { EntryComponent } from './components/entry.component';

@NgModule({
  imports: [
    CommonModule,
    DataArchitectureRoutingModule
  ],
  declarations: [EntryComponent]
})
export class DataArchitectureModule { }
