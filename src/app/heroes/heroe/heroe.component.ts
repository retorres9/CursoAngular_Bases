import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    heroe: string = 'Ironman';
    edad: number = 45;
    obtenerNombre(): string {
        return `${this.heroe} - ${this.edad}`;
    }
    get nombreCapitalizado () {
        return this.heroe.toUpperCase();
    }

    cambiarNombre(): void {
        this.heroe = 'spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}