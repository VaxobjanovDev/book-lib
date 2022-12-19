import {InputAdornment, TextField} from "@mui/material";
import {SearchIcon} from "../icons";
import React, {useContext, useEffect} from "react";
import {StoreContext} from "../../store/store";

export const CustomInput = () => {
  const [title, setTitle] = React.useState("");
  const {getBooks} = useContext(StoreContext)

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      getBooks("/books", title?"/"+title:"");
    }, 1000);
    return () => clearTimeout(getData);
  }, [title]);

  return (
    <TextField
      fullWidth
      variant="outlined"
      label="Search Book..."
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon/>
          </InputAdornment>
        ),
      }}
    />
  );
};
