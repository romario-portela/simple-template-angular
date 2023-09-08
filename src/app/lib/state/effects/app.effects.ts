import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@lib/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { AppActionTypes } from '../actions/app.action';

@Injectable({
    providedIn: 'root',
})
export class AppEffects {
    private readonly _actions$ = inject(Actions);
    private readonly _auth$ = inject(AuthService);
    private readonly _router = inject(Router);

    login$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(AppActionTypes.Login),
                tap(() => [this._auth$.login()]),
            ),
        { dispatch: false },
    );

    logout$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(AppActionTypes.Logout),
                tap(() => [this._auth$.logout(), this._router.navigate(['/auth/login'])]),
            ),
        { dispatch: false },
    );
}
