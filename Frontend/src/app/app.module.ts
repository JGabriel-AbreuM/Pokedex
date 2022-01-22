import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { PokemonReadComponent } from './components/pokemons/pokemon-read/pokemon-read.component';
import { HomeComponent } from './views/home/home.component';
import { HeadComponent } from './components/templates/head/head.component';
import { PokemonCreateComponent } from './components/pokemons/pokemon-create/pokemon-create.component';
import { PokemonDeleteComponent } from './components/pokemons/pokemon-delete/pokemon-delete.component';
import { OtpComponent } from './components/accounts/otp/otp.component';
import { RegisterComponent } from './components/accounts/register/register.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { PokemonDetailComponent } from './components/pokemons/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokemonReadComponent,
    HomeComponent,
    HeadComponent,
    PokemonCreateComponent,
    PokemonDeleteComponent,
    OtpComponent,
    RegisterComponent,
    LoginComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
