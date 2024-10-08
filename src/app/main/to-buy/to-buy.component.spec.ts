import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBuyComponent } from './to-buy.component';

describe('ToBuyComponent', () => {
  let component: ToBuyComponent;
  let fixture: ComponentFixture<ToBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToBuyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
