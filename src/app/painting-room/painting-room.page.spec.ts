import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaintingRoomPage } from './painting-room.page';

describe('PaintingRoomPage', () => {
  let component: PaintingRoomPage;
  let fixture: ComponentFixture<PaintingRoomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaintingRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
