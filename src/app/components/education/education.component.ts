import { EducationService } from './../../services/education.service';
import { Education } from './../../models/education';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educations: Education[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.getEducations();
  }

  getEducations() {
    this.educationService.getAll().subscribe((response) => {
      this.educations = response.data;
    });
  }
}
