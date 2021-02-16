import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Hulk','Thor','Ironman','Spider'];
  heroeBorrado: string = '';
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
    
  }
}
