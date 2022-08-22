import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModellComponent } from './modell.component';

describe('ModellComponent', () => {
  let component: ModellComponent;
  let fixture: ComponentFixture<ModellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
