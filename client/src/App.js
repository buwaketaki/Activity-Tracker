import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navigation/navBar";
import UserList from "./components/Dashboard/UserList";
import ActivityCalendar from "./components/ActivityCalendar";
import UserDataContextProvider from "./context/UserDataContext";

function App() {
  return (
    <React.Fragment>
      <UserDataContextProvider>
        <Navbar />
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/calendar/:itemId" exact component={ActivityCalendar} />
          <Route render={() => <h1>Page Not Found</h1>} />
        </Switch>
      </UserDataContextProvider>
    </React.Fragment>
  );
}

export default App;
