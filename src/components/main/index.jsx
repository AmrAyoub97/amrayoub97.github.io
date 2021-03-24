import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin-icon.svg";
import colors from "theme/colors.module.scss";

const useStyles = makeStyles(() => ({
  socialLinksDiv: {
    position: "absolute",
    zIndex: 1,
    width: "50px",
    display: "flex",
    flexDirection: " column-reverse",
    minHeight: "75vh",
    marginTop: "150px",
  },
  icon: {
    "&:hover": {
      background: "none",
    },
    "& g": {
      fill: colors.white,
    },
    "&:hover, &:focus": {
      "& g": {
        fill: colors.grayInfoText,
      },
    },
  },
}));

function Sidebar() {
  const classes = useStyles();

  return (
    <Box className={classes.socialLinksDiv}>
      <GithubIcon className={classes.icon} onClick={() => window.open("", "_blank")} />
      <LinkedInIcon className={classes.icon} onClick={() => window.open("", "_blank")} />
    </Box>
  );
}

export default Sidebar;
