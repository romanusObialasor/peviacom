import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { PiShoppingCartThin } from "react-icons/pi";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function AllProducts() {
  return (
    <Paper
      sx={(theme) => ({
        p: 2,
        m: 3,
        // margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        borderRadius: 2,
        backgroundColor: "#fff",
        ...theme.applyStyles("dark", {
          backgroundColor: "#1A2027",
        }),
      })}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/assets/productTest.jpeg" />
          </ButtonBase>
        </Grid>
        <Grid
          item
          xs={12}
          sm
          container
          sx={{
            mt: 2,
          }}
        >
          <Grid
            sx={{
              ml: 1,
            }}
            item
            xs
            container
            direction="column"
            spacing={2}
          >
            <Grid item xs>
              <Typography
                sx={{ fontSize: "20px", fontWeight: 600, fontFamily: "exo" }}
                gutterBottom
                variant="subtitle1"
                component="div"
              >
                Solar Inverter 1.0KVA
              </Typography>
              <Typography variant="body2" gutterBottom>
                Uninterrupted Power
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ cursor: "pointer", fontSize: "20px" }}
                variant="body2"
              >
                <PiShoppingCartThin />
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "flex-end",
              fontSize: 3,
            }}
          >
            <Typography
              fontWeight="600"
              fontSize="20px"
              variant="subtitle1"
              component="div"
              color="#23769E"
            >
              ₦270,000
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
