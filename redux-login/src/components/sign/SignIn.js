import React from "react";
import SigninForm from "./SigninForm";
import { connect } from "react-redux";
import { userSigninRequest } from "../../actios/sendActions";
import { logIn } from "../../actios/sendActions";

class SignIn extends React.Component {
  render() {
    return (
      <>
        <SigninForm userSigninRequest={this.props.userSigninRequest} logIn={this.props.logIn}/>
      </>
    );
  }
}

const mapDispatchToprops = dispatch => {
  return {
    userSigninRequest: data => dispatch(userSigninRequest(data)),
    logIn: name => dispatch(logIn(name))
  };
};

export default connect(null, mapDispatchToprops)(SignIn);
