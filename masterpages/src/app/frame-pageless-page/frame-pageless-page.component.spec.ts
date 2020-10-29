import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramePagelessPageComponent } from './frame-pageless-page.component';

describe('FramePagelessPageComponent', () => {
  let component: FramePagelessPageComponent;
  let fixture: ComponentFixture<FramePagelessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramePagelessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FramePagelessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
