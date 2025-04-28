import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugPagePage } from './debug-page.page';

describe('DebugPagePage', () => {
  let component: DebugPagePage;
  let fixture: ComponentFixture<DebugPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DebugPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
