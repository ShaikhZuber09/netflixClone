import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorouselHolderComponent } from './corousel-holder.component';

describe('CorouselHolderComponent', () => {
  let component: CorouselHolderComponent;
  let fixture: ComponentFixture<CorouselHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorouselHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorouselHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
