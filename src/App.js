import React, { Suspense, Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Setttings";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/appReducer";
import Preloader from "./components/Common/Preloader/preloader";
import store from "./Redux/redux-store";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>;
    }
    return (
      <Suspense fallback={<Preloader/>}>
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
      </Suspense>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

let SocialNetworkApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </BrowserRouter>
  );
};

export default SocialNetworkApp;