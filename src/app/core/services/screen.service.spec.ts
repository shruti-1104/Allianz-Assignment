import { TestBed } from '@angular/core/testing';
import { ScreenService } from './screen.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ScreenService', () => {
  let service: ScreenService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(ScreenService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return country result', () => {
    service.getCountryData().subscribe( result => {
      expect(result).toBeTruthy();
      expect(result.results).toBeTruthy();
      expect(result.results.length).toEqual(1);
    })

    const req = httpMock.expectOne('https://restcountries.com/v3.1/all');
    expect(req.request.method).toBe('GET');
    req.flush({
      results: [
        {
          "name": {
            "common": "India",
            "official": "Republic of India",
            "nativeName": {
              "eng": {
                "official": "Republic of India",
                "common": "India"
              },
              "hin": {
                "official": "भारत गणराज्य",
                "common": "भारत"
              },
              "tam": {
                "official": "இந்தியக் குடியரசு",
                "common": "இந்தியா"
              }
            }
          }
      ]
    })
  });
});

