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
    act: Actor;

    constructor() {
        this.act = new Actor();
        this.act.id = Math.floor(Math.random() * 200) + 0;
    }

    ngOnInit(): void {
    }

    paisSeleccionado(pais) {
        this.act.pais = pais;
        this.pais = pais.name;
        console.log(pais);
    }

    crearActor(event) {
        if (this.act.nombre  && this.act.apellido && this.act.sexo  && this.act.fechaDeNacimiento) {
            Swal.fire(
                'Exitoso',
                'Actor Creado',
                'success'
            );
        } else {
            Swal.fire(
                'Error',
                'Completar Datos',
                'warning'
            );
        }
    }

}
