import {Component, OnInit} from '@angular/core';
import {Pais} from '../../class/pais';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

    selectedItem: Pais;

    constructor() {
    }

    ngOnInit(): void {
    }

}
