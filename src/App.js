import { createMuiTheme, ThemeProvider as MuiTheme } from '@material-ui/core';
import React from 'react'
import LoginLayout from './components/LoginLayout';

const palette = {
  primary: {
    main: '#000000',
    contrastText: '#ffffff'
  },
  secondary: {
    main: '#CA3135',
    contrastText: '#ffffff'
  }
};

const theme = createMuiTheme({
  palette: palette
})



const App = () => {
  return (
    <MuiTheme theme={theme}>
      <LoginLayout />
    </MuiTheme>


  )
}

export default App
