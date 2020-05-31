import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas
import { APP_ROUTING } from './app.routes';
//Servicios
import { HeroesService } from './servicios/heroes.service';
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultadoHeroesComponent } from './components/resultado-heroes/resultado-heroes.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { FooterComponent } from './components/shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    ResultadoHeroesComponent,
    HeroeCardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
