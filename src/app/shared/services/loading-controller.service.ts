import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingControllerService {
  constructor(
    public loadingController: LoadingController,
    public errorHandlerService: ErrorHandlerService
  ) {}

  async showLoadingController(loadingMessage) {
    this.loadingController
      .create({
        message: loadingMessage,
        duration: 5000,
        cssClass: 'loader-css-class',
        backdropDismiss: true,
      })
      .then((res) => {
        res.present();
      });
  }

  async dismissLoadingController() {
    this.loadingController
      .dismiss()
      .then((response) => {
        console.log('Loader closed!', response);
      })
      .catch((err) => {
        this.errorHandlerService.handleError(err);
      });
  }
}
