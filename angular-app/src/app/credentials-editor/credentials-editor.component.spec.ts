import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsEditorComponent } from './credentials-editor.component';

describe('CredentialsEditorComponent', () => {
  let component: CredentialsEditorComponent;
  let fixture: ComponentFixture<CredentialsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
