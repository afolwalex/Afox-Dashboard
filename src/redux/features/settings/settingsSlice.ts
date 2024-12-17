import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import settingsService from './settingsService';

type Option = {
    minimized: boolean;
    pinned: boolean;
};

const initialState = {
    theme: 'light',
    sidebar: {
        minimized: true,
        pinned: false,
    },
};

export const setTheme = createAsyncThunk(
    'basic/theme',
    async (theme: string) => {
        return theme;
    },
);

export const sidebarSetting = createAsyncThunk(
    'basic/sidebar',
    async (option: Option) => {
        return option;
    },
);

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(setTheme.fulfilled, (state, action) => {
            state.theme = action.payload || 'light';
        });
        builder.addCase(sidebarSetting.fulfilled, (state, action) => {
            state.sidebar.minimized = action.payload.minimized;
            state.sidebar.pinned = action.payload.pinned;
        });
    },
});

export default settingsSlice.reducer;
