import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HomeUpperSectionComponent } from './components/home-upper-section/home-upper-section.component';
import { HomeMiddleSectionComponent } from './components/home-middle-section/home-middle-section.component';
import { HomeLowerSectionComponent } from './components/home-lower-section/home-lower-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    HomeUpperSectionComponent,
    HomeMiddleSectionComponent,
    HomeLowerSectionComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
