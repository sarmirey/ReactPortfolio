import { Button, Grid, Typography } from "@material-ui/core/";
import React, { useState } from "react";

import Card from "./CardLayout";
import headersdata from "./headers";
import { makeStyles } from "@material-ui/core/styles";
import personalprojdata from "./data/personalprojectdata";
import udemyprojectsdata from "./data/udemyprojects";
import workprojectsdata from "./data/workprojectsdata";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: 20,
  },
  underline: {
    width: "5rem",
    height: "0.25rem",
    marginTop: "0.5rem",
    background: "#FF5733",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "1rem",
  },
  headersStyle: {
    color: "black",
    marginTop: 20,
    fontSize: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.15rem",
    cursor: "pointer",
    background: "transparent",
    "&:hover": {
      boxShadow: "-5px 0 #FF5733",
      color: "#FF5733",
    },
    [theme.breakpoints.down("sm")]: {
      "&:hover": {
        boxShadow: "0 0 0 #FF5733",
        color: "#FF5733",
      },
      fontSize: '1rem',
    },
  },
  headerSelected: {
    fontSize: "1rem",
    marginTop: 20,
    textTransform: "uppercase",
    letterSpacing: "0.15rem",
    cursor: "pointer",
    background: "transparent",
    boxShadow: "-5px 0 #FF5733",
    color: "#FF5733",
    [theme.breakpoints.down("sm")]: {
      "&:hover": {
        boxShadow: "0px 0 10px 5px #FF5733",
        color: "#FF5733",
      },
      fontSize: '1rem',
      boxShadow: "0px 0 10px 5px #FF5733",
    },
  },
}));
export default function ProjectLayout() {
  const classes = useStyles();
  const [headers] = useState(headersdata);
  const [typeofProject, setTypeOfProject] = useState(udemyprojectsdata);
  const [currentID, setCurrentID] = useState(1);

  const setState = (id) => {
    if (id == "1") {
      setCurrentID(id);
      setTypeOfProject(udemyprojectsdata);
    } else if (id == "2") {
      setCurrentID(id);
      setTypeOfProject(personalprojdata);
    } else {
      setCurrentID(id);
      setTypeOfProject(workprojectsdata);
    }
  };
  return (
    <div className={classes.wrapper} id = "Projects">
      <Typography
        variant="h4"
        align="center"
        style={{ fontWeight: 600, letterSpacing: "0.15rem" }}
      >
        Projects
      </Typography>
      <div className={classes.underline} />
      <Grid container>
        <Grid  style = {{paddingBottom: '1rem'}} item lg = {4} md={4} sm={12} xs = {12}>
          <Grid
            container
            align = 'center'
            justify = 'center'
            direction = "row"
          >
            {headers.map((info) => (
              <Grid key = {info.id} onClick={() => setState(info.id)} item lg = {12} md = {12} sm={12} xs = {12}>
                <Button
                  className={
                    currentID === info.id
                      ? classes.headerSelected
                      : classes.headersStyle
                  }
                >
                  {info.header}
                </Button>
              </Grid>
            ))}
          </Grid> 
        </Grid>
        {currentID === 3 ? (
          <Grid item lg = {8} sm={12} md={8}>
            {" "}
            <Card personal={typeofProject} />{" "}
          </Grid>
        ) : null}
        {currentID === 2 ? (
          <Grid item lg = {8} sm={12} md={8}>
            {" "}
            <Card personal={typeofProject} />{" "}
          </Grid>
        ) : null}
        {currentID === 1 ? (
          <Grid item lg = {8} sm={12} md={8}>
            {" "}
            <Card personal={typeofProject} />{" "}
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}
