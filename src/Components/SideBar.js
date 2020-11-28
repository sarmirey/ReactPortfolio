import { Button, Grid, Typography } from "@material-ui/core/";
import {GitHub, LinkedIn, PictureAsPdf, Web} from "@material-ui/icons/";

import { Link } from "react-scroll";
import ProfilePic from "../Images/profile.jpg";
import React from "react";
import ReactLink from "@material-ui/core/Link";
import Resume from "../Files/Reynerio_Sarmiento_Resume.pdf";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    showSideBar: {
        position: "fixed",
        top: 0,
        left: 0,
        background: "white",
        zIndex: 999,
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        opacity: 0,
        animationDelay: "0.15s",
        transform: "translateX(-100px)",
        transition: "all 0.3s linear",
        animation: `$slideRight 0.5s ease-in-out 0.3s forwards`,
      },
      closeButton: {
        position: "absolute",
        right: "4.75%",
        top: "2.75%",
        outline: "none",
        fontSize: "1.5rem",
        background: "transparet",
        borderColor: "transparet",
        color: "#FF5733",
        cursor: "pointer",
      },
      sideBarLinks: {
        display: "block",
        textAlign: "center",
        textTransform: "capitalize",
        color: "#FF5733",
        letterSpacing: "0.2rem",
        marginBottom: "0.2rem",
        fontSize: "5rem",
        transition: "all 0.3s linear",
      },
      homeLink: {
        opacity: 0,
        animationDelay: "0.25s",
        animation: `$slideRight 0.5s ease-in-out 0.3s forwards`,
        color: "#FF5733",
        letterSpacing: "0.2rem",
        marginBottom: "0.5rem",
        fontSize: "2rem",
        borderRadius: "0.25rem",
        "&:hover": {
          background: "#FF5733",
          color: "white",
        },
      },
      interestLink: {
        opacity: 0,
        animationDelay: "0.5s",
        animation: `$slideRight 0.5s ease-in-out 0.3s forwards`,
        color: "#FF5733",
        letterSpacing: "0.2rem",
        marginBottom: "0.5rem",
        fontSize: "2rem",
        borderRadius: "0.25rem",
        "&:hover": {
          background: "#FF5733",
          color: "white",
        },
      },
      skillsLink: {
        opacity: 0,
        animationDelay: "0.75s",
        animation: `$slideRight 0.5s ease-in-out 0.3s forwards`,
        color: "#FF5733",
        letterSpacing: "0.2rem",
        marginBottom: "0.5rem",
        fontSize: "2rem",
        borderRadius: "0.25rem",
        "&:hover": {
          background: "#FF5733",
          color: "white",
        },
      },
      projectsLink: {
        opacity: 0,
        animationDelay: "1s",
        animation: `$slideRight 0.5s ease-in-out 0.3s forwards`,
        color: "#FF5733",
        letterSpacing: "0.2rem",
        marginBottom: "0.5rem",
        fontSize: "2rem",
        borderRadius: "0.25rem",
        "&:hover": {
          background: "#FF5733",
          color: "white",
        },
      },
      linkedInStyling: {
        opacity: 0,
        animation: `$slideUp 0.5s ease-in-out 0.3s forwards`,
        fill: "black",
        animationDelay: "0.25s",
        "&:hover": {
          fill: "#FF5733",
        },
      },
      gitStyling: {
        opacity: 0,
        animation: `$slideUp 0.5s ease-in-out 0.3s forwards`,
        fill: "black",
        animationDelay: "0.5s",
        "&:hover": {
          fill: "#FF5733",
        },
      },
      articleStyling: {
        opacity: 0,
        animation: `$slideUp 0.5s ease-in-out 0.3s forwards`,
        fill: "black",
        animationDelay: "0.75s",
        "&:hover": {
          fill: "#FF5733",
        },
      },
      resumeStyling: {
        opacity: 0,
        animation: `$slideUp 0.5s ease-in-out 0.3s forwards`,
        fill: "black",
        animationDelay: "1s",
        "&:hover": {
          fill: "#FF5733",
        },
      },
      profilePicture: {
        animationDelay: "0.20s",
        border: "double 10px #FF5733",
        height: 200,
        width: 200,
        right: "2rem",
        borderRadius: "10%",
      },
      "@keyframes slideRight": {
        "0%": {
          transform: "translateX(-200px)",
          opacity: 0,
        },
        "100%": {
          transform: "translateX(0)",
          opacity: 1,
        },
      },
      "@keyframes slideUp": {
        "0%": {
          transform: "translateY(200px)",
          opacity: 0,
        },
        "100%": {
          transform: "translateY(0)",
          opacity: 1,
        },
      },

}));

export default function SideBar( {toggleSideBar} ) {
    const classes = useStyles();
    return (
        <div className={classes.showSideBar}>
                <Button onClick={toggleSideBar} className={classes.closeButton}>
                  X
                </Button>
                <div className={classes.sideBarLinks}>
                  <img src={ProfilePic} alt = "Profile" className={classes.profilePicture} />
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    onClick={toggleSideBar}
                    offset={-70}
                    duration={500}
                  >
                    <Typography className={classes.homeLink}> Home </Typography>
                  </Link>
                  <Link
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    onClick={toggleSideBar}
                    offset={-70}
                    duration={500}
                  >
                    <Typography className={classes.interestLink}>
                      {" "}
                      Interests{" "}
                    </Typography>
                  </Link>
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    onClick={toggleSideBar}
                    offset={-70}
                    duration={500}
                  >
                    <Typography className={classes.skillsLink}>
                      {" "}
                      Technical Skills{" "}
                    </Typography>
                  </Link>
                  <Link
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    onClick={toggleSideBar}
                    duration={500}
                  >
                    <Typography className={classes.projectsLink}>
                      {" "}
                      Projects{" "}
                    </Typography>
                  </Link>
                  <Grid justify="space-evenly" container>
                    <Grid item sm={4}>
                      <ReactLink
                        href="https://www.linkedin.com/in/reynerio-s-5b5876106/"
                        underline="none"
                        target="_blank"
                        rel="noopener"
                      >
                        <LinkedIn
                          fontSize="large"
                          className={classes.linkedInStyling}
                        />
                      </ReactLink>
                    </Grid>
                    <Grid item sm={4}>
                      <ReactLink
                        href="https://github.com/sarmirey"
                        underline="none"
                        target="_blank"
                        rel="noopener"
                      >
                        <GitHub
                          fontSize="large"
                          className={classes.gitStyling}
                        />
                      </ReactLink>
                    </Grid>
                    <Grid item sm={4}>
                      <ReactLink
                        href="https://medium.com/hack-diversity-movement/cohort-stories-meet-reynerio-fa1a543ccc2f"
                        underline="none"
                        target="_blank"
                        rel="noopener"
                      >
                        <Web
                          fontSize="large"
                          className={classes.articleStyling}
                        />
                      </ReactLink>
                    </Grid>
                    <Grid item sm={4}>
                      <ReactLink
                        href={Resume}
                        target="_blank"
                        variant="contained"
                        rel="noopener noreferrer"
                      >
                        <PictureAsPdf
                          fontSize="large"
                          className={classes.resumeStyling}
                        />
                      </ReactLink>
                    </Grid>
                  </Grid>
                </div>
              </div>


    );
};

