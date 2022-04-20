import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show app name', () => {
    expect(fixture.nativeElement.querySelector('[data-test-id="app-name"]')).toBeTruthy()
  });

  it('should show the Logo', () => {
    expect(fixture.nativeElement.querySelector('[data-test-id="logo"]')).toBeTruthy()
  });

  it('should show menu', () => {
    expect(fixture.nativeElement.querySelector('[data-test-id="menu"]')).toBeTruthy();
  });

  it('should show menu items', () => {
    expect(fixture.nativeElement.querySelector('[data-test-id="places"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test-id="map"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test-id="add-place"]')).toBeTruthy();
  });
});
