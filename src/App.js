import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import Header from "./layout/Header";
import RandomUsersPage from "./layout/Main";
import { RandomUsersContextProvider } from "./contexts/randomUsersContexts";
import PageNotFound from "./components/PageNotFound";

import Footer from "./layout/Footer";

const theme = createTheme({
  typography: {
    fontFamily: ["Titillium Web", "Roboto", "Helvetica", "sans-serif"].join(
      ","
    ),
    fontWeightRegular: 600,
  },
  palette: {
    primary: {
      main: "#ef0c3d",
    },
    secondary: {
      main: "#1f383f",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack justifyContent={"space-between"} height="100%">
        <Header />
        <RandomUsersContextProvider>
          <Router>
            <Routes>
              <Route exact path="/" element={<RandomUsersPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </RandomUsersContextProvider>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
