import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.createContactAddForm();
  }

  createContactAddForm() {
    this.contactAddForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  add() {
    if (this.contactAddForm.valid) {
      let contactModel = Object.assign({}, this.contactAddForm.value);
      contactModel.firstName = contactModel.firstName;
      contactModel.lastName = contactModel.lastName;
      contactModel.email = contactModel.email;
      contactModel.subject = contactModel.subject;
      contactModel.message = contactModel.message;
      this.contactService.add(contactModel).subscribe(
        (response) => {
          console.log('Mesaj gitti');
        },
        (responseError) => {
          console.log('hata');
        }
      );
    }
  }
}
