import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLandaingPageComponent } from './movie-landaing-page.component';

describe('MovieLandaingPageComponent', () => {
  let component: MovieLandaingPageComponent;
  let fixture: ComponentFixture<MovieLandaingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieLandaingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieLandaingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
