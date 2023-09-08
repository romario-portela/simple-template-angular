import { createSelector } from '@ngrx/store';
import { AppState, selectFeature } from '../reducers/app.reducer';

export const selectUser = createSelector(selectFeature, (state: AppState) => state.usuario);
