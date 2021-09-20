import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  getProjects() {
    this.projectService.getAll().subscribe((response) => {
      this.projects == response.data;
    });
  }
}
