import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { CardComponent } from './core/components/card/card.component';
import { ScreenComponent } from './core/components/screen/screen.component';
import { SearchbarComponent } from './shared/components/searchbar/searchbar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ScreenComponent,
        CardComponent,
        IonicModule.forRoot()
      ],
      declarations: [
        AppComponent,
        SearchbarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'allianz-assignment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('allianz-assignment');
  });

});
