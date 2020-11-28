import { Button, Grid, Typography } from "@material-ui/core/";
import React, { useState } from "react";

import CodingLanguages from './LanguageCard/Languages';
import Values from './ValuesCard/Values'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  underline: {
    width: "5rem",
    height: "0.25rem",
    marginTop: "0.5rem",
    background: "#FF5733",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonStyle2: {
    marginTop: 20,
    outline: "none",
    background: "#FF5733",
    color: "#bff8fd",
    textTransform: "uppercase",
    padding: "0.35rem",
    letterSpacing: "0.15rem",
    fontWeight: 700,
    transition: "all 0.3s linear",
    fontSize: "0.875rem",
    border: "1px solid black",
    cursor: "pointer",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
    "&:hover": {
        background: "#FF5733",
        color: '#bff8fd',
      },
  },
  buttonStyle: {
    marginTop: 20,
    outline: "none",
    background: "white",
    color: "black",
    textTransform: "uppercase",
    padding: "0.35rem",
    letterSpacing: "0.15rem",
    fontWeight: 700,
    transition: "all 0.3s linear",
    fontSize: "0.875rem",
    border: "1px solid black",
    cursor: "pointer",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
  },
}));
export default function Layout() {
  const classes = useStyles();
  const [buttonSelected, setButtonSelected] = useState("Skills");
  return (
    <div id = 'skills' className = {classes.wrapper}>
      <Typography
        variant="h4"
        align="center"
        style={{ fontWeight: 600, letterSpacing: "0.15rem" }}
      >
        Technical Skills & Values
      </Typography>
      <div className={classes.underline} />
      <Grid spacing={2} container align = 'center' justify="center">
        <Grid item md = {1}>
          <Button
            onClick={(e) => {
              setButtonSelected("Skills");
            }}
            className= {
                buttonSelected === 'Skills' ? classes.buttonStyle2 : classes.buttonStyle
            }
          >
            {" "}
            Skills{" "}
          </Button>
        </Grid>
        <Grid item md = {1}>
          <Button
            onClick={() => setButtonSelected("Values")}
            className= {
                buttonSelected === 'Values' ? classes.buttonStyle2 : classes.buttonStyle
            }
          >
            {" "}
            Values{" "}
          </Button>
        </Grid>
      </Grid>
      {
        buttonSelected === 'Skills' ? <Grid container > <Grid item> <CodingLanguages /> </Grid>
      </Grid> : <Grid container> <Grid item> <Values />  </Grid> </Grid>
      }
    </div>
  );
}
