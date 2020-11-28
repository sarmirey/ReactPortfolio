import {
  Box,
  Button,
  Grid,
  Hidden,
  Link,
  Typography,
} from "@material-ui/core/";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import Resume from '../../Files/Resume.pdf';
import WebIcon from "@material-ui/icons/Web";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: 120,
    [theme.breakpoints.only("md")]: {
      marginTop: 25,
      paddingLeft: 10,
    },
  },
  underline: {
    width: "8rem",
    height: "0.25rem",
    marginBottom: 0,
    background: "#FF5733",
    marginLeft: 0,
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  fontStyle: {
    fontFamily: '"Roboto",sans-serif',
    fontSize: "4rem",
    color: "black",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "3rem",
    },
  },
  hoverEffect: {
    fill: "black",
    "&:hover": {
      fill: "#FF5733",
      transition: "all 0.3s linear",
    },
  },
  centralize: {
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  centralizeText: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  buttonStyle: {
    marginTop: 20,
    outline: "none",
    background: "#FF5733",
    color: "black",
    textTransform: "uppercase",
    padding: "0.35rem",
    display: "inline-block",
    letterSpacing: "0.25rem",
    fontWeight: 700,
    transition: "all 0.3s linear",
    fontSize: "0.875rem",
    border: "2px solid transparent",
    borderRadius: "0.8rem",
    cursor: "pointer",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
    "&:hover": {
      background: "#FF7233",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));
export default function Info() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.underline} />
      <Typography className={classes.fontStyle}>
        {" "}
        Reynerio Sarmiento{" "}
      </Typography>
      <Box
        className={classes.centralizeText}
        fontSize="h5.fontSize"
        fontStyle="italic"
        variant="h5"
      >
        Aspiring Full Stack Developer | LatinX | Lover of Food{" "}
      </Box>
      <Box className = {classes.centralizeText}>
        <Button
          href= {Resume}
          target="_blank"
          variant="contained"
          rel="noopener noreferrer"
          className={classes.buttonStyle}
        >
          Resume
        </Button>
      </Box>
      <Grid container className={classes.centralize}>
        <Grid item xs={2} sm = {2} md={2} lg = {1}>
          <Link
            href="https://www.linkedin.com/in/reynerio-s-5b5876106/"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon fontSize="large" className={classes.hoverEffect} />
          </Link>
        </Grid>
        <Grid item xs={2} md={2} sm = {2}  lg = {1}>
          <Link
            href="https://github.com/sarmirey"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon fontSize="large" className={classes.hoverEffect} />
          </Link>
        </Grid>
        <Grid item xs={2} md={2} sm = {2}  lg = {1}>
          <Link
            href="https://medium.com/hack-diversity-movement/cohort-stories-meet-reynerio-fa1a543ccc2f"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            <WebIcon fontSize="large" className={classes.hoverEffect} />
          </Link>
        </Grid>
      </Grid>
      <Hidden mdUp>
        <div className={classes.underline} />
      </Hidden>
    </div>
  );
}
