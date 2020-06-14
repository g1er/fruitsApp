import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsPageComponent } from './fruits-page.component';

describe('FruitsPageComponent', () => {
  let component: FruitsPageComponent;
  let fixture: ComponentFixture<FruitsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
