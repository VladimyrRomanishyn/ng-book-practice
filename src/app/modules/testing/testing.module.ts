import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingRoutingModule } from './testing-routing.module';
import { EntryComponent } from './components/entry.component';

@NgModule({
  imports: [
    CommonModule,
    TestingRoutingModule
  ],
  declarations: [EntryComponent]
})
export class TestingModule { }
