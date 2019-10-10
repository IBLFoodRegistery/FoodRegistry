import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarepackageComponent } from './carepackage.component';

describe('CarepackageComponent', () => {
  let component: CarepackageComponent;
  let fixture: ComponentFixture<CarepackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarepackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarepackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
