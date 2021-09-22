import { Router } from '@angular/router';
import { ContactService } from './../../../services/contact.service';
import { Contact } from './../../../models/contact';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css'],
})
export class MessageDetailComponent implements OnInit {
  @Input() contact: Contact;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    if (this.contact && !this.contact.status) {
      this.contactService
        .changeStatus(this.contact)
        .subscribe((response) => {});
    }
  }
}
