import { SkillService } from './../../../services/skill.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-add',
  templateUrl: './skill-add.component.html',
  styleUrls: ['./skill-add.component.css'],
})
export class SkillAddComponent implements OnInit {
  skillAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private skillService: SkillService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createSkillAddForm();
  }

  createSkillAddForm() {
    this.skillAddForm = this.formBuilder.group({
      skillName: ['', Validators.required],
    });
  }

  add() {
    if (this.skillAddForm.valid) {
      let skillModel = Object.assign({}, this.skillAddForm.value);
      skillModel.skillName = skillModel.skillName;
      console.log(skillModel);
      this.skillService.add(skillModel).subscribe(
        (response) => {
          console.log('Başarılı');
        },
        (responseError) => {
          console.log('Hata');
        }
      );
    } else {
      console.log('Yetenek bilgileri eksik');
    }
  }
}
