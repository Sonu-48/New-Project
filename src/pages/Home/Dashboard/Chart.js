import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box, Container, Grid, Typography } from "@mui/material";
import Currentuser from "./Currentuser";
import { FaShoppingBasket } from "react-icons/fa";
import styled from "@emotion/styled";
import Teamskills from "./Teamskills";

const Visitsbox = styled("div")({
  background: "#fff",
  textAlign: "center",
  marginTop: "20px",
  boxShadow:"0 10px 25px 0 rgba(50, 50, 93, 0.07), 0 5px 15px 0 rgba(0, 0, 0, 0.07)",
  borderRadius:'0.25rem',
  "& p": {
    color: "#112B4A",

    lineHeight: "2.0rem",
    padding: "4px 0px",
  },
  "& svg": {
    color: "rgba(55, 77, 103, 0.2)",
    fontSize: "35px",
  },
});

const TravelDetailsView = () => {
  const chartData = {
    chart: {
      id: "apexchart-example",
      type: "line",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "jul",
        "Aug",
        "sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        // colorStops: []
      },
    },
    legend: {
      // position: '',
      width: 200,
      // position: 'top',
    },
    series: [
      {
        type: "line",
        data: [0, 9, 20, 12, 28, 16, 37, 5, 42, 22, 12, 16],
      },
    ],
  };

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item lg={6} md={6} xs={12}>
            <ReactApexChart
              options={chartData}
              series={chartData.series}
              style={{ background: "#fff" }}
            />
            <Visitsbox mt={3}>
              <Grid container>
                <Grid
                  item
                  lg={6}
                  md={6}
                  xs={6}
                  style={{ borderRight: "1px solid #efefef" }}
                >
                  <Box sx={{ padding: "20px 0px" }}>
                    <FaShoppingBasket />
                    <Typography
                      variant="body1"
                      style={{ fontSize: "30px", letterSpacing: "2.1px" }}
                    >
                      3,642
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ fontSize: "1rem", fontWeight: 500 }}
                    >
                      Visits
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                  <Box sx={{ padding: "20px 0px" }}>
                    <FaShoppingBasket />
                    <Typography
                      variant="body1"
                      style={{ fontSize: "30px", letterSpacing: "2.1px" }}
                    >
                      $12,311
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ fontSize: "1rem", fontWeight: 500 }}
                    >
                      Purchases
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Visitsbox>
          </Grid>
        </Grid>
      </Container>
      <Box mt={5}>
      <Teamskills/>
      </Box>
    </Box>
  );
};

const Chart = () => {
  return <TravelDetailsView />;
};

export default Chart;
