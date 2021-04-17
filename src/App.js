import "./css/main.css";
import "./css/users.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import DataProvider from "./DataProvider";
import CreateUser from "./Components/CreateUser";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <div> Main</div>
              <MainPage />
            </Route>
            <Route path="/create">
              <div>Create New User</div>
              <CreateUser />
            </Route>
            <Route path="/edit/:id">
              <div> Edit </div>
              <EditUser />
            </Route>
          </Switch>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
