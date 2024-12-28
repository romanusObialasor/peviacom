import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "70px",
  height: "70px",
});

export default function CartProduct({ image, name, details, price, onDelete }) {
  return (
    <Paper
      sx={(theme) => ({
        p: 2,
        // margin: "auto",
        height: 100,
        borderRadius: 2,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        // width: ,
        justifyContent: "space-between",
        mb: 2,
        boxShadow: "0 3px 5px 1px rgba(0,0,0,0.1)",
        // ...theme.applyStyles("dark", {
        //   backgroundColor: "#1A2027",
        // }),
      })}
    >
      <Box>
        <Img
          sx={{
            borderRadius: 1,
          }}
          alt="complex"
          src={image}
        />
      </Box>

      <Box
        sx={{
          ml: -3,
        }}
      >
        <Typography
          sx={{ fontSize: "14px", fontWeight: 600, fontFamily: "exo" }}
          gutterBottom
          variant="subtitle1"
          component="div"
        >
          {name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {details}
        </Typography>
        <Typography
          fontWeight="600"
          fontSize="20px"
          variant="subtitle1"
          component="div"
          color="#23769E"
        >
          {price}
        </Typography>
      </Box>
      <Box
        onClick={onDelete}
        sx={{
          color: "#CA0202",
          cursor: "pointer",
        }}
      >
        <DeleteIcon />
      </Box>
    </Paper>
  );
}
