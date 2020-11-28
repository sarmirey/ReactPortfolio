import { Grid, Hidden } from "@material-ui/core/";

import Info from "./Info";
import Picture from "../../Images/profile.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: 140,
    [theme.breakpoints.down("sm")]: {
      padding: 10,
    },
  }, 
  imageStyling: {
    height: 550,
    borderRadius: "2rem",
    [theme.breakpoints.only("md")]: {
      height: 350,
    },
    "&:hover": {
      boxShadow: "0 20px 40px rgba(0,0,0,0.30), 0 20px 40px rgba(0,0,0,0.28)",
      border: "0.3rem solid black",
      textDecorationStyle: "underline",
      transition: "opacity 500ms ease 0s",
      transitionProperty: "opacity",
      transitionDuration: "500ms",
      transitionTimingFunction: "ease",
      transitionDelay: "0s",
      opacity: 1,
    },
  },
}));

export default function MainLayout() {
  const classes = useStyles();
  return (
    <Grid container justify="center" className = {classes.wrapper} id = 'home'>
      <Hidden smDown>
        <Grid item lg = {6} md={6}>
          <img src={Picture} alt = "Profile" className={classes.imageStyling} />
        </Grid>
      </Hidden>
      <Grid item lg = {6} md={6}>
        <Info />
      </Grid>
    </Grid>
  );
}
