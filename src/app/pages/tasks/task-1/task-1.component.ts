import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatDivider } from '@angular/material/divider';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import { MatOption, provideNativeDateAdapter } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { PositionLevels, WorkingExperienceDto } from './models';
import { DtoService } from '../../../core/services';
import { Confirmable } from '../../../core/decorators';

type WorkExperienceFormObject = {
  companyName: FormControl<string>;
  companyWebsiteAddress: FormControl<string>;
  companyDescription: FormControl<string>;
  positions: FormArray<FormGroup<PositionFormObject>>;
};

type PositionFormObject = {
  positionName: FormControl<string>;
  positionLevel: FormControl<string>;
  positionDescription: FormControl<string>;
  positionStartDate: FormControl<Date | null>;
  positionEndDate: FormControl<Date | null>;
};

type WorkingExperienceForm = {
  datas: FormArray<FormGroup<WorkExperienceFormObject>>;
};

const Modules = [ReactiveFormsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule]
const Components = [
  MatCard,
  MatButton,
  MatFormField,
  MatLabel,
  MatInput,
  MatIconButton,
  MatTooltip,
  MatDivider,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatHint,
  MatDatepicker,
  MatOption,
  MatSelect
]

@Component({
  selector: 'app-task-1',
  standalone: true,
  imports: [
    ...Modules, ...Components
  ],
  providers: [
    provideNativeDateAdapter(),
  ],
  templateUrl: './task-1.component.html',
  styleUrls: ['./task-1.component.scss']
})
export class Task1Component implements OnInit {
  #fb = inject(NonNullableFormBuilder);
  #dtoService = inject(DtoService);
  positionLevels = PositionLevels;

  workingExperienceForm: FormGroup<WorkingExperienceForm> = this.#fb.group({
    datas: this.#fb.array<FormGroup<WorkExperienceFormObject>>([]),
  });

  get formArray(): FormArray<FormGroup<WorkExperienceFormObject>> {
    return this.workingExperienceForm.controls.datas;
  }

  get datas() {
    return this.formArray.controls;
  }

  ngOnInit() {
    this.addFormGroup();
  }

  addFormGroup() {
    const formGroup = this.#fb.group({
      companyName: ['', [Validators.required]],
      companyWebsiteAddress: ['', [Validators.required]],
      companyDescription: ['', [Validators.required]],
      positions: this.#fb.array<FormGroup<PositionFormObject>>([]),
    });

    this.formArray.push(formGroup);
  }

  addPosition(formGroup: FormGroup<WorkExperienceFormObject>) {
    const positions = formGroup.controls.positions;
    const positionGroup = this.#fb.group({
      positionName: ['', Validators.required],
      positionLevel: ['', Validators.required],
      positionDescription: ['', Validators.required],
      positionStartDate: [null as Date | null, Validators.required],
      positionEndDate: [null as Date | null, Validators.required],
    });
    positions.push(positionGroup);
  }

  submitForm() {
    const formValue = this.datas.map((data) => {
      const transformedPositions = data.value.positions?.map((position) => {
        return this.#dtoService.transformDates(position);
      });
      return {
        ...data.value,
        positions: transformedPositions
      };
    }) as WorkingExperienceDto[];

    console.log(formValue);
    this.workingExperienceForm.reset();

  }
  @Confirmable()
  removePosition(companyIndex: number, positionIndex: number) {
    const positionsArray = (this.formArray.at(companyIndex).get('positions') as FormArray);
    positionsArray.removeAt(positionIndex);
  }

  @Confirmable()
  removeCompany(companyIndex: number) {
    this.formArray.removeAt(companyIndex);
  }
}
