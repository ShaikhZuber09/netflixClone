import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflinInfoComponent } from './netflin-info.component';

describe('NetflinInfoComponent', () => {
  let component: NetflinInfoComponent;
  let fixture: ComponentFixture<NetflinInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetflinInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetflinInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
