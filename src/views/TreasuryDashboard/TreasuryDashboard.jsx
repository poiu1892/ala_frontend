import { memo } from "react";
import "./treasury-dashboard.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { Paper, Grid, Box, Zoom, Container, useMediaQuery } from "@material-ui/core";
import { MarketCap, ApePrice, WSApePrice, CircSupply, BackingPerAPE, CurrentIndex } from "./components/Metric/Metric";

// import {
//   TotalValueDepositedGraph,
//   MarketValueGraph,
//   RiskFreeValueGraph,
//   ProtocolOwnedLiquidityGraph,
//   OHMStakedGraph,
//   APYOverTimeGraph,
//   RunwayAvailableGraph,
// } from "./components/Graph/Graph";

const TreasuryDashboard = memo(() => {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");

  return (
    <div id="treasury-dashboard-view" className={`${isSmallScreen && "smaller"} ${isVerySmallScreen && "very-small"}`}>
      <Container
        style={{
          paddingLeft: isSmallScreen || isVerySmallScreen ? "0" : "3.3rem",
          paddingRight: isSmallScreen || isVerySmallScreen ? "0" : "3.3rem",
        }}
      >
        {/* <Box className="hero-metrics">
          <Paper className="ohm-card">
            <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
              <MarketCap />
              <ApePrice />
              <WSApePrice />
              <CircSupply />
              <BackingPerAPE />
              <CurrentIndex />
            </Box>
          </Paper>
        </Box> */}

        <Grid container spacing={2} className="data-grid">
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <Paper className="ape-card-1">
              <MarketCap />
            </Paper>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <Paper className="ape-card-1">
              <ApePrice />
            </Paper>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <Paper className="ape-card-1">
              <WSApePrice />
            </Paper>
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={6}>
            <Paper className="ape-card-1">
              <CircSupply />
            </Paper>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <Paper className="ape-card-1">
              <BackingPerAPE />
            </Paper>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <Paper className="ape-card-1">
              <CurrentIndex />
            </Paper>
          </Grid>
        </Grid>

        {/* <Zoom in={true}>
          <Grid container spacing={2} className="data-grid">
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Paper className="ohm-card ohm-chart-card">
                <TotalValueDepositedGraph />
              </Paper>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Paper className="ohm-card ohm-chart-card">
                <MarketValueGraph />
              </Paper>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Paper className="ohm-card ohm-chart-card">
                <RiskFreeValueGraph />
              </Paper>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Paper className="ohm-card">
                <ProtocolOwnedLiquidityGraph />
              </Paper>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Paper className="ohm-card">
                <OHMStakedGraph />
              </Paper>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Paper className="ohm-card">
                <APYOverTimeGraph />
              </Paper>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Paper className="ohm-card">
                <RunwayAvailableGraph />
              </Paper>
            </Grid>
          </Grid>
        </Zoom> */}
      </Container>
    </div>
  );
});

const queryClient = new QueryClient();

// Normally this would be done
// much higher up in our App.
export default () => (
  <QueryClientProvider client={queryClient}>
    <TreasuryDashboard />
  </QueryClientProvider>
);
