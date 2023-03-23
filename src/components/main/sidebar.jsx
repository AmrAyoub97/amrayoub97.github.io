import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin-icon.svg";
import { ReactComponent as SendIcon } from "../../images/send-icon.svg";
import colors from "../../theme/colors.module.scss";

const useStyles = makeStyles(() => ({
  socialLinksDiv: {
    position: "absolute",
    zIndex: 1,
    width: "50px",
    display: "flex",
    flexDirection: " column-reverse",
    minHeight: "75vh",
    marginTop: "150px",
    marginLeft: "40px",
  },
  icon: {
    marginTop: "20px",
    cursor: "pointer",
    fill: colors.white,
    "&:hover": {
      fill: colors.gray,
    },
  },
}));

function Sidebar() {
  const classes = useStyles();

  return (
    <Box className={classes.socialLinksDiv}>
      <GithubIcon className={classes.icon} onClick={() => window.open("https://github.com/amrabdelshafi97", "_blank")} />
      <LinkedInIcon
        className={classes.icon}
        onClick={() => window.open("https://www.linkedin.com/in/amrabdelshafi97/", "_blank")}
      />
      <SendIcon
        className={classes.icon}
        onClick={() => {
          window.open("mailto:amrayoub97@gmail.com");
        }}
      />
    </Box>
  );
}

export default Sidebar;
