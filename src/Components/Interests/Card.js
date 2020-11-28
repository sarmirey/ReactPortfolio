import {
  Box,
  Grid,
  Hidden
} from "@material-ui/core/";
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  shape: {
    height: 300,
    width: 300,
    justifyItems:'center',
    backgroundColor: 'white',
    borderRadius: "2rem",
    boxSizing: "border-box",
    paddingTop: "0.5rem",
    paddingBottom: "3rem",
    paddingLeft: "1rem",
    marginBottom: "2rem",
    paddingRight: "1rem",
    textAlign: "center",
    "&:hover": {
      background: "#FF5733",
      color: "#bff8fd",
    },
    [theme.breakpoints.down("sm")]: {
      // paddingTop: "2rem",
      height: 250,
      width: 250,
    },
  },
  onhoverunderline: {
    width: "3rem",
    height: "0.18rem",
    marginTop: "-0.5rem",
    background: "#FF5733",
    marginLeft: "auto",
    marginRight: "auto",
  },
  nothoveredunderline: {
    width: "3rem",
    height: "0.18rem",
    marginTop: "-0.5rem",
    background: "#bff8fd",
    marginLeft: "auto",
    marginRight: "auto",
  },
  descriptionStyle: {
    letterSpacing: "0.07rem",
    marginBottom: 20,
  },
}));
const Card = ({ data }) => {
  const classes = useStyles();
  const [hovered, setHovered] = useState(false);
  const [currentid, setCurrentId] = useState(0);
  return (
    <div>
    <Grid container align = 'center'>
      {data.map((info) => {
        const { id, title, text, description } = info;
        return (
          <Grid key = {id} item lg = {4} md={6} xs = {12} sm = {6}>
          <Box
            onMouseEnter={() => {
                setHovered(true)
                setCurrentId(id)
            }}
            onMouseLeave={() => setHovered(false)}
            boxShadow={10}
            mt={4}
            key={id}
            className={classes.shape}
          >
            <Hidden smDown>
            <p> {title}</p>
            <h3 style={{ fontWeight: 600 }}> {text}</h3>
            {hovered && id === currentid ? <div className={classes.nothoveredunderline} /> : <div className={classes.onhoverunderline} />}
            <p className={classes.descriptionStyle}> {description}</p>
            </Hidden>
            <Hidden mdUp>
            {hovered && id === currentid ? <div> <p> {title} </p> <p className={classes.descriptionStyle}> {description} </p> </div> : <div> <p> {title}</p> <h3 style={{ fontWeight: 600 }}> {text}</h3>
            <div className={classes.onhoverunderline} />
            <p className={classes.descriptionStyle}> Hover Over Me </p></div> }
            
            </Hidden>
          </Box>
          </Grid>
        );
      })}
      </Grid>
    </div>
  );
};

export default Card;
