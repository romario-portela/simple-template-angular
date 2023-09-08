import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { jwtInterceptor, serverErrorInterceptor } from '@lib/interceptors';
import { AppEffects } from '@lib/state/effects/app.effects';
import { reducers } from '@lib/state/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withComponentInputBinding()),
        provideHttpClient(withInterceptors([serverErrorInterceptor, jwtInterceptor])),
        importProvidersFrom(
            EffectsModule.forRoot([AppEffects]),
            StoreModule.forFeature('app', reducers.app),
            StoreModule.forRoot({}, {}),
        ),
    ],
};
