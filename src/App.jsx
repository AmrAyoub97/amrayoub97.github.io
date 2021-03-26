import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import About from "./components/about";
import Resume from "./components/resume";
import Sidebar from "./components/main/sidebar";
import Header from "./components/main/header";
import Logo from "./images/logo.png";
import { Box, makeStyles, ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "./theme";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    minHeight: "100vh",
  },
  logo: {
    position: "absolute",
    width: 80,
    margin: 25,
    zIndex: 3,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <img className={classes.logo} src={Logo} alt="logo" />
      <Sidebar />
      <Header />
      <Box className={classes.root}>
        <Router>
          <Route path="/">
            <Homepage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
