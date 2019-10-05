import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#08708A',
      main: '#08708A',
      dark: '#08708A',
      contrastText: '#FFF',
      opacity: (opacity) => `rgba(8, 112, 138, ${opacity})`,
    },
    secondary: {
      light: '#FFF',
      main: '#FFF',
      dark: '#FFF',
      contrastText: '#032B2F',
    },
    accent: {
      white: '#D0D3C5',
      red: '#D73A31',
      light: {
        main: '#56B1BF',
        opacity: (opacity) => `rgba(86, 177, 191, ${opacity})`,
      },
      dark: '#032B2F',
    }
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    h6: {
      fontFamily: 'Mansalva, cursive',
      fontSize: '2.25rem',
    }
  },
});