import {Component, OnInit} from '@angular/core';
import {Actor} from '../../class/actor';

@Component({
    selector: 'app-alta-actor',
    templateUrl: './alta-actor.component.html',
    styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
    pais;
    actorTemp: Actor;

    constructor() {
        this.actorTemp = new Actor();
    }

    ngOnInit(): void {
    }

    paisSeleccionado(pais) {

        this.actorTemp.pais = pais;
        this.pais = pais.name;
        console.log(pais);
    }

    crearActor(event) {


    }

}
