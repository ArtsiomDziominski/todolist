import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfullversionComponent } from './notfullversion.component';

describe('NotfullversionComponent', () => {
  let component: NotfullversionComponent;
  let fixture: ComponentFixture<NotfullversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfullversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfullversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
