import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteProjetComponent } from './ajoute-projet.component';

describe('AjouteProjetComponent', () => {
  let component: AjouteProjetComponent;
  let fixture: ComponentFixture<AjouteProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
