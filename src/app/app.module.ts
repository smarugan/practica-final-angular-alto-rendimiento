import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { StatusRoutingModule } from './status-page/status-routing.module';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StatusEffects } from './store/status/status.effects';
import { LaunchEffects } from './store/launch/launch.effects';
import { MissionTypeEffects } from './store/mission-type/mission-type.effects';
import { StatusPageComponent } from './status-page/status-page.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { LaunchPageComponent } from './launch-page/launch-page.component';
import { LaunchRoutingModule } from './launch-page/launch-page-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    StatusPageComponent,
    LaunchPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LaunchRoutingModule,
    StatusRoutingModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([StatusEffects, LaunchEffects, LaunchEffects, MissionTypeEffects, LaunchEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
