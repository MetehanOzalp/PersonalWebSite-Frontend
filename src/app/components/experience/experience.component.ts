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

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.getExperiences();
  }

  getExperiences() {
    this.experienceService.getAll().subscribe((response) => {
      this.experiences = response.data;
    });
  }
}
