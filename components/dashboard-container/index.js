import { createTheme, ThemeProvider } from '@mui/material/styles';

export const themeOptions = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00E6E3',
    },
    secondary: {
      main: '#00FF68',
    },
    background: {
      default: '#0E0E0E',
      paper: '#232323',
    },
    text: {
      primary: '#ffffff',
    },
  },
})


export default function DashboardThemeProvider({children}){
    return(
       <ThemeProvider theme={themeOptions}>
        {children}
       </ThemeProvider>
    )
}