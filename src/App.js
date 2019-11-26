import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Setttings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/appReducer";
import Preloader from "./components/Common/Preloader/preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route
                 path="/profile/:userId"
                 render={() => <ProfileContainer/>}
          />
          <Route path="/dialogs" render={() => <DialogsContainer/>}/>
          <Route exact path="/users" render={() => <UsersContainer/>}/>
          <Route exact path="/news" component={News}/>
          <Route exact path="/music" component={Music}/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/login" render={() => <LoginPage/>}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized
});

export default compose(
  withRouter,
connect(mapStateToProps, {initializeApp}))(App);
