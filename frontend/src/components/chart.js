import React from "react";
import { Settings } from "@material-ui/icons";
import { Grid, IconButton } from "@material-ui/core";
import Chart from "react-apexcharts";

const options = {
  chart: {
    height: 280,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 5,
    colors: ["white"],
    strokeColor: "#00BAEC",
    strokeWidth: 3,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
    ],
  },
};
const series = [
  {
    name: "DK-1",
    data: [45, 52, 38, 45, 19, 23, 2],
  },
  {
    name: "DK-2",
    data: [42, 22, 18, 65, 1, 45, 22],
  },
];

const PowerChart = () => {
  return (
    <>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className="m-3 mb-0"
        >
          <Grid item>
            <h6 style={{ fontWeight: "800" }}>Power Cost</h6>
          </Grid>
          <Grid item>
            <input type="date" name="date" />
            <IconButton>
              <Settings />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container>
        <Grid item>
          <Chart
            options={options}
            series={series}
            type="area"
            width="950"
            height="450"
            className="m-3"
          />
        </Grid>
        </Grid>
    </>
  );
};
export default PowerChart;
