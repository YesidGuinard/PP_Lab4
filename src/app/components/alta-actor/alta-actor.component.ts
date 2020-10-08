import {Component, Input, OnInit} from '@angular/core';
import {Pais} from '../../class/pais';
import {Actor} from '../../class/actor';

@Component({
    selector: 'app-alta-actor',
    templateUrl: './alta-actor.component.html',
    styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
    @Input() pais: Pais;

    actorTemp: Actor;

    constructor() {
        this.actorTemp = new Actor();
    }

    ngOnInit(): void {
    }

    paisSeleccionado(pais) {

        this.pais = pais;
    }

    crearActor(event) {

    }

}
