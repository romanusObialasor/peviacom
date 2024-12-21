import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

export default function SearchInput() {
  return (
    <PaperComp
      component="form"
      sx={{ p: "10px 10px", display: "flex", alignItems: "center", width: 500 }}
    >
      <Input
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </PaperComp>
  );
}

const Input = styled(InputBase)`
  @media screen and (max-width: 425px) {
    margin-left: 0;
  }
`;

const PaperComp = styled(Paper)`
  color: red;
  @media screen and (max-width: 425px) {
    max-width: 100%;
  }
`;
