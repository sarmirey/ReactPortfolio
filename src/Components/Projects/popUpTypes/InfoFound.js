import {
    Box,
    Button,
    Grid,
    Popover,
} from "@material-ui/core/";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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



export default function InfoFound({ info, header }) {
  const classes = useStyles();
  return (
    <>
      <PopupState key = {info.id} variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div key = {info.id}>
            <Grid key = {info.id} item md>
              <Button
                size="medium"
                style={{ fontWeight: "600", color: "#FF5733" }}
                {...bindTrigger(popupState)}
              >
                {header}
              </Button>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <Box p={2}>
                  {info.languages.map((x) => (
                    <Button className={classes.buttonCustom}>{x}</Button>
                  ))}
                </Box>
              </Popover>
            </Grid>
          </div>
        )}
      </PopupState>
    </>
  );
}
