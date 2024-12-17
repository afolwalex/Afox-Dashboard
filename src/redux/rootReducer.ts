import {combineReducers} from '@reduxjs/toolkit';
import settingsSlice from './features/settings/settingsSlice';

const rootReducer = combineReducers({
    settings: settingsSlice,
});

export default rootReducer;
