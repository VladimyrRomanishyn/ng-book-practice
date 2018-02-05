import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralRoutingModule } from './structural-routing.module';
import { EntryComponent } from './components/entry.component';

@NgModule({
  imports: [
    CommonModule,
    StructuralRoutingModule
  ],
  declarations: [EntryComponent]
})
export class StructuralDirectivesModule { }
