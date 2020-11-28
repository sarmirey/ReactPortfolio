import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@material-ui/core/";
import React, { useState } from "react";

import InfoNotFound from './popUpTypes/InfoNotFound';
import TechStackPopUp from "./popUpTypes/InfoFound";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 320,
    maxheight: 380,
  },
  buttonCustom: {
    margin: 2,
    outline: "none",
    background: "#FF5733",
    color: "#bff8fd",
    textTransform: "uppercase",
    padding: "0.3rem",
    fontWeight: 600,
    transition: "all 0.02s linear",
    fontSize: "0.8rem",
    borderRadius: "1rem",
    justifyItems: "center",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
    "&:hover": {
      background: "#FF7233",
    },
  },
}));

const OpenLink = ({ info, header }) => {
  return (
    <>
      <Link href={info} underline="none" target="_blank" rel="noopener">
        <Grid item md={2}>
          <Button size="medium" style={{ fontWeight: "600", color: "#FF5733" }}>
            {header}
          </Button>
        </Grid>
      </Link>
    </>
  );
};

export default function PersonalProjectCard({ personal }) {
  const classes = useStyles();
  const [cardInfo] = useState(personal);
  return (
    <Grid container justify = 'center'>
      {cardInfo.map((info) => (
        <Grid key = {info.id} item md={6}>
          <Box
            boxShadow={5}
            width="320px"
            maxheight="380px"
            marginBottom="2rem"
          >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia>{info.image}</CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {info.header}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {info.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Grid container>
                  <TechStackPopUp info={info} header="Tech Stack" />
                  {info.visit !== "" ? (
                    <OpenLink info={info.visit} header="Visit" />
                  ) : (
                    <InfoNotFound id = {info.id} header = "Visit"  />
                  )}

                  {info.git !== "" ? (
                    <OpenLink info ={info.git} header = "Git"  />
                  ) : (
                    <InfoNotFound id = {info.id} header = "Git" />
                  )}
                </Grid>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
