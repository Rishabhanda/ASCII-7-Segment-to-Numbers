import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryTwoComponent } from './user-story-two.component';

describe('UserStoryTwoComponent', () => {
  let component: UserStoryTwoComponent;
  let fixture: ComponentFixture<UserStoryTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
