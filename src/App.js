import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Container, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SantaForm from './SantaForm'
import ErrorPage from './ErrorPage'
import SuccessPage from './SuccessPage'


const useStyles = makeStyles((theme) => ({
  main: {
    background: theme.palette.secondary.main,
    width: '100vw',
    height: '100vh'
  }
}))

const App = () => {
  const classes = useStyles()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  return (
    <div className='App'>
      <Container component='main' className={classes.main} maxWidth={false}>
        <CssBaseline />
        <Router>
          <Route
            exact path='/'
            render={() =>
              <SantaForm
                setError={setError}
                setSuccess={setSuccess}
              />
            }
          />
          <Route
            exact path='/error'
            render={() => error !== null ?
              <ErrorPage
                error={error}
              /> : <Redirect to='/' />
            }
          />
          <Route exact path='/success'
            render={() => success !== null ?
              <SuccessPage/> : <Redirect to='/' />
            }
          />
        </Router>
      </Container>
    </div>
  )
}

export default App
