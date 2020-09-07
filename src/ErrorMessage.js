import React from 'react'

const ErrorMessage = ({ error }) => {
  if (error) {
    switch (error.type) {
    case 'required':
      return <p className='notification'>必須</p >
    case 'maxLength':
      return <p className='notification'>願いは１００文字までお願いします</p>
    default:
      return null
    }
  }

  return null
}

export default ErrorMessage
