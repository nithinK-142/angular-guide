import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchlistComponent } from './branchlist.component';

describe('BranchlistComponent', () => {
  let component: BranchlistComponent;
  let fixture: ComponentFixture<BranchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
