import { Component } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {
  person: Person = {} as Person;

  constructor(private personService: PersonService) {}

  onSubmit(): void {
    this.personService.create(this.person).subscribe(() => {
      // Implement navigation to the list page
    });
  }
}
