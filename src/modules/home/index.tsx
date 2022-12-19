import {Box, Button, Container,Typography} from "@mui/material";
import * as React from "react";
import BasicModal from "./components/edit/modal";
import {Cards} from "./components/cards";
import {StoreContext} from "../../store/store";
import {useEffect} from "react";

export const HomeModule = () => {

  const [open, setOpen] = React.useState(false);
  const {books,getAllBooks} = React.useContext(StoreContext)
  const handleOpen = () => setOpen(true);

  useEffect(() => {
      if(!open){
        getAllBooks("/books")
      }
  },[open])

  return (
    <Container maxWidth={"xl"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "16px 0",
        }}
      >
        <Typography variant={"h4"}>All books</Typography>
        <Button onClick={handleOpen} size={"medium"} variant={"contained"}>
          + Add
        </Button>
      </Box>
      {books?.length===0 && <h1>No data</h1>}

      {books?.length>0 && <Cards books={books}/>}

      <BasicModal title={"Add new book"} open={open} setOpen={setOpen} />
    </Container>
  );
};
