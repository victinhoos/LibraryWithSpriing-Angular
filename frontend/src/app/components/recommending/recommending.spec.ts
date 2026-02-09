import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recommending } from './recommending';

describe('Recommending', () => {
  let component: Recommending;
  let fixture: ComponentFixture<Recommending>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recommending]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recommending);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
