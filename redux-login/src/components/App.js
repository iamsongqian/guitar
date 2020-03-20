import React from "react";
import { connect } from 'react-redux';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name:state.logInfo.name
  }
}

export default connect(mapStateToProps,null)(App);
