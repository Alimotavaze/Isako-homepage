import { ThemeProvider } from "@emotion/react";
import React, { createContext, useContext } from "react";
import { lightTheme } from "./themes/theme";
import Routers from "./Routers";
import useAppContext, { AppContextType } from "./hooks/useAppContext";
import CssBaseline from "@mui/material/CssBaseline";

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const useApp = () => {
  return useContext(AppContext);
};

function App() {
  const value = useAppContext();

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <AppContext.Provider value={value}>
          <Routers />v{" "}
        </AppContext.Provider>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
