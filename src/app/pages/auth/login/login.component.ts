import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '@lib/state/actions/app.action';
import { Store } from '@ngrx/store';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    @Input() returnUrl!: string;

    private readonly _router = inject(Router);
    private readonly _store = inject(Store);

    login(): void {
        this._store.dispatch(new Login());

        this._router.navigate([this.returnUrl ?? `/`]);
    }
}
