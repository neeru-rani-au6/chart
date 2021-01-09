import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { registerUser } from "../redux/action/user";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),
});

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    isSubmitting: false,
    error: "",
  };

  handleSubmit = async (values) => {
    const newState = { ...this.state };
    newState.isSubmitting = true;
    this.setState(newState);
    await this.props.registerUser(values);
    newState.error = this.props.user.error;
    newState.isSubmitting = false;
    this.setState(newState);
    if (!this.props.user.error) {
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <Formik
        validationSchema={SignInSchema}
        initialValues={this.state}
        onSubmit={this.handleSubmit}
      >
        {({
          handleSubmit,
          handleChange,
          errors,
          values,
          touched,
          isValid,
          dirty,
        }) => (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="register-paper">
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <form
                onSubmit={handleSubmit}
                className="register-form"
                noValidate
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="fname"
                      name="name"
                      variant="outlined"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      value={values.name}
                      onChange={handleChange}
                      error={!!(errors.name && touched.name)}
                      helperText={errors.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      error={!!(errors.email && touched.email)}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      style={{ marginBottom: "20px" }}
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={values.password}
                      onChange={handleChange}
                      error={!!(errors.password && touched.password)}
                      helperText={errors.password}
                    />
                  </Grid>
                  {this.state.error && (
                    <Grid item xs={12}>
                      <div className="error">{this.state.error}</div>
                    </Grid>
                  )}
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="register-submit"
                  disabled={!(dirty && isValid)}
                >
                  Register
                </Button>
                <Grid container justify="center" className="mt-2">
                  <Grid item>
                    Already have an account?
                    <Link href="/#/" variant="body2">
                      Login
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userState,
  };
};

export default connect(mapStateToProps, { registerUser })(Register);
