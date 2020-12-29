import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Paper, Button, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    padding: '2rem 3rem'
  },
  container: {
    paddingTop: theme.spacing(6)
  }
}))


const ErrorPage = ({ error }) => {
  const classes = useStyles()

  if (!error) {
    return null
  }


  return (
    <Container maxWidth='sm' variant='outlined' className={classes.container} >
      <div>
        <Paper className={classes.paper}>
          <Typography variant='h4' component='h1' align='center' color='primary' gutterBottom>エラーが発生しました。</Typography>
          <Typography paragraph>{error}</Typography>
          <Grid container justify="center">
            <Button id='returnHome' variant='contained' component={Link} to='/' color='primary' align='center'>Return to Wishlist</Button>
          </Grid>
        </Paper>
      </div>
    </Container>
  )
}

export default ErrorPage
