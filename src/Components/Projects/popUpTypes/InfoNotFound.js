import { Box, Button, Grid, Popover, Typography } from "@material-ui/core/";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";

import CachedIcon from '@material-ui/icons/Cached';

export default function InfoFound({ id, header }) {
  return (
    <>
      <PopupState key = {id} variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div key = {id}>
            <Grid key = {id} item md>
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
                  <Typography style={{ color: "#FF5733" }}>
                    {" "}
                    <CachedIcon fontSize ="small" /> In Progress 
                  </Typography>
                </Box>
              </Popover>
            </Grid>
          </div>
        )}
      </PopupState>
    </>
  );
}
