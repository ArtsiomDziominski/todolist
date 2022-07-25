import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullVersionComponent } from './full-version.component';

describe('full-versionComponent', () => {
  let component: FullVersionComponent;
  let fixture: ComponentFixture<FullVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
