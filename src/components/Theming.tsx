import React from 'react';
import {useAppSelector} from '../redux/hooks';
import {ThemeProvider} from 'styled-components';

const lightTheme = {
    name: 'Light',
    bg: '#F7FAFC',
    background: '#FFFFFF',
    card: '#ffffff',
    main: '#3B1E54',
    secondary: '#6B7280',
    text: '#051445',
    text2: '#6B7280',
    text3: 'rgba(0,0,0,0.8)',
    divider: '#e7e5e4',
    border: `rgba(0,0,0,0.4)`,
    switch: '#f2f2f2',
    dark: '#051445',
};

const darkTheme = {
    name: 'Dark',
    bg: '#261E35',
    background: '#261E35',
    card: '#2F293E',
    main: '#372C44',
    secondary: '#8D8598',
    text: '#ffffff',
    text2: '#D8BCFF',
    text3: 'rgba(255,255,255,0.8)',
    divider: 'rgba(255,255,255,0.2)',
    border: `rgba(255,255,255,0.4)`,
    switch: 'rgba(255,255,255,0.2)',
    dark: '#ffffff',
};

const Theming = ({children}: {children: React.ReactNode}) => {
    const {theme} = useAppSelector(state => state.settings);

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            {children}
        </ThemeProvider>
    );
};

export default Theming;
