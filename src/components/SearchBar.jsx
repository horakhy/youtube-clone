import { IconButton, Paper } from "@mui/material";
import Search from "@mui/icons-material/Search";
import React from "react";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{
        borderRadius: 20,
        padding: "2px 4px",
        border: "1px solid #e3e3e3",
        justifyContent: 'center',
        alignItems: 'center',
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        "&:hover": {
          border: "1px solid #1ed760",
        }
      }}
    >
      <input
        className="search-bar"
        placeholder="Search your vids"
        value=""
        onChange={() => {}}
        variant="standard"
      />
      <IconButton type="submit" sx={{ p: "10px", color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
