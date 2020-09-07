import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './styles.css'
import SantaForm from './SantaForm'
import ErrorPage from './ErrorPage'
import SuccessPage from './SuccessPage'

const App = () => {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  return (
    <div className="App">
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
    </div>
  )
}

export default App;
