import { DatePipe } from '@angular/common';
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

  constructor(
    private educationService: EducationService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getEducations();
  }

  getEducations() {
    this.educationService.getAll().subscribe((response) => {
      this.educations = response.data;
      this.educations.forEach((element) => {
        if (element.startDate) {
          var startDate: any = this.datePipe.transform(
            element.startDate,
            'yyyy'
          );
          element.startDate = startDate;
        }
        if (element.endDate) {
          var endDate: any = this.datePipe.transform(element.endDate, 'yyyy');
          element.endDate = endDate;
        }
      });
    });
  }
}
