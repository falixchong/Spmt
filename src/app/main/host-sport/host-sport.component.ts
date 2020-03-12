import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-host-sport',
  templateUrl: './host-sport.component.html',
  styleUrls: ['./host-sport.component.css']
})
export class HostSportComponent {
  hostSportForm = this.fb.group({
    groupName: [null, Validators.required],
    groupDesc: [null, Validators.required],
    location: [null, Validators.required],
    groupPreference: ['public', Validators.required],
    joinPreference: ['anyone', Validators.required],
    sportTypes: [null, Validators.required]
  });

  hasUnitNumber = false;

  sportTypes = [
    {name: 'Badminton'},
    {name: 'Basketball'},
    {name: 'Table Tennis'},
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
