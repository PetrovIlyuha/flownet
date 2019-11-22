import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../Redux/profileReducer";
import {  withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!this.props.match.params.userId) {
      this.props.getUserProfile("5235");
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});


export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect)(ProfileContainer);