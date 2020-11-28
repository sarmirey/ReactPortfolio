import Footer from "./Components/Footer";
import Interests from "./Components/Interests/InterestsLayout";
import Main from "./Components/Main/MainLayout";
import Navbar from "./Components/NavBar";
import Projects from "./Components/Projects/ProjectLayout";
import React from "react";
import Skills from "./Components/TechnicalSkills/Layout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bottomwrapper: {
    position: 'absolute',
    height: 'auto',
    bottom: 0,
  },
  paddingStyle: {
    paddingBottom: 10,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div>
        <div>
          <Main />
        </div>
        <div
          className={classes.paddingStyle}
          style={{ backgroundColor: "#FFFAFA" }}
        >
          <Interests />
        </div>
        <div
          className={classes.paddingStyle}
          style={{ backgroundColor: "#fdfcfa" }}
        >
          <Skills />
        </div>
        <div
          className={classes.paddingStyle}
          style={{ backgroundColor: "#FEFEFA" }}
        >
          <Projects />
        </div>
        <div className={classes.bottomWrapper}>
        <Footer />
      </div>
      </div>
      
    </>
  );
}

export default App;
