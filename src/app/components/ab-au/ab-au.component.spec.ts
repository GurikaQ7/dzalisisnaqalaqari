import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbAuComponent } from './ab-au.component';

describe('AbAuComponent', () => {
  let component: AbAuComponent;
  let fixture: ComponentFixture<AbAuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbAuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbAuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
