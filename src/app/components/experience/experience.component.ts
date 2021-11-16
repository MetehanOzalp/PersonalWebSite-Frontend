import { DatePipe } from '@angular/common';
import { ExperienceService } from './../../services/experience.service';
import { Experience } from './../../models/experience';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(
    private experienceService: ExperienceService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getExperiences();
  }

  getExperiences() {
    this.experienceService.getAll().subscribe((response) => {
      this.experiences = response.data;
      this.experiences.forEach((element) => {
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
