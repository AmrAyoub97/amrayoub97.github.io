import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

function About() {
  console.log(`anout`);
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h1" color="textPrimary">
        {"Hey"}
      </Typography>
    </Box>
  );
}
export default About;
