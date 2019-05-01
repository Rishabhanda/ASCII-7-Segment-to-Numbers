import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryOneComponent } from './user-story-one.component';

describe('UserStoryOneComponent', () => {
  let component: UserStoryOneComponent;
  let fixture: ComponentFixture<UserStoryOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
