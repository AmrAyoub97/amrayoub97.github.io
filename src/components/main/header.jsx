import React from "react";
import { Box, makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  navbar: {
    position: "absolute",
    zIndex: 3,
    height: "50px",
    right: 0,
    marginRight: 120,
    padding: 20,
  },
  routesContainer: {
    alignItems: "center",
    display: "flex",
  },
  headerItem: {
    marginTop: "2%",
    marginRight: "5%",
    textDecoration: "none",
    float: "right",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.navbar}>
      <AppBar position="static" style={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar disableGutters>
          <Box className={classes.routesContainer}>
            <Link to="/" className={classes.headerItem}>
              <Typography variant="h6" color="primary" component="span" className={classes.inactiveTab}>
                Home
              </Typography>
            </Link>
            <Link to="/projects" className={classes.headerItem}>
              <Typography variant="h6" color="primary" component="span" className={classes.inactiveTab}>
                Projects
              </Typography>
            </Link>
            <Link to="/resume" className={classes.headerItem}>
              <Typography variant="h6" color="primary" component="span" className={classes.inactiveTab}>
                Resume
              </Typography>
            </Link>
            <Link to="/about" className={classes.headerItem}>
              <Typography variant="h6" color="primary" component="span" className={classes.inactiveTab}>
                About
              </Typography>
            </Link>
            <a href="mailto:amrayoub97@gmail.com" className={classes.headerItem}>
              <Typography variant="h6" color="primary" component="span" className={classes.inactiveTab}>
                Contact
              </Typography>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
