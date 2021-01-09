import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/action/user";
import { Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
    padding: theme.spacing(3),
    boxShadow:
      "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const user = useSelector((state) => state.userState);
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
    isSubmitting: false,
  });

  const handleSubmitLogin = async (values) => {
    setState({ ...state, isSubmitting: true });
    await dispatch(loginUser(values));
    setState({ ...state, isSubmitting: false });
    console.log(user.error);
    if (!user.error) {
      history.push("/home");
    }
  };
  return (
    <Formik initialValues={state} onSubmit={handleSubmitLogin}>
      {({ handleSubmit, handleChange, values, isValid, dirty }) => (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={values.email}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange}
              />
              {user.error && <div className="error">{user.error}</div>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={!(dirty && isValid)}
              >
                Login
              </Button>
              <Grid container justify="center" className="mt-2">
                <Grid item>
                  Don't have an account?
                  <Link href="/#/register" variant="body2" className="mt-2">
                    {"Register"}
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
