import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './components/entry.component';
import { DepInjectionRoutingModule } from './dep-injection-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DepInjectionRoutingModule
  ],
  declarations: [EntryComponent]
})
export class DepInjectionModule { }
