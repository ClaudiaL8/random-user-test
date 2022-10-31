import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import RandomUsersPage from "./layout/Main";
import { RandomUsersContextProvider } from "./contexts/randomUsersContexts";
import PageNotFound from "./components/PageNotFound";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      <Header />
      <RandomUsersContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<RandomUsersPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </RandomUsersContextProvider>
    </ThemeProvider>
  );
}

export default App;
