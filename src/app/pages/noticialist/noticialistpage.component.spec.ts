import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticialistpageComponent } from './noticialistpage.component';

describe('NoticialistpageComponent', () => {
  let component: NoticialistpageComponent;
  let fixture: ComponentFixture<NoticialistpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticialistpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticialistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
