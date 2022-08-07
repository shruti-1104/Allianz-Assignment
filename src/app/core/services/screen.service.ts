import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Country } from './country';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  constructor(
    public http: HttpClient,
    public errorHandlerService: ErrorHandlerService
  ) {}

  public getCountryData(): Observable<Country[]> {
    const countryUrl = 'https://restcountries.com/v3.1/all';

    return this.http
      .get<Country[]>(countryUrl)
      .pipe(tap(), catchError(this.errorHandlerService.handleError));
  }
}
