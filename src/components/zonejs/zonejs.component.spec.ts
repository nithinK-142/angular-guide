import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonejsComponent } from './zonejs.component';

describe('ZonejsComponent', () => {
  let component: ZonejsComponent;
  let fixture: ComponentFixture<ZonejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonejsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
