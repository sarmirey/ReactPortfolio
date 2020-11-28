import React, { useState } from "react";

import Card from "./Card";
import { Typography } from "@material-ui/core/";
import data from "./data";
import { makeStyles } from "@material-ui/core/styles";

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
  },
}));
export default function About() {
  const classes = useStyles();
  const [cardInfo] = useState(data);
  return (
    <div className={classes.wrapper} id = "About">
      <Typography
        variant="h4"
        align="center"
        style={{ fontWeight: 600, letterSpacing: "0.15rem" }}
      >
        Interests
      </Typography>
      <div className={classes.underline} />
      <div>
          <Card data={cardInfo} />
      </div>
    </div>
  );
}
