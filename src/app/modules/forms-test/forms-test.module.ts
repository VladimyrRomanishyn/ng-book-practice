import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './components/entry.component';
import { FormsTestRoutingModule } from './forms-test-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsTestRoutingModule
  ],
  declarations: [EntryComponent]
})
export class FormsTestModule { }
