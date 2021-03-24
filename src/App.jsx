import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Blog from "./components/blog";
import Experience from "./components/experience";
import BlogItem from "./components/blog/blog";
import { Box, makeStyles, ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "./theme";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.root}>
        <Router>
          <Route path="/">
            <Homepage />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <BlogItem />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
