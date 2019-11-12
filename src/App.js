import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Setttings";

const App = props => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar state={props.state}/>
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <Dialogs
          state={props.state}
          dispatch={props.dispatch}
        />}/>
        <Route exact path="/profile" render={() => <Profile
                                                      state={props.state}
                                                      dispatch={props.dispatch}/>}
                                                    />
        <Route exact path="/news" component={News}/>
        <Route exact path="/music" component={Music}/>
        <Route exact path="/settings" component={Settings}/>
      </div>
    </div>
  );
};

export default App;
