import React from 'react'
import { Typography } from '@material-ui/core'

const ErrorMessage = ({ error }) => {
  if (error) {
    switch (error.type) {
    case 'required':
      return <Typography variant='subtitle2' color='error' paragraph>Field is required</Typography>
    case 'maxLength':
      if(error.ref.name === 'wish') {
        return <Typography className='notification' color='error' paragraph>Max length is 100 letters</Typography>
      }
      else {
        return <Typography className='notification' color='error'>Max length is 20 letters</Typography>
      }
    default:
      return null
    }
  }

  return null
}

export default ErrorMessage
