import { ContactService } from './../../../services/contact.service';
import { Contact } from './../../../models/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  contacts: Contact[] = [];
  selectedContact: Contact;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getAll().subscribe((response) => {
      this.contacts = response.data;
    });
  }

  selectionContact(contact: Contact) {
    this.selectedContact = contact;
  }
}
