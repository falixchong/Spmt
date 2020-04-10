import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourSportsComponent } from './your-sports.component';

describe('YourSportsComponent', () => {
  let component: YourSportsComponent;
  let fixture: ComponentFixture<YourSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
