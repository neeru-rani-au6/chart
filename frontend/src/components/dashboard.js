import React from "react";
import { Grid, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NotificationsActive } from "@material-ui/icons";
import CreateAlert from "./createAlert";
import BottomTable from "./table";
import ChartSection from "./chart";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  homeSection: {
    borderRadius: "20px",
    backgroundColor: "#d9d6ce",
  },
  rounded: {
    borderRadius: "15px",
  },
  boldHeading: {
    fontWeight: "700",
  },
  root: {
    flexGrow: 1,
  },
  hr: {
    color: "grey",
    width: "100%",
  },
}));

const DashBoard = () => {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {user ? (
        <Grid container className={`${classes.homeSection} p-3`}>
          <Grid
            item
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={`${classes.boldHeading} h5 mb-3`}
          >
            <Grid item>Peak Shaving & Alert</Grid>
            <Grid item>
              <span> Carlsberg Group</span>
              <Badge badgeContent={4} color="error" className="mx-3">
                <NotificationsActive />
              </Badge>
            </Grid>
          </Grid>

          <hr className={`${classes.hr} mt-0`} />

          <Grid
            item
            container
            className={`${classes.boldHeading} ${classes.rounded}  bg-white`}
          >
            <ChartSection />
          </Grid>

          <Grid container className={classes.root}>
            <Grid item xs={4} className={`${classes.rounded} bg-white my-3`}>
              <CreateAlert />
            </Grid>
            <Grid item xs={8} className={`${classes.rounded} px-3`}>
              <BottomTable />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <div>{history.push("/")}</div>
      )}
    </>
  );
};
export default DashBoard;
