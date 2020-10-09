import {Component, OnInit} from '@angular/core';
import {Actor} from '../../class/actor';
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
        this.actorTemp.id = Math.floor(Math.random() * 200) + 0;
    }

    ngOnInit(): void {
    }

    paisSeleccionado(pais) {
        this.actorTemp.pais = pais;
        this.pais = pais.name;
        console.log(pais);
    }

    crearActor(event) {
        console.log(this.actorTemp);
        Swal.fire(
            'Exitoso',
            'Actor Creado',
            'success'
        );

    }

}
