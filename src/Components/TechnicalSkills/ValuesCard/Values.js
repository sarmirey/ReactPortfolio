import { Box, Grid } from "@material-ui/core/";
import React, { useState } from "react";

import data from './data'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  shape: {
    height: 200,
    width: 200,
    marginBottom: '2rem',
    textAlign: "center",
  },
  icon : {
    letterSpacing: "0.15rem",
    [theme.breakpoints.down("sm")]: {
        fontSize: '8px',
      },    
  },
  textStyle: {
    marginTop: '-2rem',
    letterSpacing: '0.15rem',
    fontSize: '1.5rem',
  },
  underline: {
    width: "5rem",
    height: "0.18rem",
    marginTop: "-1rem",
    background: "#FF5733",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
const Languages = () => {
  const classes = useStyles();
  const [languages] = useState(data);
  const [hovered, setHovered] = useState(false);
  const [currentid, setCurrentId] = useState(0);
  return (
    <div>
          <Grid container align = 'center'  justify = 'center'>
            {languages.map( info => (
            <Grid item md={4} lg = {4} sm = {6}>
              <Box
                onMouseEnter={() => {
                  setHovered(true)
                  setCurrentId(info.id)
                }}
                onMouseLeave={() => setHovered(false)}
                boxShadow={0}
                mt={5}
                mx={10}
                key={info.id}
                className={classes.shape}
              >
                <div>
                <p className = {classes.icon}> {info.icon}</p>
                <p className = {classes.textStyle}> {info.text}</p>
                </div>
                {hovered && info.id === currentid ? <div className = {classes.underline}/> : null }
              </Box>
            </Grid>
            ))}
          </Grid>
    </div>
  );
};

export default Languages;
