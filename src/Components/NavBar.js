import { AppBar, Box, Button, Grid, Hidden, Toolbar, Typography } from "@material-ui/core/";
import React, { useState } from "react";

import { Link } from "react-scroll";
import {Menu} from "@material-ui/icons/";
import SideBar from './SideBar'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "white",
    height: 60,
  },
  namePlaceHolder: {
    flexGrow: 1,
  },
  title: {
    color: "#FF5733",
    letterSpacing: "0.15rem",
    fontWeight: 600,
    fontSize: theme.typography.pxToRem(20),
    fontFamily: '"Open Sans", sans-serif',
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(18),
    },
  },
  headers: {
    color: "#FF5733",
    letterSpacing: "0.15rem",
    fontSize: theme.typography.pxToRem(16),
    "&:hover": {
      color: "black",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <Box p={1} className={classes.namePlaceHolder}>
            <Typography className={classes.title}>
              Reynerio Sarmiento
            </Typography>
          </Box>
          <Hidden smDown>
            <Box>
              <Grid justify="center" alignItems="center" container spacing={5}>
                <Grid item md>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Typography className={classes.headers}> Home</Typography>
                  </Link>
                </Grid>
                <Grid item md>
                  <Link
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Typography className={classes.headers}>About</Typography>
                  </Link>
                </Grid>
                <Grid item md>
                  <Link
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Typography className={classes.headers}>
                      Projects
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Hidden>
          <Hidden mdUp>
            <Button onClick={toggleSideBar}>
              <Grid justify="center" alignItems="center" container>
                <Menu style={{ fill: "#FF5733" }} />
              </Grid>
            </Button>
            {isOpen ? (
              <SideBar toggleSideBar = {toggleSideBar} />
            ) : (
              ""
            )}
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
}
