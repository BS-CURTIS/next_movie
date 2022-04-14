import React, { createContext } from "react";
import { darkTheme, lightTheme } from "../styles/theme";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/global";
import { useDarkMode } from "../hooks/useDarkMode";
import { ContextProps } from "../interface/common";

export const ThemeContext = createContext<ContextProps>({
  theme: lightTheme,
  toggleTheme: () => {
    return null;
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalStyle theme={theme === lightTheme ? lightTheme : darkTheme} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default MyApp;
