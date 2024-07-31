import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowStatementsComponent } from './control-flow-statements.component';

describe('ControlFlowStatementsComponent', () => {
  let component: ControlFlowStatementsComponent;
  let fixture: ComponentFixture<ControlFlowStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowStatementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
