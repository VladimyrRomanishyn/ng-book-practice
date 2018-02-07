import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingRoutingModule } from './testing-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { VoterComponent } from './components/voter/voter.component';

@NgModule({
  imports: [
    CommonModule,
    TestingRoutingModule
  ],
  declarations: [EntryComponent, VoterComponent]
})
export class TestingModule { }
