import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './components/entry.component';
import { AdvancedComponentsRoutingModule } from './advanced-components-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdvancedComponentsRoutingModule
  ],
  declarations: [EntryComponent]
})
export class AdvancedComponentsModule { }
