import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  }),
);

export default function CSSGrid() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom component="div">
        Material-UI Grid:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom component="div">
        CSS Grid Layout:
      </Typography>
      <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 8' }}>
          <Paper className={classes.paper}>xs=8</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 4' }}>
          <Paper className={classes.paper}>xs=4</Paper>
        </div>
      </div>
    </div>
  );
}