import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import StandardsQuery from './StandardsQuery'
import StandardsViz from './StandardsViz'

export default function Dashboard() {
  const theme = useTheme()

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }))
  const classes = useStyles(theme)

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        {/* Recent Reviews */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <StandardsViz />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {/* Recent Reviews */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <StandardsQuery />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
