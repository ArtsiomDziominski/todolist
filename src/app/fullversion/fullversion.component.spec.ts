import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullversionComponent } from './fullversion.component';

describe('FullversionComponent', () => {
  let component: FullversionComponent;
  let fixture: ComponentFixture<FullversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
