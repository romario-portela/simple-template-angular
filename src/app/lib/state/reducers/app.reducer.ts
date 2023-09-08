import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { AppAction, AppActionTypes } from '../actions/app.action';

export interface AppState extends EntityState<unknown> {
    usuario: string;
}

export const adapter: EntityAdapter<unknown> = createEntityAdapter<unknown>();

export const initialState: AppState = adapter.getInitialState({
    usuario: '',
});

export const selectFeature = createFeatureSelector<AppState>('app');

export function reducer(state = initialState, action: AppAction): AppState {
    switch (action.type) {
        case AppActionTypes.AddUser: {
            return { ...state, usuario: action.usuario };
        }
        default: {
            return state;
        }
    }
}
