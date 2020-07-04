import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { FruitsPageComponent } from './fruits-page/fruits-page.component';
import { FruitsService } from './fruits.service';
import { AppRoutingModule } from './app-routing.module';
import { FruitPageComponent } from './fruit-page/fruit-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    FruitsPageComponent,
    FruitPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FruitsService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
