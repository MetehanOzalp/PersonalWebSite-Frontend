import { AboutMe } from './../../models/aboutMe';
import { AboutMeService } from './../../services/about-me.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  aboutMe: AboutMe = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    imagePath: '',
    description: '',
    job: '',
    birthDate: new Date(),
  };
  constructor(private aboutMeService: AboutMeService) {}

  ngOnInit(): void {
    this.getAboutMe();
  }

  getAboutMe() {
    this.aboutMeService.get().subscribe((response) => {
      this.aboutMe = response.data;
    });
  }
}
