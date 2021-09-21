import { AboutMeService } from './../../../services/about-me.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me-add',
  templateUrl: './about-me-add.component.html',
  styleUrls: ['./about-me-add.component.css'],
})
export class AboutMeAddComponent implements OnInit {
  aboutMeAddForm: FormGroup;
  selectedFile: File[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private aboutMeService: AboutMeService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.createAboutMeAddForm();
  }

  createAboutMeAddForm() {
    this.aboutMeAddForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      imagePath: ['', Validators.required],
      email: ['', Validators.required],
      job: ['', Validators.required],
      description: ['', Validators.required],
      birthDate: ['', Validators.required],
    });
  }

  add() {
    if (this.aboutMeAddForm.valid) {
      const formData = new FormData();
      for (let i = 0; i < this.selectedFile.length; i++) {
        formData.append(
          'firstName',
          this.aboutMeAddForm.get('firstName')?.value
        );
        formData.append('lastName', this.aboutMeAddForm.get('lastName')?.value);
        formData.append('email', this.aboutMeAddForm.get('email')?.value);
        formData.append('job', this.aboutMeAddForm.get('job')?.value);
        formData.append(
          'description',
          this.aboutMeAddForm.get('description')?.value
        );
        formData.append(
          'birthDate',
          this.aboutMeAddForm.get('birthDate')?.value
        );
        formData.append(
          'image',
          this.selectedFile[i],
          this.selectedFile[i].name
        );
      }
      this.aboutMeService.add(formData).subscribe((response) => {
        console.log('Başarılı');
      });
    } else {
      console.log('eksik');
    }
  }

  onFileSelected(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.selectedFile[i] = <File>event.target.files[i];
      const file = (event.target as HTMLInputElement).files;
      this.aboutMeAddForm.patchValue({
        imagePath: file,
      });
      this.aboutMeAddForm.get('imagePath')?.updateValueAndValidity();
    }
  }
}
