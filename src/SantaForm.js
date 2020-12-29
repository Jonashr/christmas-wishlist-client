import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ErrorMessage from './ErrorMessage'
import { Container, Typography, Paper, TextField, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5)
  },
  submit: {
    marginTop: theme.spacing(1)
  },
  form: {
    margin: '2rem 3rem'
  },
  formControl: {
    marginBottom: theme.spacing(1)
  }
}))

const SantaForm = ({ setError, setSuccess }) => {
  const { register, handleSubmit, errors } = useForm()
  const classes = useStyles()
  const history = useHistory()

  const onSubmit = async(formData) => {
    const request = {
      username: formData.username,
      wish: formData.wish
    }

    try {
      const response = await axios.post('/wishlist', request)
      console.log('Response', response)
      if(response) {
        setSuccess(true)
        history.push('/success')
      }
    } catch(error) {
      if(error.response.data.error) {
        if(error.response.status === 400) {
          // Older than 10 years
          setError('Unfortunately, santa will not grant the wishes for kids over 10 years. You are too old for writing wishlists to Santa.')
        } else if(error.response.status === 404) {
          // Not found
          setError('This user does not exist. Please make sure that the name has been spelled correctly and try again.')
        } else {
          // Error besides those two occured, generic error message.
          setError('An error occured. Please try again later.')
        }
      } else {
        // Didnt make it to the client
        setError('An error occured when trying to send the wishlist to Santa Claus. Please try again later')
      }
      history.push('/error')
    }
  }

  return (
    <Container component='main' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center' color='primary'>A Letter to Santa</Typography>

      <Paper variant='outlined' className={classes.paper}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Typography variant='subtitle1' component='h2'>Merry christmas! What do you wish for? Please write down your wish and let santa know what you want!</Typography>
          <div>
            <TextField
              fullWidth
              className={classes.formControl}
              variant='outlined'
              name="username"
              label='Your username'
              placeholder="charlie.brown"
              color="secondary"
              id="username"
              error={errors.username ? true : false}
              inputRef={register({ required: true, maxLength: 20 })}
            />
          </div>
          <ErrorMessage error={errors.username} />
          <div>
            <TextField
              name="wish"
              fullWidth
              variant='outlined'
              label="Your Wish"
              multiline
              rows="6"
              className={classes.formControl}
              id="wish"
              error={errors.wish ? true : false}
              placeholder="World Peace, Corona Virus Vaccine, Playstation 5"
              color="secondary"
              inputRef={register({ required: true, maxLength: 100 })}>
            </TextField>
          </div>
          <ErrorMessage error={errors.wish} />
          <Grid container justify="center">
            <Button
              className={classes.submit}
              id='wishSubmit'
              type="submit"
              variant='contained'
              color='primary'
            >
              Send your letter
            </Button>
          </Grid>
        </form>
      </Paper>

    </Container>
  )
}

export default SantaForm




