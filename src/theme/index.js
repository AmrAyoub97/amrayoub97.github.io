import { createMuiTheme } from "@material-ui/core/styles";
import "./fonts.scss";
import colors from "./colors.module.scss";
import "./globalStyles.scss";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

export const fonts = {
  UBUNTU_LIGHT: "UBUNTU Light",
  UBUNTU_REGULAR: "UBUNTU Regular",
  UBUNTU_MEDIUM: "UBUNTU Medium",
  UBUNTU_BOLD: "UBUNTU Bold",
};

export const fontSizes = {
  xxxsmall: "0.625rem", //10px
  xxsmall: "0.75rem", //12px
  xsmall: "0.875rem", //14px
  small: "1.125rem", //18px
  main: "1.375rem", //22px
  medium: "1.5rem", //24px
  large: "1.875rem", //30px
  xlarge: "3.25rem", //52px
  xxlarge: "3.75rem", //60px
  xxxlarge: "4.5rem", //72px
};

const breakpoints = createBreakpoints({
  values: {
    // mobile resolution: <=640
    xs: 0,
    sm: 340, // 340: https://projects.invisionapp.com/d/main#/console/19977849/418328600/comments/131757167
    md: 640, // 640: https://projects.invisionapp.com/d/main#/console/19977849/418328596/comments/131746689
    lg: 1000,
    xl: 1140,
    mobile: 360,
    tablet: 1000,
  },
});

export const theme = createMuiTheme({
  breakpoints,
  palette: {
    background: {
      default: colors.offwhite,
      paper: colors.white,
    },
    primary: {
      main: colors.gray,
    },
    secondary: {
      main: colors.grayLight,
    },
    text: {
      primary: colors.white,
      secondary: colors.grayDark,
    },
  },
  typography: {
    fontFamily: [fonts.UBUNTU_REGULAR, "-apple-system", "Roboto", "Arial", "sans-serif"].join(","),
    h1: {
      fontFamily: fonts.UBUNTU_BOLD,
      fontSize: fontSizes.xxlarge,
      letterSpacing: 0.5,
      lineHeight: fontSizes.xxlarge,
      [breakpoints.down("sm")]: { fontSize: fontSizes.large, lineHeight: fontSizes.xlarge },
    },
    h2: {
      fontSize: fontSizes.large,
      letterSpacing: 0.5,
      lineHeight: fontSizes.xlarge,
      [breakpoints.down("sm")]: { fontSize: fontSizes.main, lineHeight: "2rem" },
    },
    h3: {
      fontSize: fontSizes.main,
      lineHeight: "2rem",
    },
    h4: {
      fontSize: fontSizes.main,
      lineHeight: fontSizes.large,
    },
    h5: {
      fontSize: fontSizes.xsmall,
    },
    body1: {
      fontSize: fontSizes.main,
      fontFamily: fonts.Ubuntu_REGULAR,
      letterSpacing: 0.5,
      lineHeight: "2.25rem",
      [breakpoints.down("sm")]: { fontSize: fontSizes.small, letterSpacing: 0, lineHeight: fontSizes.large },
    },
    body2: {
      fontSize: fontSizes.xsmall,
      fontFamily: fonts.Ubuntu_REGULAR,
      letterSpacing: 0.5,
      lineHeight: fontSizes.medium,
      [breakpoints.down("sm")]: { fontSize: fontSizes.xxsmall, lineHeight: "1.3125rem" },
    },
    caption: {
      fontSize: fontSizes.small,
      fontFamily: fonts.Ubuntu_REGULAR,
      letterSpacing: 1.05,
      lineHeight: "1.75rem",
    },
    subtitle1: {
      fontSize: fontSizes.xsmall,
      fontFamily: fonts.Ubuntu_BOLD,
      [breakpoints.down("sm")]: {
        fontSize: fontSizes.xxxsmall,
      },
    },
    subtitle2: {
      fontSize: fontSizes.xsmall,
      fontFamily: fonts.Ubuntu_REGULAR,
      letterSpacing: 0.5,
    },
  },
  props: {
    MuiPaper: {
      square: true,
    },
    MuiAppBar: {
      elevation: 0,
    },
    ...{
      MuiSkeleton: {
        animation: "wave",
      },
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: colors.offwhite,
      },
    },
    MuiIcon: {
      fontSizeLarge: {
        fontSize: "2rem",
      },
    },
    MuiButton: {
      sizeLarge: {
        fontSize: fontSizes.small,
        padding: "0.625rem 1.125rem",
      },
      outlined: {
        borderRadius: 0,
        textTransform: "none",
        fontFamily: fonts.Ubuntu_BOLD,
        fontSize: fontSizes.xsmall,
        letterSpacing: 0.5,
        color: colors.gray,
        borderColor: colors.gray,
        whiteSpace: "pre",
      },
    },

    MuiCard: {
      root: {
        backgroundColor: colors.white,
      },
    },
  },
});
