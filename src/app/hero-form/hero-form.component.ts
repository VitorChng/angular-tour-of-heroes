import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {

  constructor(private heroService: HeroService) {}

  heroes: Hero[] = [];

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(0, 'Dr Qualquercoisa', this.powers[0], 'Identaidade Secreta');

  Clear() {
    this.model = new Hero(0, '', '');
  }
  // para o formulario continuar aparecendo depois da 1 submição
  submitted = true;


  onSubmit(heroForm: NgForm) { this.submitted = true;
    let name :string = heroForm.value.name

    this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    }); 
  }

}