import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbacklogComponent } from './listbacklog.component';

describe('ListbacklogComponent', () => {
  let component: ListbacklogComponent;
  let fixture: ComponentFixture<ListbacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbacklogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
