import React from 'react'
import { Link }  from 'react-router-dom'
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

const SuccessPage = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='sm' className={classes.container}>
      <div>
        <Paper className={classes.paper}>
          <Typography variant='h4' component='h1' align='center' color='primary' gutterBottom>Santa has received your wish！</Typography>
          <Typography paragraph align='center'>If you have been a good kid this year...</Typography>
          <Typography paragraph align='center'>Your wish might just be granted!</Typography>
          <Grid container justify="center">
            <Button id='returnHome' variant='contained' component={Link} to='/' color='primary' align='center'>Return to Wishlist</Button>
          </Grid>
        </Paper>
      </div>
    </Container>
  )
}

export default SuccessPage
