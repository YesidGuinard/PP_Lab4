import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PaisesService} from '../../services/paises.service';
import {Pais} from '../../class/pais';

@Component({
    selector: 'app-tabla-paises',
    templateUrl: './tabla-paises.component.html',
    styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {


    listadoPaises: Pais[] = [];


    @Output() eventSelectedItem: EventEmitter<Pais> = new EventEmitter();

    constructor(private paisesService: PaisesService) {

    }

    ngOnInit(): void {
        this.paisesService.getPaises('americas').subscribe(
            (data: Pais[]) => {
                this.listadoPaises = data;
            },
            (err: Error) => {
                console.log('Fallo obteniendo paises', err);
            }
        );

    }

    onSelectUsuario(pais: Pais) {
        this.eventSelectedItem.emit(pais);
        console.log('pais select: ', pais);
    }
}
