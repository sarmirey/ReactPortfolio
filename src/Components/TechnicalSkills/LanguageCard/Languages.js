import { Box, Grid } from "@material-ui/core/";
import React, { useState } from "react";

import data from './data'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  shape: {
    paddingTop: 10,
    height: 200,
    width: 200,
    borderRadius: "12rem",
    textAlign: "center",
    "&:hover": {
      background: '#FF5733',
      color: "#bff8fd",
    },
  },
  icon : {
    letterSpacing: "0.15rem",  
  },
  textStyle: {
    letterSpacing: '0.15rem',
    fontSize: '1.5rem',
  }
}));
const Languages = () => {
  const classes = useStyles();
  const [languages] = useState(data);
  return (
    <div>
          <Grid container align = 'center' justify = 'center'>
            {languages.map( info => (
            <Grid key = {info.id} item md={4} lg = {3} sm = {6}>
              <Box
                boxShadow={10}
                mt={5}
                mx={10}
                key={info.id}
                className={classes.shape}
              >
                <p className = {classes.icon}> {info.icon}</p>
                <p className = {classes.textStyle}> {info.text}</p>
              </Box>
            </Grid>
            ))}
          </Grid>
    </div>
  );
};

export default Languages;
