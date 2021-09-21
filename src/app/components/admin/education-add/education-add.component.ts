import { EducationService } from './../../../services/education.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css'],
})
export class EducationAddComponent implements OnInit {
  educationAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private educationService: EducationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createEducationAddForm();
  }

  createEducationAddForm() {
    this.educationAddForm = this.formBuilder.group({
      schoolName: ['', Validators.required],
      fieldOfStudy: ['', Validators.required],
      degree: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [],
    });
  }

  add() {
    if (this.educationAddForm.valid) {
      let educationModel = Object.assign({}, this.educationAddForm.value);
      educationModel.schoolName = educationModel.schoolName;
      educationModel.fieldOfStudy = educationModel.fieldOfStudy;
      educationModel.degree = educationModel.degree;
      educationModel.startDate = educationModel.startDate;
      educationModel.endDate = educationModel.endDate;
      this.educationService.add(educationModel).subscribe(
        (response) => {
          console.log('Başarılı');
        },
        (responseError) => {
          console.log(responseError);
          console.log('Hata');
        }
      );
    } else {
      console.log('Eğitim bilgileri eksik');
    }
  }
}
