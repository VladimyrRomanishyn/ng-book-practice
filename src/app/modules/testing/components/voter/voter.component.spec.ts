import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.itemVotes = 1;
    component.myVotes = 1;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('totalVotes should be 21', () => {
    component.itemVotes = 20;
    component.myVotes = 1;
    fixture.detectChanges();
    const debug = fixture.debugElement.query(By.css('.total-votes'));
    const el: HTMLElement = debug.nativeElement;
    expect(el.innerText).toContain('21');
  });

  it('Should increase totalVotes', () => {
    component.itemVotes = 20;
    component.myVotes = 1;
    component.increase();
    fixture.detectChanges();
    const debug = fixture.debugElement.query(By.css('.total-votes'));
    const el: HTMLElement = debug.nativeElement;
    expect(el.innerText).toContain('22');
  });

  it('Should decrease totalVotes', () => {
    component.itemVotes = 20;
    component.myVotes = 1;
    component.decrease();
    fixture.detectChanges();
    const debug = fixture.debugElement.query(By.css('.total-votes'));
    const el: HTMLElement = debug.nativeElement;
    expect(el.innerText).toContain('20');
  });
});
