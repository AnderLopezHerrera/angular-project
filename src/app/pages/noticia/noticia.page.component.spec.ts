import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaPageComponent } from './noticia.page.component';

describe('NoticiaPageComponent', () => {
  let component: NoticiaPageComponent;
  let fixture: ComponentFixture<NoticiaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
