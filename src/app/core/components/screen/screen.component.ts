import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { LoadingControllerService } from 'src/app/shared/services/loading-controller.service';
import { Country } from '../../domain/country';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent implements OnInit {
  public countriesData: Country[];
  public countriesDataProcessed: Country[];
  public filterPlaceholder: string = 'Search Country...';

  constructor(
    private screenService: ScreenService,
    private loadingController: LoadingControllerService,
    public errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.getCountriesData();
  }

  //This funtion gets country data from API
  private getCountriesData() {
    const loadingMessage = 'Please Wait...';
    this.loadingController.showLoadingController(loadingMessage);
    this.screenService.getCountryData().subscribe(
      (response) => {
        this.countriesData = response;
        this.countriesDataProcessed = JSON.parse(
          JSON.stringify(this.countriesData)
        );
        this.loadingController.dismissLoadingController();
      },
      (error) => {
        this.errorHandlerService.handleError(error);
        this.loadingController.dismissLoadingController();
      }
    );
  }

  //This function filters the list based on the search input
  public filterInput(inputValue) {
    const inputValueParam = inputValue.toLowerCase();
    this.countriesDataProcessed = this.countriesData.filter(
      (country) =>
        country.name.common.toLowerCase().indexOf(inputValueParam) > -1
    );
  }
}
