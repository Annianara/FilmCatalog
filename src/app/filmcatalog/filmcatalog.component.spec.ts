import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmcatalogComponent } from './filmcatalog.component';

describe('FilmcatalogComponent', () => {
  let component: FilmcatalogComponent;
  let fixture: ComponentFixture<FilmcatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmcatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmcatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
