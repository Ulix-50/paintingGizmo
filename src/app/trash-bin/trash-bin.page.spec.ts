import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrashBinPage } from './trash-bin.page';

describe('TrashBinPage', () => {
  let component: TrashBinPage;
  let fixture: ComponentFixture<TrashBinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrashBinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
