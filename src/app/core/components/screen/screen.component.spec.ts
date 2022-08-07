import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ScreenComponent } from './screen.component';
import { ScreenService } from '../../services/screen.service';
import { Observable, of } from 'rxjs';
import { Country } from '../../domain/country';

describe('ScreenComponent', () => {
  let component: ScreenComponent;
  let fixture: ComponentFixture<ScreenComponent>;

  beforeEach(async () => {
    const screenServiceSpy = jasmine.createSpyObj<ScreenService>(['getCountryData']);
    screenServiceSpy.getCountryData.and.callFake(function ():Observable<Country[]> {
      return of(
        [
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
            },
            "capital": "",
            "subregion": "",
            "population": ""
          }
        ]
      )
    })

    await TestBed.configureTestingModule({
      declarations: [ ScreenComponent ],
      providers: [
        {
          provide: ScreenService,
          useValue: screenServiceSpy
        }
      ],
      imports: [
        HttpClientTestingModule 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create screen component', fakeAsync(() => {
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));
});

