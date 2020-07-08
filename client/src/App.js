import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/navigation/navBar";
import UserList from "./components/Dashboard/UserList";
import ActivityCalendar from "./components/ActivityCalendar";
import UserDataContextProvider from "./context/UserDataContext";
import { MDBIcon } from "mdbreact";

function App() {
  return (
    <React.Fragment>
      <UserDataContextProvider>
        <Navbar />
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/calendar/:itemId" exact component={ActivityCalendar} />
          <Route
            render={() => (
              <div style={{ textAlign: "center", marginTop : "20px" }}>
                {" "}
                <h1>
                  Page Not Found... <MDBIcon icon="frown" />
                </h1>{" "}
                <Link to="/">
                  <span
                    style={{
                      backgroundColor: "#1565c0",
                      color: "white",
                      fontWeight: 700,
                      width: "100px",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <MDBIcon icon="home" /> Home
                  </span>
                </Link>
              </div>
            )}
          />
        </Switch>
      </UserDataContextProvider>
    </React.Fragment>
  );
}

export default App;
