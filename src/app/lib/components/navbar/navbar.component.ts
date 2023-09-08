import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Logout } from '@lib/state/actions/app.action';
import { selectUser } from '@lib/state/selectors/app.selector';
import { Store, select } from '@ngrx/store';
import { LogoComponent } from '../logo/logo.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule, LogoComponent],
    templateUrl: './navbar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    store = inject(Store);

    user$ = this.store.pipe(select(selectUser));

    onClickSignOut(): void {
        this.store.dispatch(new Logout());
    }
}
