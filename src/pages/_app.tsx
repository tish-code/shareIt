import { AuthConsumer } from "@/context/auth-context";
import "@/styles/globals.css";
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthConsumer>{(auth) => <Component {...pageProps} />}</AuthConsumer>
    </ThemeProvider>
  );
}
