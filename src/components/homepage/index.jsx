import React, { useState, useEffect, useRef } from "react";
import { useDencrypt } from "use-dencrypt-effect";
import HALO from "vanta/dist/vanta.halo.min";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  IntroPage: {
    height: "100vh",
  },
  introText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    textAlign: "center",
    transform: "translateX(-50%) translateY(-50%)",
    padding: "7%",
  },
}));

function Homepage() {
  const name = "Amr Ayoub";
  const description =
    "I'm a Software Engineer with +1 years of experience,  I think I have one of the best jobs in the world. I'm a maker. I use abstract ideas and I materialize them on a click of a button. I think that's awesome. ";

  const classes = useStyles();
  const [value, setValue] = useDencrypt("_");
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    if (setValue) setValue(name);
  }, [setValue]);

  return (
    <Box ref={myRef} className={classes.IntroPage}>
      <Box className={classes.introText}>
        <Typography variant="h1" color="textPrimary">
          {value}
        </Typography>
        <Typography variant="h2" color="textPrimary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
export default Homepage;
