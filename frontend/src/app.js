import React, { Component } from "react";
import Register from "./components/register";
import Login from "./components/login";
import { HashRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/sideBar";
import { Grid } from "@material-ui/core";
class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          {this.props.userState.user ? (
            <Grid container>
              <Route path="/home" component={Home} exact />
            </Grid>
          ) : (
            <Redirect to="/" />
          )}
          <Route path="/register" component={Register} exact />
          <Route path="/" component={Login} exact />
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};
export default connect(mapStateToProps)(App);
