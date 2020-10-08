import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PaisesService {
    url = 'https://restcountries.eu/rest/v2/region/';

    constructor(private http: HttpClient) {
    }

    getPaises(region: string): Observable<any> {
        const http = this.url + region;
        return this.http.get(http);
    }
}
