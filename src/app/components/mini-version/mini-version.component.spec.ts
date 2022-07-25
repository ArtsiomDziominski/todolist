import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniVersionComponent } from './mini-version.component';

describe('mini-versionComponent', () => {
  let component: MiniVersionComponent;
  let fixture: ComponentFixture<MiniVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
