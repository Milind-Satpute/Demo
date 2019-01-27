import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetappComponent } from './netapp.component';

describe('NetappComponent', () => {
  let component: NetappComponent;
  let fixture: ComponentFixture<NetappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
