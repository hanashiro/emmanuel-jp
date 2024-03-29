import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#9661ff',
            main: '#6B2AEE',
            dark: '#581ECD',
        },
        secondary: {
            light: '#2bfff2',
            main: '#02E7D9',
            dark: '#1dd6cb',
        },
        text: {
            primary: '#707070',
            secondary: '#9B9B9B',
        },
        error: {
            main: '#FC3C00',
        },
        warning: {
            main: '#FCA600',
        },
        success: {
            main: '#00D34D',
        },
        grey: {
            50: '#FAFAFA',
            100: '#F0F0F0',
            200: '#D7D9DD',
            300: '#C4C4C4',
            400: '#9B9B9B',
        },
    },
    typography: {
        fontFamily: 'Arial, Tahoma, Verdana, sans-serif',
    },
    shape: {
        borderRadius: 3,
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: '0.875rem',
                    borderRadius: 4,
                },
            },
        },
    },
});

export default theme;

