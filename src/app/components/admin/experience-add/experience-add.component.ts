import { ExperienceService } from './../../../services/experience.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css'],
})
export class ExperienceAddComponent implements OnInit {
  experienceAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createExperienceAddForm();
  }

  createExperienceAddForm() {
    this.experienceAddForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      positionName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [],
    });
  }

  add() {
    if (this.experienceAddForm.valid) {
      let experienceModel = Object.assign({}, this.experienceAddForm.value);
      experienceModel.companyName = experienceModel.companyName;
      experienceModel.positionName = experienceModel.positionName;
      experienceModel.startDate = experienceModel.startDate;
      experienceModel.endDate = experienceModel.endDate;
      this.experienceService.add(experienceModel).subscribe(
        (response) => {
          console.log('Başarılı');
        },
        (responseError) => {
          console.log('Hata');
        }
      );
    } else {
      console.log('Deneyim bilgileri eksik');
    }
  }
}
