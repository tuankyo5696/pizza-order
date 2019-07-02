import React, { Component } from "react";
import SignIn from "./../../../components/Auth/SignIn/SignIn";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { EMPTY_STRING } from "./../../../constants/helper";
class SignInPage extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== EMPTY_STRING
  };
};
export default connect(mapStateToProps)(withRouter(SignInPage));
