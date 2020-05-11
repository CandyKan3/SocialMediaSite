import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const RefreshRoute = ({ component: Component, isDataAvailable, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isDataAvailable ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/home"
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => ({
  isDataAvailable: state.reducer.isDataAvailable
});

export default connect(mapStateToProps)(RefreshRoute);  