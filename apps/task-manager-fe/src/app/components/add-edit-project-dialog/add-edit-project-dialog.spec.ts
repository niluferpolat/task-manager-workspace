import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditProjectDialog } from './add-edit-project-dialog';

describe('AddEditProjectDialog', () => {
  let component: AddEditProjectDialog;
  let fixture: ComponentFixture<AddEditProjectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditProjectDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditProjectDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
