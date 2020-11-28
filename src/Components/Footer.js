import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "@material-ui/core/Grid";
import React from "react";
import {Typography} from "@material-ui/core";
import {faCopyright} from "@fortawesome/free-solid-svg-icons"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FF5733",
    height: 60,
    width: '100%',
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  extend: {
    flexGrow: 1,
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 500,
    paddingLeft: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
      marginLeft: '2rem',
    },
  },
  otherText: {
    color: 'white',
    [theme.breakpoints.down("sm")]: {
      marginLeft: '4rem',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
    <Grid
      className={classes.root}
      container
      alignItems="center"
    >
      <div className={classes.extend}>
        <Grid item md = {3} lg>
          <Typography className = {classes.header}> Reynerio Sarmiento </Typography>
        </Grid>
      </div>
      <div style = {{paddingRight: 30}}>
      <Grid item style = {{paddingBottom: 3}}>
          <Typography className = {classes.otherText}>  Made With: React - Material-UI - JavaScript - CSS </Typography>
        </Grid>
      <Grid item >
          <Typography className = {classes.otherText}> <FontAwesomeIcon icon={faCopyright} /> Reynerio Sarmiento, 2020 all rights reserved </Typography>
        </Grid>
        </div>
    </Grid>
    </div>
  );
}
