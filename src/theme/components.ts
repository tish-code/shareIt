import { createTheme, filledInputClasses } from "@mui/material";

const muiTheme = createTheme();
export const createComponents = ({ palette }: any) => {
  return {
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            opacity: 1,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: "24px",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          borderRadius: 8,
          borderStyle: "solid",
          borderWidth: 2,
          overflow: "hidden",
          borderColor: palette.neutral[200],
          transition: muiTheme.transitions.create(["border-color"]),
          "&:hover": {
            backgroundColor: palette.action.hover,
          },
          "&:before": {
            display: "none",
          },
          "&:after": {
            display: "none",
          },
          [`&.${filledInputClasses.focused}`]: {
            backgroundColor: "transparent",
            borderColor: palette.primary.main,
          },
        },
      },
    },
  };
};
