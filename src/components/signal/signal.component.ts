import { Component, computed, signal } from '@angular/core';
import { ButtonnComponent } from '../../reusable-components/buttonn/buttonn.component';
import { FormsModule } from '@angular/forms';

interface City {
  city: string;
  isVisit: boolean;
}

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [ButtonnComponent, FormsModule],
  templateUrl: './signal.component.html',
})
export class SignalComponent {
  firstname = signal<string>('Home');
  lastname = signal<string>('lander');
  computedName = computed(() => this.firstname() + this.lastname());

  num1 = signal(0);
  num2 = signal(0);
  sum = computed(() => this.num1() + this.num2());

  incrementNum1() {
    this.num1.set(this.num1() + 2);
  }

  incrementNum2() {
    this.num2.set(this.num2() + 1);
  }

  changeFirstName() {
    this.firstname.set('Billy ');
  }

  changeLastName() {
    this.lastname.set('Butcher');
  }

  // ----------------------------------------------

  cities = signal<City[]>([
    { city: 'Bengaluru', isVisit: true },
    { city: 'Pune', isVisit: true },
    { city: 'Hyderabad', isVisit: false },
    { city: 'Chennai', isVisit: false },
  ]);

  cityName = '';
  isVisited = false;

  addCity() {
    if (this.cityName && !this.cityExists(this.cityName)) {
      this.cities.set([
        ...this.cities(),
        {
          city: this.cityName,
          isVisit: this.isVisited,
        },
      ]);
      this.cityName = '';
      this.isVisited = false;
    } else {
      this.cityName = '';
      this.isVisited = false;
    }
  }

  cityExists(cityName: string): boolean {
    return this.cities().some(
      (city) => city.city.toLowerCase() === cityName.toLowerCase()
    );
  }

  toggleIsVisited(city: City) {
    this.cities.update((cities) =>
      cities.map((c) =>
        c.city === city.city ? { ...c, isVisit: !c.isVisit } : c
      )
    );
  }
}
