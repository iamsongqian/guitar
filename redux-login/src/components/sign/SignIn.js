import React from "react";
import SigninForm from "./SigninForm";
import { connect } from "react-redux";
import {userSigninRequest} from '../../actios/sendActions'

class SignIn extends React.Component {
  render() {
    return (
      <>
        <SigninForm userSigninRequest={this.props.userSigninRequest}/>
      </>
    );
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    userSigninRequest:(data)=>dispatch(userSigninRequest(data))
  }
}

export default connect(null,mapDispatchToprops)(SignIn);
