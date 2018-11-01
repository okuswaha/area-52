import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorNewComponent } from './profile-editor-new.component';

describe('ProfileEditorNewComponent', () => {
  let component: ProfileEditorNewComponent;
  let fixture: ComponentFixture<ProfileEditorNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditorNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
