import { HttpClient } from '@angular/common/http';
import { ProjectService } from './../../../services/project.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css'],
})
export class ProjectAddComponent implements OnInit {
  projectAddForm: FormGroup;
  selectedFile: File[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.createProjectAddForm();
  }

  createProjectAddForm() {
    this.projectAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      githubLink: ['', Validators.required],
      imagePath: ['', Validators.required],
    });
  }

  add() {
    if (this.projectAddForm.valid) {
      const formData = new FormData();
      for (let i = 0; i < this.selectedFile.length; i++) {
        formData.append('name', this.projectAddForm.get('name')?.value);
        formData.append(
          'githubLink',
          this.projectAddForm.get('githubLink')?.value
        );
        formData.append(
          'image',
          this.selectedFile[i],
          this.selectedFile[i].name
        );
      }
      this.projectService.add(formData).subscribe((response) => {
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
      this.projectAddForm.patchValue({
        imagePath: file,
      });
      this.projectAddForm.get('imagePath')?.updateValueAndValidity();
    }
  }
}
