import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UtilisateurService} from './core/services/utilisateur.service';
import {SondageService} from './core/services/sondage.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { RegisterComponent } from './core/components/register/register.component';
import { AddDoodleComponent } from './core/components/add-doodle/add-doodle.component';
import { MesDoodleComponent } from './core/components/mes-doodle/mes-doodle.component';
import { LogoutComponent } from './core/components/logout/logout.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adddoodle', component: AddDoodleComponent },
  { path: 'mesdoodle', component: MesDoodleComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    AddDoodleComponent,
    MesDoodleComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    FormsModule,
    CheckboxModule,
    CalendarModule,
    MessagesModule,
    MessageModule,
    HttpClientModule,
    PanelModule,
    CardModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    UtilisateurService,
    SondageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
