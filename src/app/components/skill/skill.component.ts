import { Skill } from './../../models/skill';
import { SkillService } from './../../services/skill.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  skills: Skill[];

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills() {
    this.skillService.getAll().subscribe((response) => {
      this.skills = response.data;
    });
  }
}
