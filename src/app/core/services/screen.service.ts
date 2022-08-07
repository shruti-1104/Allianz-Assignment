import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Country } from '../domain/country';

@Injectable({
  providedIn: 'root',
})

export class ScreenService {
  constructor(
    public http: HttpClient,
    public errorHandlerService: ErrorHandlerService
  ) {}

  //Ideally the BASE URL is present in a config file 
  public BASE_URL = 'https://restcountries.com';

  public getCountryData(): Observable<Country[]> {

    const countryUrl = '/v3.1/all';

    return this.http
      .get<Country[]>(this.BASE_URL + countryUrl)
      .pipe(tap(), catchError(this.errorHandlerService.handleError));
  }
}
