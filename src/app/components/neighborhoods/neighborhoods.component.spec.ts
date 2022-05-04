import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborhoodsComponent } from './neighborhoods.component';

describe('NeighborhoodsComponent', () => {
  let component: NeighborhoodsComponent;
  let fixture: ComponentFixture<NeighborhoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeighborhoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeighborhoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show neighborhoods', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test-id="neighborhood"]').length).toBe(4);
  });

  it('should show neighborhood information', () => {
    const neighborhood = fixture.nativeElement.querySelector('[data-test-id="neighborhood"]');
    expect(neighborhood.querySelector('[data-test-id="name"]').innerText).toEqual('Marigny');
    expect(neighborhood.querySelector('[data-test-id="image"]').src).toContain('assets/marigny.jpg')
  });
});
