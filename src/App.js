import logo from "./logo.svg";
import "./App.css";
import RandomUsersPage from "./pages/RandomUsersPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <body>
        <RandomUsersPage />
      </body>
    </div>
  );
}

export default App;
