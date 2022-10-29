import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { RandomUsersContextProvider } from "./contexts/randomUsersContexts";
import RandomUsersPage from "./pages/RandomUsersPage.js";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Container>
      <RandomUsersContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<RandomUsersPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </RandomUsersContextProvider>
    </Container>
  );
}

export default App;
