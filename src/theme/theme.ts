import { alpha, createTheme } from "@mui/material";
import { createComponents } from "./components";

const primary = {
  main: "#048691",
  dark: "#000",
};
const neutral = {
  "200": "f2f4f7",
  "900": "#000",
};
const action = {
  hover: alpha(neutral[900], 0.04),
};
const palette = {
  primary,
  neutral,
  action,
};
const components = createComponents({ palette });
const typography = {
  fontFamily:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
};
export const theme = createTheme({
  palette,
  components,
  typography,
});
