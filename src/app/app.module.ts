import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StratService } from './strat.service';
import { HttpClientModule }    from '@angular/common/http';




import { AppComponent } from './app.component';
import { StrategiesComponent } from './strategies/strategies.component';


@NgModule({
  declarations: [
    AppComponent,
    StrategiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
  StratService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
