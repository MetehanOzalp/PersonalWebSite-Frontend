import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private toastrService: ToastrService
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
          this.toastrService.success('Mesaj gönderildi', 'Başarılı');
          console.log('Mesaj gitti');
        },
        (responseError) => {
          console.log('hata');
        }
      );
      this.contactAddForm.reset();
    } else {
      this.toastrService.error('Lütfen Tüm alanları doldurun', 'Hata');
    }
  }
}
