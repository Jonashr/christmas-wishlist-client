import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { red, green } from '@material-ui/core/colors/'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500]
    },
  },

})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)