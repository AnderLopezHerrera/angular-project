import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaTopNavComponent } from './noticia-top-nav.component';

describe('NoticiaTopNavComponent', () => {
  let component: NoticiaTopNavComponent;
  let fixture: ComponentFixture<NoticiaTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaTopNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
